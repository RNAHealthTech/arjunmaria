 //"generate-sitemap": "npm run build && node generateDynamicSitemap.js",

 import { writeFileSync, readdirSync } from 'fs';
 import { join } from 'path';
 import { SitemapStream, streamToPromise } from 'sitemap';
 
 
 // const { writeFileSync, readdirSync } = require('fs');
 // const { join } = require('path');
 // const { SitemapStream, streamToPromise } = require('sitemap');
 
 const hostname = 'https://drarjunpedgastro.com/';
 
 // Function to get image URLs from public/images folder
 function getImageUrls() {
   const imagesDir = join(process.cwd(), 'public', 'images');
   const images = readdirSync(imagesDir);
   return images.map(image => `${hostname}/images/${image}`);
 }
 
 // Your existing functions for getting static and dynamic routes
 function getStaticRoutes() {
   return [
         '/',
         '/about',
         '/contact',
         '/services', 
         '/services/jaundice-in-babies',
         '/services/hepatitis',
         '/services/metabolic-liver',
         '/services/acute-liver',
         '/services/chronic-liver',
         '/services/liver-transplant',
         '/services/hematemesis',
         '/services/abdominal-pain',
         '/services/constipation',
         '/services/diarrhea', 
         '/procedures',
         '/procedures/endoscopy',
         '/procedures/peg',
         '/procedures/colonoscopy',
         '/procedures/liver-biopsy',
         '/procedures/fibroscan',

       ];
   }
 
 async function generateSitemap() {
   try {
     
     const staticRoutes = getStaticRoutes();
     const imageUrls = getImageUrls();
 
     const stream = new SitemapStream({ hostname });
 
     // Add static and dynamic routes
     [...staticRoutes].forEach(route => {
       stream.write({ url: route });
     });
 
     // Add a special entry for your images page (if you have one)
     stream.write({
       url: '/images',
       img: imageUrls.map(url => ({
         url,
         caption: 'Image from our gallery',
         title: url.split('/').pop() // use filename as title
       }))
     });
 
     // Optionally, you can also add image references to other relevant pages
     // For example, if you have a gallery page:
     stream.write({
       url: '/gallery',
       img: imageUrls.map(url => ({ url }))
     });
 
     stream.end();
 
     const data = await streamToPromise(stream);
     writeFileSync('./public/sitemap.xml', data.toString());
     
     console.log('Sitemap with images generated successfully');
   } catch (error) {
     console.error('Error generating sitemap:', error);
   }
 }
 
 generateSitemap();