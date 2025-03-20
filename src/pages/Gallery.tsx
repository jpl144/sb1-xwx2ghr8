import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "Modern Garage Transformation",
      description: "Complete garage makeover with metallic epoxy finish",
      category: "Garage",
      image: "https://images.unsplash.com/photo-1597835798608-20c9c5c9c6fe?q=80&w=2070",
      before: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070"
    },
    {
      title: "Luxury Basement Floor",
      description: "High-gloss epoxy coating with moisture barrier",
      category: "Basement",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      before: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"
    },
    {
      title: "Commercial Showroom",
      description: "Metallic epoxy floor for luxury car dealership",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070",
      before: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070"
    },
    {
      title: "Pool Deck Renovation",
      description: "Non-slip epoxy coating for pool surroundings",
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1600573472587-f65cde0ee11d?q=80&w=2070",
      before: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070"
    },
    {
      title: "Industrial Warehouse",
      description: "Heavy-duty epoxy flooring for high traffic areas",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1600585154526-d8979b47321f?q=80&w=2070",
      before: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070"
    },
    {
      title: "Residential Garage",
      description: "Custom color epoxy with flake system",
      category: "Garage",
      image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2070",
      before: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070"
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-gray-300 mb-8">
              Browse through our portfolio of stunning epoxy floor transformations.
              Each project showcases our commitment to quality and excellence.
            </p>
            <Link 
              to="/quote"
              className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-gold text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="bg-gold text-black p-3 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ZoomIn className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <span className="inline-block mt-2 text-sm font-medium text-gold">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gold"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you create a beautiful and durable epoxy floor that will last for years to come.
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

export default Gallery;