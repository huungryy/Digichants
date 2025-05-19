import React from 'react';
import { 
  Globe, 
  Code, 
  Search, 
  Layout, 
  ShoppingBag, 
  Smartphone, 
  BarChart,
  Check,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ServicesPage = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'We create beautiful, responsive websites that are designed to convert visitors into customers. Our websites are built with SEO in mind from the ground up.',
      features: [
        'Custom responsive design',
        'User experience optimization',
        'Fast loading speed',
        'Mobile-first approach',
        'SEO-friendly structure',
        'Content management systems'
      ],
      image: 'https://i.pinimg.com/736x/2b/c1/c9/2bc1c9c6efc3c194e67f30bfb0aa5e22.jpg'
    },
    {
      icon: Code,
      title: 'WordPress, Wix, Shopify Solutions',
      description: 'Whether you need a blog, business website, or e-commerce store, we can build it on your preferred platform with customizations that match your brand.',
      features: [
        'Custom theme development',
        'Plugin integration',
        'E-commerce functionality',
        'Performance optimization',
        'Regular maintenance',
        'Security enhancements'
      ],
      image: 'https://i.pinimg.com/736x/a5/5c/89/a55c89ec0ff1575233981ae4a25ebb84.jpg'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive more organic traffic to your website with our comprehensive SEO strategies.',
      features: [
        'Keyword research and targeting',
        'On-page optimization',
        'Technical SEO',
        'Content strategy',
        'Link building',
        'Performance tracking'
      ],
      image: 'https://i.pinimg.com/736x/43/7f/c4/437fc4af1d5848298885a98c4387e028.jpg'
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Create intuitive, engaging user experiences that delight your customers and help achieve your business goals.',
      features: [
        'User research',
        'Wireframing and prototyping',
        'Visual design',
        'Interaction design',
        'Usability testing',
        'Design systems'
      ],
      image: 'https://i.pinimg.com/736x/ee/33/69/ee3369f79097a1e4c1c95742b2483a15.jpg'
    },
    {
      icon: ShoppingBag,
      title: 'Amazon Ads',
      description: 'Increase your product visibility and sales on Amazon with strategic advertising campaigns optimized for performance.',
      features: [
        'Sponsored Products campaigns',
        'Sponsored Brands campaigns',
        'Product targeting',
        'Budget management',
        'Bid optimization',
        'Performance analytics'
      ],
      image: 'https://i.pinimg.com/736x/c1/f0/78/c1f078156fceedde798d2e63be098602.jpg'
    },
    {
      icon: Smartphone,
      title: 'Meta Ads',
      description: 'Reach your ideal customers on Facebook and Instagram with targeted ad campaigns that drive awareness, engagement, and conversions.',
      features: [
        'Audience targeting',
        'Creative ad development',
        'Campaign management',
        'A/B testing',
        'Performance reporting',
        'Retargeting strategies'
      ],
      image: 'https://i.pinimg.com/736x/94/c6/6f/94c66fbc630e2f275d048309bd7f61b3.jpg'
    },
    {
      icon: BarChart,
      title: 'Google Ads',
      description: 'Generate quality leads and drive conversions with performance-focused Google advertising campaigns.',
      features: [
        'Search campaigns',
        'Display advertising',
        'Video advertising',
        'Shopping campaigns',
        'Remarketing',
        'Conversion tracking'
      ],
      image: 'https://i.pinimg.com/736x/84/0b/20/840b2059779e77c76c5df05468a6e8af.jpg '
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive digital marketing solutions to help your business grow online.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-block bg-blue-100 text-blue-600 p-3 rounded-lg mb-6">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">What's included:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="group">
                      Get Started
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                    </Button>
                  </Link>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform ${
                    index % 2 === 0 ? 'rotate-3' : '-rotate-3'
                  }`}></div>
                  <img 
                    src={service.image}
                    alt={service.title} 
                    className="relative z-10 rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600">
              We follow a proven methodology to ensure successful outcomes for every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, target audience, and competitors to create a solid foundation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a customized plan based on your specific needs and business objectives.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Execution</h3>
              <p className="text-gray-600">
                We implement the strategy with attention to detail and regular communication.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor, analyze, and refine to improve performance and results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">How long does it take to see results from digital marketing?</h3>
                <p className="text-gray-600">
                  The timeline varies depending on the channel and your goals. SEO typically takes 3-6 months to show significant results, while paid advertising can generate leads immediately. We'll provide a realistic timeline based on your specific situation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">How much should I budget for digital marketing?</h3>
                <p className="text-gray-600">
                  Your budget depends on your goals, competition, and market. We work with businesses of all sizes and can develop a strategy that fits your budget while delivering ROI. We'll recommend the most effective allocation of your marketing dollars.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Do you offer ongoing support after a website launch?</h3>
                <p className="text-gray-600">
                  Yes, we provide ongoing maintenance, updates, and support for all websites we build. We offer various maintenance packages to ensure your site remains secure, up-to-date, and performing optimally.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">How do you measure the success of your marketing campaigns?</h3>
                <p className="text-gray-600">
                  We track key performance indicators (KPIs) aligned with your business goals, such as website traffic, conversion rates, lead generation, and ROI. We provide regular reports with meaningful insights and recommendations for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our digital marketing services can help you achieve your business goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;