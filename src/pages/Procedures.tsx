import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import proceduresData from '../components/data/procedures';
import { ArrowRight, Activity, Stethoscope} from 'lucide-react';
import AppointmentModal from '../components/utilities/AppointmentModal';

// Custom Button Component
const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick
}: {
    children: React.ReactNode,
    variant?: 'primary' | 'outline',
    className?: string,
    onClick?: () => void
}) => {
    const baseStyles = "px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center justify-center space-x-2";

    const variants = {
        primary: "bg-blue-900 text-white hover:bg-blue-800 hover:shadow-lg",
        outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50 hover:shadow-md"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

// Custom Card Component
const Card = ({
    children,
    className = '',
    imageUrl
}: {
    children: React.ReactNode,
    className?: string,
    imageUrl?: string
}) => {
    return (
        <div className={`
            relative 
            overflow-hidden 
            rounded-2xl 
            shadow-xl 
            transition-all 
            duration-300 
            hover:scale-[1.02] 
            hover:shadow-2xl 
            group
            ${className}
        `}>
            {imageUrl && (
                <div
                    className="h-64 w-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
                </div>
            )}
            <div className="relative z-10 bg-white p-6 space-y-4">
                {children}
            </div>
        </div>
    );
};

const ProceduresPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLearnMore = (slug: string) => {
        navigate(`/procedures/${slug}`);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-[110px] pb-16 mt-8">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <Stethoscope className="w-10 h-10 text-blue-900" />
                        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
                            Our Medical Procedures
                        </h1>
                        <Activity className="w-10 h-10 text-blue-900" />
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive, state-of-the-art medical procedures designed to provide accurate diagnostics and exceptional patient care.
                    </p>
                </div>

                {/* Procedures Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {proceduresData.map((procedure) => (
                        <Card
                            key={procedure.slug}
                            imageUrl={procedure.image}
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        {procedure.title}
                                    </h2>
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                        <ArrowRight className="w-6 h-6 text-blue-900" />
                                    </div>
                                </div>
                                <p className="text-gray-600 line-clamp-2">
                                    {procedure.description}
                                </p>

                                <Button
                                    onClick={() => handleLearnMore(procedure.slug)}
                                    className="w-full mt-4"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-1 rounded-2xl">
                    <div className="bg-white rounded-2xl p-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            Have Questions About Our Procedures?
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Our expert medical team is ready to provide personalized guidance and answer all your queries.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                            <Button onClick={() => navigate("/contact")}>
                                Contact Our Team
                            </Button>
                            <Button variant="outline" onClick={openModal}>
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                </div>
                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </main>
    );
};

export default ProceduresPage;