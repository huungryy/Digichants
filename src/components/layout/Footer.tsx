import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity size={24} className="text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Digichants
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              A fast-growing digital marketing agency providing cutting-edge online services for businesses seeking growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/digichants" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/digichants" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com/digichants" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/digichants" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Bijnor, U.P India<br />
                  (near st marry)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-purple-500 flex-shrink-0" />
                <a href="tel:+916397341136" className="text-gray-400 hover:text-white transition duration-300">
                  +91 639 734 1136
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-purple-500 flex-shrink-0" />
                <a href="mailto:digichants.info@gmail.com" className="text-gray-400 hover:text-white transition duration-300">
                  digichants.info@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Digichants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;