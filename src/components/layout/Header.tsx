import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isProceduresOpen, setIsProceduresOpen] = useState(false);

    const navigate = useNavigate();

    const services = [
        {
            category: "Pediatric Liver Care",
            items: [
                { name: "Neonatal Cholestasis", path: "/services/neonatal-cholestasis" },
                { name: "Hepatitis", path: "/services/hepatitis" },
                { name: "Metabolic Liver Disease", path: "/services/metabolic-liver" },
                { name: "Acute Liver Failure", path: "/services/acute-liver" },
                { name: "Chronic Liver Disease", path: "/services/chronic-liver" },
                { name: "Liver Transplant", path: "/services/liver-transplant" },
            ]
        },
        {
            category: "Gastrointestinal Services",
            items: [
                { name: "Hematemesis", path: "/services/hematemesis" },
                { name: "Abdominal Pain", path: "/services/abdominal-pain" },
                { name: "Constipation", path: "/services/constipation" },
                { name: "Diarrhea Management", path: "/services/diarrhea" },
            ]
        }
    ];

    const procedures = {
        items: [
            { name: "Endoscopy", path: "/procedures/endoscopy" },
            { name: "Colonoscopy", path: "/procedures/colonoscopy" },
            { name: "Liver Biopsy", path: "/procedures/liver-biopsy" },
            { name: "Fibroscan", path: "/procedures/fibroscan" },
        ]
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleServicesClick = (e: React.MouseEvent) => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            setIsServicesOpen(!isServicesOpen);
        } else {
            navigate('/services');
        }
    };

    const handleProceduresClick = (e: React.MouseEvent) => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            setIsProceduresOpen(!isProceduresOpen);
        } else {
            navigate('/procedures');
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <nav className="sticky border-b border-blue-200 w-full">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="logo.png"
                                className="h-20 w-56 object-cover"
                                alt="Dr. Arjun Maria"
                            />
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <div className="relative group">
                                <button
                                    className="flex items-center text-blue-900 font-medium hover:text-blue-600 transition-colors"
                                    onClick={handleServicesClick}
                                >
                                    Services
                                    <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="py-1" role="menu">
                                        {services.map((category) => (
                                            <div key={category.category} className="px-4 py-2">
                                                <h3 className="text-sm font-semibold text-blue-900 mb-2">{category.category}</h3>
                                                {category.items.map((service) => (
                                                    <Link
                                                        key={service.path}
                                                        to={service.path}
                                                        className="block px-4 py-1 text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-900"
                                                        role="menuitem"
                                                    >
                                                        {service.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <button
                                    className="flex items-center text-blue-900 font-medium hover:text-blue-600 transition-colors"
                                    onClick={handleProceduresClick}
                                >
                                    Procedures
                                    <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="py-1" role="menu">
                                        <div className="px-4 py-2">

                                            {procedures.items.map((procedure) => (
                                                <Link
                                                    key={procedure.path}
                                                    to={procedure.path}
                                                    className="block px-4 py-1 text-md text-blue-600 hover:bg-blue-50 hover:text-blue-900"
                                                    role="menuitem"
                                                >
                                                    {procedure.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NavLink to="/contact">Contact</NavLink>
                            <div className="flex items-center space-x-2 border-l pl-8 ml-4 border-blue-200">
                                <Phone className="text-blue-900" size={20} />
                                <span className="text-blue-900 font-medium cursor-pointer" onClick={() => window.location.href = 'tel:+01142254000'}>
                                    +011-42254000
                                </span>
                            </div>
                        </div>

                        <div className="md:hidden flex items-center space-x-4">
                            <Phone
                                className="text-blue-900 cursor-pointer"
                                size={24}
                                onClick={() => window.location.href = 'tel:+01142254000'}
                            />
                            <button
                                className="text-blue-900 focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-blue-100">
                        <nav className="flex flex-col w-full">
                            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>

                            <button
                                className="flex justify-between items-center w-full px-6 py-4 text-blue-900 font-medium hover:bg-blue-50"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                <span>Services</span>
                                <ChevronDown
                                    className={`transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                                    size={20}
                                />
                            </button>
                            {isServicesOpen && (
                                <div className="bg-blue-50 px-8 py-2">
                                    {services.map((category) => (
                                        <div key={category.category} className="mb-4">
                                            {category.items.map((service) => (
                                                <Link
                                                    key={service.path}
                                                    to={service.path}
                                                    className="block py-1 text-md text-blue-600 hover:text-blue-900"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}


                            <button
                                className="flex justify-between items-center w-full px-6 py-4 text-blue-900 font-medium hover:bg-blue-50"
                                onClick={() => setIsProceduresOpen(!isProceduresOpen)}
                            >
                                <span>Procedures</span>
                                <ChevronDown
                                    className={`transform transition-transform duration-300 ${isProceduresOpen ? 'rotate-180' : ''}`}
                                    size={20}
                                />
                            </button>
                            {isProceduresOpen && (
                                <div className="bg-blue-50 px-8 py-2">
                                    <div className="mb-4">
                                        {procedures.items.map((procedure) => (
                                            <Link
                                                key={procedure.path}
                                                to={procedure.path}
                                                className="block py-1 text-md text-blue-600 hover:text-blue-900"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {procedure.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                        </nav>
                    </div>
                )}
            </nav>
        </header>
    );
};

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    mobile?: boolean;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
    <Link
        to={to}
        className="text-blue-900 font-medium hover:text-blue-600 transition-colors"
    >
        {children}
    </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => (
    <Link
        to={to}
        className="px-6 py-4 text-blue-900 font-medium hover:bg-blue-50"
        onClick={onClick}
    >
        {children}
    </Link>
);

export default Header;