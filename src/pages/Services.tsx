import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import services from '../components/data/services';
import AppointmentModal from '../components/utilities/AppointmentModal';

// Custom Button Component
const Button = ({ 
    children, 
    variant = 'default', 
    className = '', 
    onClick 
}: {
    children: React.ReactNode;
    variant?: 'default' | 'outline';
    className?: string;
    onClick?: () => void;
}) => {
    const baseStyles = "px-4 py-2 rounded-lg transition duration-300 ease-in-out font-semibold text-sm";
    
    const variantStyles = {
        default: "bg-blue-900 text-white hover:bg-blue-800",
        outline: "border border-blue-900 text-blue-900 hover:bg-blue-100"
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
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
    title,
    image 
}: {
    children: React.ReactNode;
    className?: string;
    title?: string;
    image?: string;
}) => {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            {image && (
                <div className="h-48 w-full">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            {title && (
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
};

const ServicesPage: React.FC = () => {
    const navigate = useNavigate();
    
    // Flatten services and create a single list of all service items
    const allServices = services.flatMap(category => category.items);
    
    // State to manage selected service
    const [selectedService, setSelectedService] = useState(allServices[0]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
                    Our Medical Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Side Navigation */}
                    <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-[600px]">
                        {services.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b pb-2">
                                    {category.category}
                                </h3>
                                {category.items.map((service) => (
                                    <div
                                        key={service.slug}
                                        className={`cursor-pointer p-3 rounded-md mb-2 transition-colors 
                                            ${selectedService.slug === service.slug 
                                                ? 'bg-blue-100' 
                                                : 'hover:bg-blue-50'}`}
                                        onClick={() => setSelectedService(service)}
                                    >
                                        <h4 className="font-semibold text-blue-900">{service.name}</h4>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Right Side Service Details */}
                    <div className="md:col-span-2">
                        <Card 
                            image={selectedService.image}
                            title={selectedService.name}
                            className="mb-8"
                        >
                            <p className="text-gray-700 mb-6">{selectedService.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <Card title="Symptoms" className="bg-blue-50">
                                    <ul className="space-y-2">
                                        {selectedService.symptoms.map((symptom, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-900" />
                                                <span className="text-gray-700">{symptom}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>

                                <Card title="Treatments" className="bg-blue-100">
                                    <ul className="space-y-2">
                                        {selectedService.treatments.map((treatment, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-900" />
                                                <span className="text-gray-700">{treatment}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                                <Button 
                                    variant="outline" 
                                    className="w-full sm:w-auto"
                                    onClick={() => navigate(`/services/${selectedService.slug}`)}
                                >
                                    Detailed Information
                                </Button>
                                <Button 
                                    variant="default" 
                                    className="w-full sm:w-auto"
                                    onClick={openModal}
                                >
                                    Book Appointment
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;