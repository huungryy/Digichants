import React from 'react';
import PortfolioCard from '../components/ui/PortfolioCard';
import FooappImage from '../images/Fooapp.png';
import CreativeDesignImage from '../images/Untitled design (2).png';
import BetterChoiceImage from '../images/betterchoi.jpg';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Foo App',
      categories: ['Mobile App Development'],
      image: FooappImage,
      link: '#'
    },
    {
      id: 2,
      title: 'Creative Design',
      categories: ['UI/UX Design'],
      image: CreativeDesignImage,
      link: '#'
    },
    {
      id: 3,
      title: 'Better Choice',
      categories: ['Web Development'],
      image: BetterChoiceImage,
      link: '#'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600">
              Explore our successful projects and see how we've helped businesses grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <PortfolioCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;