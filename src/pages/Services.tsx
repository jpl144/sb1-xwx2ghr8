import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, PenTool as Tool, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Garage Floor Epoxy",
      description: "Transform your garage into a showroom with our premium epoxy coating. Perfect for car enthusiasts and homeowners who want a durable, easy-to-clean surface.",
      image: "https://images.unsplash.com/photo-1597835798608-20c9c5c9c6fe?q=80&w=2070",
      features: ["Oil & Chemical Resistant", "Non-Slip Surface", "Custom Colors Available", "UV Stable"]
    },
    {
      title: "Basement Floor Epoxy",
      description: "Create a moisture-resistant, attractive basement floor that increases your home's livable space and value.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070",
      features: ["Moisture Barrier", "Mold Resistant", "Temperature Resistant", "Easy Maintenance"]
    },
    {
      title: "Commercial Epoxy",
      description: "Heavy-duty epoxy solutions for warehouses, showrooms, and commercial spaces that can withstand heavy traffic and equipment.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      features: ["High Impact Resistance", "Chemical Resistant", "Anti-Static Options", "Load Bearing"]
    },
    {
      title: "Metallic Epoxy",
      description: "Create stunning, one-of-a-kind floors with our metallic epoxy finishes. Perfect for luxury homes and high-end commercial spaces.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
      features: ["Unique Patterns", "Depth & Dimension", "Custom Colors", "High Gloss Finish"]
    },
    {
      title: "Patio & Pool Deck Epoxy",
      description: "Weather-resistant, non-slip surfaces perfect for outdoor living spaces and pool surrounds.",
      image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070",
      features: ["UV Resistant", "Non-Slip", "Heat Resistant", "Decorative Options"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Premium Epoxy Flooring Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform any floor into a durable, beautiful surface with our professional epoxy solutions.
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

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center gap-3">
              <Shield className="text-gold w-8 h-8" />
              <span className="font-semibold">10-Year Warranty</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="text-gold w-8 h-8" />
              <span className="font-semibold">1-Day Installation</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Tool className="text-gold w-8 h-8" />
              <span className="font-semibold">Expert Installation</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="text-gold w-8 h-8" />
              <span className="font-semibold">5-Star Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="text-gold w-5 h-5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/quote" 
                    className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-black/90 transition-colors inline-flex items-center self-start"
                  >
                    Request Quote <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your free, no-obligation quote today and see how we can transform your floor.
          </p>
          <Link 
            to="/quote"
            className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;