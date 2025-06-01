import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div>
      <HeroSection 
        title="Digital Marketing That Delivers Results"
        subtitle="We help businesses grow through strategic digital marketing solutions that convert visitors into customers."
        buttonText="Get Started"
        buttonLink="/contact"
      />
      
      <ServicesSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Digital Success Stories Since{' '}
                <span className="text-blue-600">2025</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Digichants is a fast-growing digital marketing agency that has successfully delivered 10+ projects for businesses seeking growth in the digital world.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experts combines creativity with data-driven strategies to deliver exceptional results for our clients across various industries.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform -rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Digital Marketing Team" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <StatsSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              Take a look at some of our successful projects that have helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/src/images/Fooapp.png" 
                alt="Foo App Project" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Food App</h3>
                  <p className="text-white/80">Mobile App Development</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/src/images/Untitled design (2).png" 
                alt="Design Project" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">kaypiensemi</h3>
                  <p className="text-white/80">Web Development</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/src/images/betterchoi.jpg" 
                alt="Better Choice Project" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Better Choice</h3>
                  <p className="text-white/80">Web Development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Let's work together to create a digital strategy that drives results for your business.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;