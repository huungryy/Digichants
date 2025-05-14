import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  image: string;
  title: string;
  categories: string[];
  link?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  categories,
  link,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-white/20 text-white rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-flex items-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 hover:text-blue-300"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;