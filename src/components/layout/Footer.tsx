import React from 'react';
// import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Linkedin, Award, BookOpen, Stethoscope } from 'lucide-react';

const siteMetadata = {
  linkedin: "https://www.linkedin.com/in/arjun-maria-67a271135/",
  email: "arjunmaria@hotmail.com",
  phone: "+91-8076253821",
  address: "Pediatric Gastroenterology OPD 6th Floor",
  address1: "Child Welfare Clinic",
  consultingHours: "Mon - Sat 10:00 am - 5:00 pm",
  consultingHours1: "Mon - Sat 6:00 pm - 8:00 pm",
  
};



// const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
//   <Link to={to} className="hover:text-[#FBE8DC] transition-colors duration-300 text-white">
//     {children}
//   </Link>
// );

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white rounded-t-3xl shadow-2xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Dr. Arjun Maria</h3>
            <h4 className="text-lg">Pediatric Gastroenterology & Hepatology</h4>
            <p className="text-sm text-gray-200 mt-4 max-w-xs">
              DM specialization in Pediatric Hepatology with 14 years of experience in managing pediatric liver, pancreas, and gastrointestinal disorders.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Specializations</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>Jaundice in Children/Babies</span>
              </li>
              <li className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>Pediatric Liver Disease</span>
              </li>
              <li className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>Gastrointestinal Disorders</span>
              </li>
              <li className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>Liver Biopsy</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Consultation Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Consultation Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Consulting Hours</p>
                  <p className="text-sm">{siteMetadata.consultingHours}</p>

                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <div>
                  <p className="text-sm">{siteMetadata.address}, </p>
                  <p className="text-sm font-medium">Amrita Hospital and Institute of Medical Sciences</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Consulting Hours</p>
                  <p className="text-sm">{siteMetadata.consultingHours1}</p>

                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <div>
                  <p className="text-sm">{siteMetadata.address1}</p>
                  <p className="text-sm font-medium">1288, Sector 37, Near Lal Market                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg mt-4 hover:bg-[#FBE8DC] transition-all duration-300 cursor-pointer">
                <p className="text-sm text-blue-900 font-semibold mb-2">Book an Appointment</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <p className="text-lg font-bold text-blue-900">{siteMetadata.phone}</p>
                </div>
                <p className="text-xs text-blue-900/80 mt-1">Click to call now</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Credentials */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact & Profile</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <p className="text-sm">{siteMetadata.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <p className="text-sm">{siteMetadata.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <p className="text-sm">DM Pediatric Hepatology</p>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <p className="text-sm">14+ Years Experience</p>
              </div>
              <a
                href={siteMetadata.linkedin}
                className="flex items-center gap-2 hover:text-[#FBE8DC] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dr. Arjun Maria. All rights reserved.
          </p>
          <p className="text-sm">
            DM Pediatric Hepatology | Gastroenterology Expert
          </p>
          <div className="flex gap-4 text-sm">
            <p className="text-sm">
              website by <a href="https://rnahealthtech.com" className="text-slate-100 hover:underline">RNA HealthTech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;