import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PAGE_TITLES } from '../constants/titles';
import { FiUsers, FiSettings, FiBarChart2, FiShield } from 'react-icons/fi';

const Home = () => {
    const features = [
        { icon: <FiUsers className="w-6 h-6" />, title: "User Management", description: "Efficiently manage your users" },
        { icon: <FiSettings className="w-6 h-6" />, title: "Easy Configuration", description: "Simple and intuitive setup" },
        { icon: <FiBarChart2 className="w-6 h-6" />, title: "Analytics", description: "Detailed user insights" },
        { icon: <FiShield className="w-6 h-6" />, title: "Secure", description: "Enterprise-grade security" }
    ];

    return (
        <>
            <Helmet>
                <title>{PAGE_TITLES.HOME}</title>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <div className="container mx-auto px-4 pt-20 pb-16">
                    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 animate-fade-in">
                            User Management Dashboard
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                            A powerful, intuitive platform for managing your users efficiently and securely.
                        </p>
                        <Link
                            to="/users"
                            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Started
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-blue-600 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Section */}
                <div className="container mx-auto px-4 py-8 mt-12">
                    <div className="text-center text-gray-600">
                        <p>© 2024 User Management Dashboard. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;