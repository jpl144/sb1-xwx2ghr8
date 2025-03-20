import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Everlast Epoxy</h3>
            <p className="text-gray-400 mb-4">
              Premium epoxy flooring solutions for homes and businesses in Massachusetts and New Hampshire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold/80"><Facebook /></a>
              <a href="#" className="text-gold hover:text-gold/80"><Instagram /></a>
              <a href="#" className="text-gold hover:text-gold/80"><Linkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-gold">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-gold">Gallery</Link></li>
              <li><Link to="/why-choose-us" className="text-gray-400 hover:text-gold">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold">Contact</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-gold">Get Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Garage Floor Epoxy</li>
              <li className="text-gray-400">Basement Floor Epoxy</li>
              <li className="text-gray-400">Commercial Epoxy</li>
              <li className="text-gray-400">Metallic Epoxy</li>
              <li className="text-gray-400">Patio & Pool Deck Epoxy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:1234567890" className="flex items-center text-gray-400 hover:text-gold">
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
              <a href="mailto:info@everlastepoxy.com" className="flex items-center text-gray-400 hover:text-gold">
                <Mail className="w-5 h-5 mr-2" />
                info@everlastepoxy.com
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>123 Main Street<br />Boston, MA 02108</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Everlast Epoxy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;