import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our epoxy flooring solutions? We're here to help.
              Reach out to our team for expert advice and free consultations.
            </p>
            <Link 
              to="/quote"
              className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center"
            >
              Get Free Quote <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-black/90 transition-colors inline-flex items-center"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:1234567890" className="flex items-center text-gray-600 hover:text-gold">
                      <Phone className="w-5 h-5 mr-3" />
                      (123) 456-7890
                    </a>
                    <a href="mailto:info@everlastepoxy.com" className="flex items-center text-gray-600 hover:text-gold">
                      <Mail className="w-5 h-5 mr-3" />
                      info@everlastepoxy.com
                    </a>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 mt-1" />
                      <span>
                        123 Main Street<br />
                        Boston, MA 02108
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3" />
                      <div>
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Area</h3>
                  <p className="text-gray-600">
                    We proudly serve residential and commercial clients throughout Massachusetts
                    and New Hampshire, including Greater Boston, Worcester, Manchester, Nashua,
                    and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
            <p className="text-gray-600">
              See our epoxy flooring solutions in person at our Boston showroom.
              Schedule a visit to explore color options and speak with our experts.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            {/* Map would be embedded here */}
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Loading...</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with a free consultation and quote for your epoxy flooring project.
          </p>
          <Link 
            to="/quote"
            className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center"
          >
            Get Free Quote <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;