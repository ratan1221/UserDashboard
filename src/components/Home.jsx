import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PAGE_TITLES } from '../constants/titles';
import { FiUsers, FiSettings, FiBarChart2, FiShield } from 'react-icons/fi';

const Home = () => {
    const features = [
        { icon: <FiUsers className="w-8 h-8" />, title: "User Management", description: "Efficiently manage your users" },
        { icon: <FiSettings className="w-8 h-8" />, title: "Easy Configuration", description: "Simple and intuitive setup" },
        { icon: <FiBarChart2 className="w-8 h-8" />, title: "Analytics", description: "Detailed user insights" },
        { icon: <FiShield className="w-8 h-8" />, title: "Secure", description: "Enterprise-grade security" }
    ];

    return (
        <>
            <Helmet>
                <title>{PAGE_TITLES.HOME}</title>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                {/* Content */}
                <div className="relative">
                    {/* Hero Section */}
                    <div className="container mx-auto px-4 pt-20 pb-16">
                        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                                User Management Dashboard
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                                A powerful, intuitive platform for managing your users efficiently and securely.
                            </p>
                            <Link
                                to="/users"
                                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in"
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
                                    className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
                                >
                                    <div className="text-indigo-600 mb-6 transform transition-transform hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;