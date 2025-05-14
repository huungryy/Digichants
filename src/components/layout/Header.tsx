import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          >
            <Activity size={32} className="text-purple-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digichants
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-all duration-200 hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-all duration-200 hover:text-blue-600 ${
                isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`transition-all duration-200 hover:text-blue-600 ${
                isActive('/services') ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`transition-all duration-200 hover:text-blue-600 ${
                isActive('/portfolio') ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`transition-all duration-200 hover:text-blue-600 ${
                isActive('/blog') ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className={`py-2 ${
                  isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`py-2 ${
                  isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`py-2 ${
                  isActive('/services') ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`py-2 ${
                  isActive('/portfolio') ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className={`py-2 ${
                  isActive('/blog') ? 'text-blue-600 font-medium' : 'text-gray-700'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="py-2 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;