import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Clock, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1597835798608-20c9c5c9c6fe?q=80&w=2070")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Upgrade Your Garage with the Best Epoxy Flooring in MA & NH
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your space with premium, long-lasting epoxy floors. 
                Family-owned, trusted by hundreds of satisfied customers.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/quote"
                  className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center"
                >
                  Get Free Quote <ArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/gallery"
                  className="bg-white/10 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Star className="text-gold" />
              <span>5-Star Rated Service</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="text-gold" />
              <span>10-Year Durability Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="text-gold" />
              <span>One-Day Installation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="text-gold" />
              <span>Family Owned Since 2010</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="bg-gold text-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold">
            🔥 Spring Special: 10% Off All Installations - Limited Time Offer! 
            <Link to="/quote" className="underline ml-2">Book Now</Link>
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Everlast Epoxy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070" 
                alt="Durability" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Stronger than Concrete</h3>
              <p className="text-gray-600">
                Our premium epoxy floors are scratch-resistant, waterproof, and completely stain-proof.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070" 
                alt="Luxury" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Luxury Aesthetic</h3>
              <p className="text-gray-600">
                Choose from custom colors and high-gloss finishes for a showroom-quality look.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070" 
                alt="Installation" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Fast Installation</h3>
              <p className="text-gray-600">
                Professional one-day installation with minimal disruption to your routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Homeowner",
                content: "Best investment I've made for my garage. The team was professional and the results are amazing!"
              },
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                content: "I recommend Everlast Epoxy to all my clients. Their work is consistently outstanding."
              },
              {
                name: "Mike Williams",
                role: "Car Enthusiast",
                content: "My garage floor looks better than my showroom! Couldn't be happier with the result."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8">Limited spots available for this month. Book your free consultation now!</p>
          <Link 
            to="/quote"
            className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center"
          >
            Get Your Free Quote <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;