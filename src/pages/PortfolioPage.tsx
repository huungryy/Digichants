import React, { useState } from 'react';
import PortfolioCard from '../components/ui/PortfolioCard';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'StyleHub E-commerce',
      categories: ['E-commerce', 'Shopify', 'SEO'],
      image: 'https://images.pexels.com/photos/6956803/pexels-photo-6956803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 2,
      title: 'TechFlow SaaS Platform',
      categories: ['Web Design', 'UI/UX', 'Google Ads'],
      image: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 3,
      title: 'FoodDelight Restaurant',
      categories: ['WordPress', 'Web Design'],
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 4,
      title: 'Wellness Studio',
      categories: ['UI/UX', 'Web Design', 'Meta Ads'],
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 5,
      title: 'InnovateLab Startup',
      categories: ['Web Design', 'UI/UX', 'Meta Ads'],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 6,
      title: 'Global Finance Consultancy',
      categories: ['WordPress', 'SEO', 'Google Ads'],
      image: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 7,
      title: 'ArchiVision Architects',
      categories: ['Web Design', 'UI/UX'],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 8,
      title: 'EduLearn Platform',
      categories: ['E-commerce', 'WordPress', 'SEO'],
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 9,
      title: 'FitLife Gym',
      categories: ['Web Design', 'Meta Ads'],
      image: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    },
    {
      id: 10,
      title: 'Travel Explorer Agency',
      categories: ['E-commerce', 'UI/UX', 'Google Ads'],
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#'
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'Web Design', label: 'Web Design' },
    { id: 'UI/UX', label: 'UI/UX' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'WordPress', label: 'WordPress' },
    { id: 'SEO', label: 'SEO' },
    { id: 'Google Ads', label: 'Google Ads' },
    { id: 'Meta Ads', label: 'Meta Ads' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Explore our successful projects and see how we've helped businesses grow online.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <PortfolioCard
                key={project.id}
                image={project.image}
                title={project.title}
                categories={project.categories}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Project Process</h2>
            <p className="text-gray-600">
              How we approach each client project to ensure success
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business, goals, target audience, and project requirements.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center z-10 hidden md:flex">1</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      During this phase, we'll have in-depth discussions to ensure we have a clear understanding of what success looks like for your project.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      We create detailed project plans with timelines, deliverables, and milestones to ensure a smooth process from start to finish.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center z-10 hidden md:flex">2</div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                  <h3 className="text-xl font-bold mb-3">Strategy & Planning</h3>
                  <p className="text-gray-600">
                    We develop a customized strategy that aligns with your business objectives and budget.
                  </p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-xl font-bold mb-3">Design & Development</h3>
                  <p className="text-gray-600">
                    Our creative and technical teams work together to bring your project to life.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center z-10 hidden md:flex">3</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      We keep you involved throughout the process with regular updates and opportunities for feedback to ensure the final product meets your expectations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      We conduct thorough quality assurance testing to ensure everything works flawlessly before launching your project.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center z-10 hidden md:flex">4</div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                  <h3 className="text-xl font-bold mb-3">Testing & Refinement</h3>
                  <p className="text-gray-600">
                    We rigorously test and optimize your project to ensure it meets our high-quality standards.
                  </p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
                  <p className="text-gray-600">
                    We handle the launch process and provide ongoing support to ensure continued success.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center z-10 hidden md:flex">5</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">
                      Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization to help your project achieve long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;