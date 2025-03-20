import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gold">Everlast Epoxy</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
              <Link to="/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <Link 
                to="/quote" 
                className="bg-gold text-black px-6 py-2 rounded-md font-semibold hover:bg-gold/90 transition-colors"
              >
                Get Quote
              </Link>
              <a 
                href="tel:1234567890" 
                className="flex items-center text-gold hover:text-gold/90 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:text-gold">Home</Link>
            <Link to="/services" className="block px-3 py-2 hover:text-gold">Services</Link>
            <Link to="/gallery" className="block px-3 py-2 hover:text-gold">Gallery</Link>
            <Link to="/why-choose-us" className="block px-3 py-2 hover:text-gold">Why Choose Us</Link>
            <Link to="/contact" className="block px-3 py-2 hover:text-gold">Contact</Link>
            <Link 
              to="/quote" 
              className="block px-3 py-2 bg-gold text-black font-semibold rounded-md"
            >
              Get Quote
            </Link>
            <a 
              href="tel:1234567890" 
              className="flex items-center px-3 py-2 text-gold"
            >
              <Phone className="w-5 h-5 mr-2" />
              (123) 456-7890
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;