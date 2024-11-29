import React, { useEffect, useState } from 'react';
import { Clock, AlarmCheck, ListChecks, Activity, ShieldAlert, HeartPulse, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import proceduresData, { ProcedureData } from '../components/data/procedures';
import { useParams, useNavigate } from 'react-router-dom';
import AppointmentModal from '../components/utilities/AppointmentModal';


const ProcedureTemplatePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [procedure, setProcedure] = useState<ProcedureData | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProcedure = proceduresData.find(t => t.slug === slug);
        if (foundProcedure) {
            setProcedure(foundProcedure);
        } else {
            navigate('/procedures', { replace: true });
        }
    }, [slug, navigate]);

    if (!procedure) {
        return <div>Loading...</div>;
    }

    return (
        <main className="min-h-screen mt-[110px]">
            {/* Hero Section with Image */}
            <div className="relative w-full h-[400px] overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${procedure.image})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-red-900/70"></div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{procedure.title}</h1>
                        <p className="text-xl text-blue-200">{procedure.description}</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 space-y-8">
                {/* Duration Card */}
                <Card className="bg-gradient-to-r from-blue-600 via-blue-400 to-orange-200 p-1">
                    <CardContent className="bg-white rounded-lg p-6">
                        <div className="flex items-center space-x-3 text-blue-900">
                            <Clock className="w-6 h-6" />
                            <h2 className="text-2xl font-semibold">Duration</h2>
                        </div>
                        <p className="mt-3 text-gray-700">{procedure.duration}</p>
                    </CardContent>
                </Card>

                {/* Preparation Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <AlarmCheck className="w-6 h-6 text-orange-200" />
                                <h2 className="text-2xl font-semibold">Preparation</h2>
                            </div>
                            <ul className="space-y-3">
                                {procedure.preparation.map((step, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-orange-200 flex-shrink-0" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Process Section */}
                    <Card className="bg-gradient-to-br from-orange-200 to-orange-100">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-4 text-blue-900">
                                <ListChecks className="w-6 h-6" />
                                <h2 className="text-2xl font-semibold">Process</h2>
                            </div>
                            <ul className="space-y-3">
                                {procedure.process.map((step, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-gray-700">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-900 flex-shrink-0" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Aftercare and Risks Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white/95 shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-4 text-blue-900">
                                <HeartPulse className="w-6 h-6" />
                                <h2 className="text-2xl font-semibold">Aftercare</h2>
                            </div>
                            <ul className="space-y-3">
                                {procedure.aftercare.map((care, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-gray-700">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-900 flex-shrink-0" />
                                        <span>{care}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/95 shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-4 text-blue-900">
                                <ShieldAlert className="w-6 h-6" />
                                <h2 className="text-2xl font-semibold">Potential Risks</h2>
                            </div>
                            <ul className="space-y-3">
                                {procedure.risks.map((risk, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-gray-700">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                                        <span>{risk}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Recovery Section */}
                <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <Activity className="w-6 h-6 text-orange-200" />
                            <h2 className="text-2xl font-semibold">Recovery</h2>
                        </div>
                        <p className="text-white/90">{procedure.recovery}</p>
                    </CardContent>
                </Card>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-orange-200 p-1 rounded-2xl">
                    <div className="bg-white rounded-2xl p-8 text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Schedule Your Procedure?</h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Our team is here to help you through every step of the process. Schedule a consultation with Dr. Arjun Maria to discuss your specific needs and concerns.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
                            <Button onClick={openModal} className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 md:py-6 rounded-full flex items-center justify-center space-x-2">
                                <Calendar className="w-5 h-5" />
                                <span>Book Appointment</span>
                            </Button>
                            <Button variant="outline" onClick={()=>navigate('/contact')} className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4 md:py-2 rounded-full">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </main>
    );
};

export default ProcedureTemplatePage;