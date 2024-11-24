import React from 'react';
import { Calendar, Mail, Phone, Linkedin, MapPin, Languages, Award, Book, Hospital, Microscope, FileText, Heart } from 'lucide-react';

interface Publication {
  title: string;
  link: string;
}

interface Award {
  year: string;
  title: string;
}

interface Education {
  year: string;
  degree: string;
  institution: string;
}

const AboutPage: React.FC = () => {
  const publications: Publication[] = [
    {
      title: "Rotational thromboelastometry-guided blood component use in cirrhotic children undergoing invasive procedures: Randomized controlled trial",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/liv.15398"
    },
    {
      title: "Association of HLA DRB1 Allele Profile with Pediatric Autoimmune Liver Disease in India",
      link: "https://www.sciencedirect.com/science/article/pii/S0973688323000014"
    },
    {
      title: "Choledochal Cysts In Children-Clinical Spectrum",
      link: "https://www.jcehepatology.com/article/S0973-6883(23)00220-7/abstract"
    },
    {
      title: "Continuous Renal Replacement Therapy in Pediatric Patients with Hepatitis A Virus associated Acute Liver Failure",
      link: "https://www.jcehepatology.com/article/S0973-6883(23)00630-8/abstract"
    },
    {
      title: "Endoscopic Cystogastrostomy in Children with Symptomatic Pancreatic Pseudocyst",
      link: "https://www.jcehepatology.com/article/S0973-6883(23)00213-X/abstract"
    }
  ];

  const awards: Award[] = [
    {
      year: "2024",
      title: "Young Investigator Award - European Society of Paediatric Gastroenterology Hepatology and Nutrition, Milan, Italy"
    },
    {
      year: "2023",
      title: "CP Mittal Award - Indian Society of Pediatric Gastroenterology Hepatology and Nutrition"
    },
    {
      year: "2023",
      title: "Preceptorship Award - Singapore Hepatology Conference"
    },
    {
      year: "2023",
      title: "Rising Star Award - Pediatric Hepatology awarded by Indian Society of Pediatric Gastroenterology Hepatology and Nutrition"
    },
    {
      year: "2022",
      title: "2nd prize - Indian National Association for Study of Liver INASL Oral Plenary session"
    },
    {
      year: "2022",
      title: "Young Investigator Award - European Society of Paediatric Gastroenterology Hepatology and Nutrition, Copenhagen"
    }
  ];

  const education: Education[] = [
    {
      year: "2022",
      degree: "DM (Pediatric Hepatology)",
      institution: "Institute of Liver and Biliary Sciences, New Delhi"
    },
    {
      year: "2018",
      degree: "DNB (Pediatrics)",
      institution: "Hindu Rao Hospital and North DMC Medical College, New Delhi"
    },
    {
      year: "2015",
      degree: "DCH (Pediatrics)",
      institution: "University College of Medical Sciences and GTB Hospital, New Delhi"
    },
    {
      year: "2010",
      degree: "MBBS",
      institution: "Maulana Azad Medical College, New Delhi"
    }
  ];

  return (
    <main className="min-h-screen mt-[130px]">
      {/* Hero Section with Modern Gradient */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-red-900/70"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img src="/images/doc.png" alt="Dr. Arjun Maria" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Dr. Arjun Maria</h1>
              <p className="text-xl text-blue-200 mb-4">
                Pediatric Gastroenterologist & Hepatologist
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all">
                  Contact
                </a>
                <a href="#publications" className="bg-blue-600/80 px-6 py-2 rounded-full text-white hover:bg-blue-600 transition-all">
                  Publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Biography Card with Gradient Border */}
        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-orange-200">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Biography</h2>
            <p className="text-gray-700 leading-relaxed">
              Dr. Arjun Maria is a Pediatric Gastroenterologist with DM specialisation in Pediatric Hepatology. He has received extensive training in the management of pediatric liver, pancreas, gastrointestinal disorders and also has expertise in managing liver transplant patients. With 14 years of experience in the medical field, all his medical training has been completed from prestigious institutions in Delhi.
            </p>
          </div>
        </div>

        {/* Contact & Languages Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-orange-200" />
                  <p>Mon - Sat 9:00 am - 10:00 am</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-200" />
                  <p>Room: F-86</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-orange-200" />
                  <p>arjunmaria@hotmail.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-orange-200" />
                  <p>+011-42254000</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-orange-200" />
                  <a href="https://www.linkedin.com/in/arjun-maria-67a271135/" className="hover:text-orange-200 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Languages</h3>
            <div className="flex items-center space-x-3">
              <Languages className="text-blue-900" />
              <p className="text-gray-700">Hindi, English</p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/95 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <Hospital className="mr-2" />
              Conditions Treated
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Neonatal Cholestasis Syndrome",
                "Hepatitis-Jaundice in older children",
                "Metabolic liver disease",
                "Acute liver failure",
                "Chronic liver disease",
                "Hematemesis- Blood in vomiting",
                "Pain abdomen",
                "Constipation",
                "Diarrhoea- loose stools",
                "Blood in stools",
                "Pancreatitis",
                "Liver transplant"
              ].map((condition, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-900" />
                  <span className="text-gray-700">{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/95 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <Microscope className="mr-2" />
              Procedures Performed
            </h3>
            <ul className="space-y-3">
              {[
                "Endoscopy and Variceal Endotherapy",
                "Gastrointestinal Foreign Body removal",
                "Colonoscopy",
                "Anorectal Manometry",
                "Transjugular Liver Biopsy",
                "Percutaneous Liver Biopsy",
                "HVPG (Hepatic Venous Pressure Gradient)",
                "Transient Elastography (Fibroscan)"
              ].map((procedure, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700">{procedure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
            <Book className="mr-2" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/80 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-lg font-semibold text-blue-900">{edu.year}</p>
                <p className="text-gray-800 font-medium">{edu.degree}</p>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Award className="mr-2" />
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-lg font-semibold text-orange-200">{award.year}</p>
                <p className="text-white/90">{award.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div id="publications" className="bg-white/95 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
            <FileText className="mr-2" />
            Recent Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="border-l-4 border-blue-900 pl-4 hover:bg-blue-50 transition-colors rounded-r-lg p-4">
                <a href={pub.link} className="text-blue-900 hover:text-blue-600 transition-colors">
                  {pub.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;