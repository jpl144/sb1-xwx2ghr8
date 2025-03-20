import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Clock, PenTool as Tool, CheckCircle, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Premium Quality Materials",
      description: "We use only the highest grade epoxy resins and materials, ensuring your floor will last for decades.",
      icon: Shield,
      features: [
        "Industrial-grade epoxy",
        "UV-resistant formulas",
        "Chemical-resistant coating",
        "Anti-slip additives available"
      ]
    },
    {
      title: "Expert Installation",
      description: "Our certified technicians have years of experience and undergo continuous training.",
      icon: Tool,
      features: [
        "Certified installers",
        "Proven techniques",
        "Attention to detail",
        "Quality control checks"
      ]
    },
    {
      title: "10-Year Warranty",
      description: "We stand behind our work with one of the best warranties in the industry.",
      icon: Shield,
      features: [
        "Comprehensive coverage",
        "No hidden terms",
        "Transferable warranty",
        "Quick response to claims"
      ]
    },
    {
      title: "Family Owned Since 2010",
      description: "A local business you can trust, serving Massachusetts and New Hampshire communities.",
      icon: Award,
      features: [
        "Local expertise",
        "Community focused",
        "Personal service",
        "Long-term relationships"
      ]
    }
  ];

  const differentiators = [
    {
      title: "Superior Durability",
      image: "https://images.unsplash.com/photo-1671394155199-22d3b7c8d3d8",
      points: [
        "4x stronger than standard epoxy",
        "Impact and scratch resistant",
        "Chemical and stain proof",
        "Tested in extreme conditions"
      ]
    },
    {
      title: "Professional Process",
      image: "https://images.unsplash.com/photo-1671394155198-cde3c5db6a3f",
      points: [
        "Detailed site evaluation",
        "Custom color consultation",
        "Professional preparation",
        "Quality control inspection"
      ]
    },
    {
      title: "Customer Experience",
      image: "https://images.unsplash.com/photo-1671394155197-7b6942e4bb5e",
      points: [
        "Clear communication",
        "On-time completion",
        "Clean work environment",
        "Post-installation support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Why Choose Everlast Epoxy?</h1>
            <p className="text-xl text-gray-300 mb-8">
              With over a decade of experience, premium materials, and expert installation,
              we're the trusted choice for epoxy flooring in Massachusetts and New Hampshire.
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
              <Star className="text-gold w-8 h-8" />
              <span className="font-semibold">5-Star Rated Service</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="text-gold w-8 h-8" />
              <span className="font-semibold">10-Year Warranty</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="text-gold w-8 h-8" />
              <span className="font-semibold">One-Day Installation</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="text-gold w-8 h-8" />
              <span className="font-semibold">Family Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Everlast Advantage</h2>
            <p className="text-xl text-gray-600">
              Experience the difference of working with the region's premier epoxy flooring specialist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <benefit.icon className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-300">
              Discover why homeowners and contractors choose Everlast Epoxy for their projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src={diff.image} 
                    alt={diff.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{diff.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {diff.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your space with the most trusted epoxy flooring company in New England.
          </p>
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

export default WhyChooseUs;