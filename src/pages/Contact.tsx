import React from 'react';
import { Mail, Phone, Clock, Calendar, Stethoscope } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';

const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm("mqakdlln");

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Book Appointment with Child Liver & Digestive System Specialist in Delhi | Dr. Maria</title>
        <meta name="description" content="Schedule a consultation with Delhi's experienced children's liver and digestive system specialist. Expert care for liver problems, stomach issues, and digestive concerns in children. Easy online booking available." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Book Appointment - Children's Liver & Digestive System Specialist" />
        <meta property="og:description" content="Get specialized treatment for your child's liver and digestive problems. Expert care for jaundice, hepatitis, stomach issues, and liver transplant support in Delhi." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Book Children's Liver Doctor Appointment | Dr. Maria - Delhi" />
        <meta property="twitter:description" content="Expert children's liver and stomach specialist in Delhi. Treatment for jaundice, hepatitis, digestive problems, and liver conditions. Book your appointment today." />

        {/* Keywords */}
        <meta name="keywords" content="children liver doctor delhi, kids digestive system specialist, pediatric liver transplant, child stomach doctor, jaundice in children treatment, kids hepatitis doctor, children liver specialist ganga ram hospital, book child liver doctor appointment" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Dr. Maria - Child Liver Specialist" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
      </Helmet>
      <main className="min-h-screen mt-[110px]">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-900/80"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Schedule Your Consultation
                </h1>
                <p className="text-xl text-blue-100">
                  Expert pediatric gastroenterology and hepatology care for your child
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-20 relative z-10">
            {/* Quick Info Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <Phone className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>

              <p className="text-gray-600">+91-8076253821</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <Mail className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">arjunmaria@hotmail.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <Clock className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9:00 am - 4:00 pm
                <span className='text-gray-400'> @ Room No. 1192, Sir Ganga Ram Hospital</span>
              </p>
              <p className='text-gray-600'>Mon, Wed, Friday: 6pm - 8pm
                <span className='text-gray-400'> @Room No. F-86, Sir Ganga Ram Hospital</span>
              </p>
              <p className='text-gray-600'>Tuesday, Thursday, Saturday : 6pm - 8pm
                <span className='text-gray-400'> @ Child Welfare Clinic</span>
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Book an Appointment</h2>

              {state.succeeded ? (
                <div className="text-center py-12">
                  <Stethoscope className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your appointment request has been received. We'll contact you shortly to confirm the details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Child's Name</label>
                      <input
                        type="text"
                        name="childName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter child's name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Child's Age</label>
                      <input
                        type="number"
                        name="childAge"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter age"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Parent's Name</label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter parent's name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter email address"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Reason for Visit</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Please describe your concerns briefly"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    {state.submitting ? "Submitting..." : "Schedule Appointment"}
                  </button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialized Care Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Neonatal Cholestasis",
                    "Hepatitis Management",
                    "Liver Transplant Care",
                    "Metabolic Liver Disease",
                    "Acute Liver Failure",
                    "Chronic Liver Disease",
                    "Gastrointestinal Disorders",
                    "Pancreatic Disorders"
                  ].map((specialty, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Dr. Maria?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-orange-600 mt-1" />
                    <span className="text-gray-700">14+ years of specialized experience in pediatric hepatology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-orange-600 mt-1" />
                    <span className="text-gray-700">Expertise in liver transplant management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-orange-600 mt-1" />
                    <span className="text-gray-700">Comprehensive care for complex liver conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;