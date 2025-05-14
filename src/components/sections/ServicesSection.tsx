import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { 
  Globe, 
  Code, 
  Search, 
  Layout, 
  ShoppingBag, 
  Smartphone, 
  BarChart 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Custom websites designed to convert visitors into customers with modern, responsive layouts.'
    },
    {
      icon: Code,
      title: 'WordPress, Wix, Shopify',
      description: 'Platform-specific development to create powerful websites and online stores quickly.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings to drive organic traffic to your website.'
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'User-centered design focused on creating intuitive, engaging digital experiences.'
    },
    {
      icon: ShoppingBag,
      title: 'Amazon Ads',
      description: 'Strategic Amazon advertising to increase product visibility and drive sales.'
    },
    {
      icon: Smartphone,
      title: 'Meta Ads',
      description: 'Targeted Facebook and Instagram campaigns to reach your ideal audience.'
    },
    {
      icon: BarChart,
      title: 'Google Ads',
      description: 'Performance-driven Google ad campaigns to generate quality leads and conversions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-gray-600">
            We offer comprehensive digital marketing solutions to help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;