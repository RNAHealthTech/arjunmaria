import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import services from '../components/data/services';
import AppointmentModal from '../components/utilities/AppointmentModal';

// Icons (using lucide-react)
import { AlertCircle, Activity, Heart, Stethoscope } from 'lucide-react';

interface InfoSectionProps {
    title: string;
    items: string[];
    icon: React.ReactNode;
    bgColor: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, items, icon, bgColor }) => (
    <Card className={`${bgColor} h-full`}>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle className="text-xl text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-900" />
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

const ServiceTemplatePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Find the service data based on the slug
    const service = services
        .flatMap(category => category.items)
        .find(item => item.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="w-full max-w-lg">
                    <CardContent className="text-center py-12">
                        <AlertCircle className="w-12 h-12 text-orange-200 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Service Not Found</h2>
                        <p className="text-gray-700 mb-6">The requested service could not be found.</p>
                        <Button variant="default" onClick={() => window.history.back()}>
                            Go Back
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-28">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.name}</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">{service.description}</p>
                </div>

                {/* Hero Image */}
                <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-[400px] object-cover"
                    />
                </div>

                {/* Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <InfoSection
                        title="Symptoms"
                        items={service.symptoms}
                        icon={<Activity className="w-6 h-6 text-blue-900" />}
                        bgColor="bg-blue-50"
                    />

                    <InfoSection
                        title="Causes"
                        items={service.causes}
                        icon={<AlertCircle className="w-6 h-6 text-orange-200" />}
                        bgColor="bg-orange-100"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoSection
                        title="Treatments"
                        items={service.treatments}
                        icon={<Heart className="w-6 h-6 text-blue-900" />}
                        bgColor="bg-blue-100"
                    />

                    <InfoSection
                        title="When to See Dr. Arjun Maria"
                        items={service.whenToSee}
                        icon={<Stethoscope className="w-6 h-6 text-blue-900" />}
                        bgColor="bg-green-50"
                    />
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <Card className="bg-blue-900 text-white">
                        <CardContent className="py-8">
                            <h3 className="text-2xl font-semibold mb-4">Need Professional Help?</h3>
                            <p className="mb-6 text-blue-100">
                                Don't hesitate to reach out if you notice any of these symptoms.
                                Early intervention is key to better outcomes.
                            </p>
                            <div className="space-x-4 space-y-4">
                                <Button variant="outline" onClick={openModal} className="bg-white hover:bg-blue-50">
                                    Book Appointment
                                </Button>
                                <Button variant="outline" onClick={() => navigate('/contact')} className="border-white bg-transparent  text-white hover:bg-blue-800">
                                    Contact Us
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

            </div>
        </main>
    );
};

export default ServiceTemplatePage;