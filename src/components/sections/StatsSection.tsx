import React from 'react';
import Counter from '../ui/Counter';

const StatsSection = () => {
  const stats = [
    { value: 10, suffix: '+', label: 'Completed Projects' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 250, suffix: 'K+', label: 'Ad Impressions' },
    { value: 5, suffix: 'x', label: 'Average ROI' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-4 transform hover:scale-105 transition-transform duration-300"
            >
              <Counter 
                end={stat.value} 
                suffix={stat.suffix} 
              />
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;