import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  const benefits = [
    "Free, no-obligation estimate",
    "Professional consultation",
    "Custom color options",
    "Detailed project timeline",
    "Transparent pricing",
    "10-year warranty"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your space with our premium epoxy flooring solutions.
              Fill out the form below to receive your personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
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
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Project Details</h3>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="garage">Garage Floor</option>
                      <option value="basement">Basement Floor</option>
                      <option value="commercial">Commercial Space</option>
                      <option value="patio">Patio/Pool Deck</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-1">
                      Approximate Square Footage
                    </label>
                    <input
                      type="number"
                      id="squareFootage"
                      name="squareFootage"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="City, State"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As Soon As Possible</option>
                      <option value="1month">Within 1 Month</option>
                      <option value="3months">Within 3 Months</option>
                      <option value="planning">Just Planning</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Tell us more about your project..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center"
                >
                  Submit Quote Request <ArrowRight className="ml-2" />
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
                <h2 className="text-3xl font-bold mb-6">What You'll Get</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Spring Special Offer!</h3>
                  <p className="text-gray-700 mb-4">
                    Get 10% off your epoxy flooring project when you book this month.
                    Don't miss out on this limited-time offer!
                  </p>
                  <p className="text-sm text-gray-500">
                    *Offer valid for projects over 500 sq ft. Cannot be combined with other promotions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteForm;