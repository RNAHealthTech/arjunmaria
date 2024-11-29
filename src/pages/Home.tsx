import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Award, Clock, MapPin,Mail, BookOpen, Stethoscope, ChevronRight,GraduationCap, Heart} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AppointmentModal from '../components/utilities/AppointmentModal';
import OnlineAppointmentModal from '../components/utilities/OnlineAppointmentModal';

const HomePage: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);



    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <main className="overflow-hidden">
            <svg className="fixed -z-50" width="0" height="0">
                <defs>
                    <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
                    </pattern>
                </defs>
            </svg>

            <section className="relative h-screen text-center mt-28">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/home-landing.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-red-900/70"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center lg:items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-3">
                        <span className="hidden md:block text-orange-200 text-lg md:text-xl uppercase tracking-wider">Leading Pediatric Gastroenterology Care</span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 max-w-3xl leading-tight">
                            Your Child's Health Journey
                            <span className="block">Begins With Expert Care</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-6 mt-4">
                        <div className="flex flex-col md:flex-row gap-2 md:items-center">
                            <h2 className="text-xl md:text-2xl text-white font-medium">Dr. Arjun Maria</h2>
                            <span className="text-orange-200 md:border-l md:border-orange-200 md:pl-2">
                                Associate Consultant - Pediatric Gastroenterology
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-8">
                        <Button onClick={openModal} size="xl" variant="default" className="bg-white hover:bg-white/20 text-blue-900 backdrop-blur-sm">
                            Book Priority Consultation
                        </Button>
                        <Button size="xl" onClick={openModal2} variant="default" className="bg-blue-600/80 hover:bg-blue-600 text-white">
                            Virtual Consultation
                        </Button>
                    </div>
                </div>
            </section>

            {/* Doctor Profile Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 blur-3xl opacity-30 -z-10"></div>
                                <img
                                    src="/images/doctor.JPG"
                                    alt="Dr. Arjun Maria"
                                    className="relative z-10 w-96 h-96 object-cover rounded-2xl shadow-2xl"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-6"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                                    Excellence in Pediatric Care
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                Dr. Arjun Maria brings exceptional expertise in pediatric gastroenterology, combining advanced clinical care with groundbreaking research. As an Associate Consultant at Sir Ganga Ram Hospital, he specializes in liver transplant management and complex gastrointestinal disorders.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <Award className="h-5 w-5 text-blue-500" />
                                    <span className="text-gray-700">Multiple International Awards</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="h-5 w-5 text-blue-500" />
                                    <span className="text-gray-700">14+ Years Experience</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="outline" onClick={() => navigate("/about")} className="group">
                                    View Full Profile
                                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button onClick={() => navigate("/about#publications")} variant="ghost">Read Publications</Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-gradient-to-br from-green-50 to-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Specialized Services
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Liver Care & Transplant",
                                description: "Expert management of pediatric liver conditions and comprehensive transplant care services",
                                icon: <Stethoscope className="w-8 h-8" />,
                                color: "from-green-400 to-green-500",
                                link: '/services'
                            },
                            {
                                title: "Advanced Procedures",
                                description: "State-of-the-art diagnostic and therapeutic procedures with cutting-edge technology",
                                icon: <Heart className="w-8 h-8" />,
                                color: "from-green-500 to-green-600",
                                link: '/procedures'
                            },
                            {
                                title: "Digestive Health",
                                description: "Specialized care for complex gastrointestinal conditions and digestive disorders",
                                icon: <BookOpen className="w-8 h-8" />,
                                color: "from-green-400 to-green-500",
                                link: '/services'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    <CardContent className="relative p-8 space-y-4">
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                        <Button onClick={()=>navigate(service.link)} variant="ghost" className="group">
                                            Learn More
                                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Centered Button */}
                    <div className="flex justify-center mt-8">
                        <Button
                            size="xl"
                            variant="default"
                            className="bg-green-600/80 text-center hover:bg-green-600 text-white"
                            onClick={()=>navigate("/services")}
                        >
                            Learn about Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Information with Blue Gradient */}
            <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Clock />,
                                title: "Consultation Hours",
                                details: ["Monday - Saturday", "9:00 AM - 10:00 AM"]
                            },
                            {
                                icon: <MapPin />,
                                title: "Location",
                                details: ["Room: F-86", "Sir Ganga Ram Hospital", "New Delhi"]
                            },
                            {
                                icon: <Mail />,
                                title: "Contact",
                                details: ["+011-42254000", "arjunmaria@hotmail.com"]
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="inline-flex p-3 rounded-xl bg-white/10 text-blue-200">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        {item.details.map((detail, i) => (
                                            <p key={i} className="text-blue-200">{detail}</p>
                                        ))}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative">
                {/* Background image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/1.jpg')`,
                    }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/90 to-white/90" />

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-900">
                            Begin Your Child's Healthcare Journey
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Connect with Dr. Arjun Maria for specialized pediatric care. We offer comprehensive treatment with a focus on your child's comfort and well-being.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button onClick={openModal} size="lg" className="text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                                Schedule Consultation
                            </Button>
                            <Button size="lg" onClick={() => navigate("/contact")} variant="outline">
                                 Contact Us 
                            </Button>
                        </div>
                    </motion.div>
                    <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
                    <OnlineAppointmentModal isOpen2={isModalOpen2} onClose2={closeModal2} />
                </div>
            </section>

            {/* Map Section */}
            <motion.section
                className="py-16 bg-white"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="w-full lg:w-4/5 mx-auto rounded-2xl overflow-hidden shadow-xl"
                        variants={itemVariants}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.709809128418!2d77.18698097632311!3d28.63845817566164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02a17db06405%3A0x6f1a6c9d6ede10d0!2sSir%20Ganga%20Ram%20Hospital!5e0!3m2!1sen!2sin!4v1732308053348!5m2!1sen!2sin"
                            title='Sir Ganga Ram Hospital'
                            className="w-full h-[450px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </motion.section>
        </main>
    );
};

export default HomePage;
