import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Strategies That Actually Work in 2025',
      excerpt: 'Discover the most effective search engine optimization techniques that are driving results this year.',
      category: 'SEO',
      date: 'May 15, 2025',
      author: 'Ananya Sharma',
      image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Meta Advertising in 2025',
      excerpt: 'Learn how to create effective Facebook and Instagram ad campaigns that convert in today\'s changing social media landscape.',
      category: 'Social Media',
      date: 'April 28, 2025',
      author: 'Raj Patel',
      image: 'https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'E-commerce Trends: What\'s Working Now',
      excerpt: 'Explore the latest e-commerce trends and strategies that are helping online stores increase conversions and sales.',
      category: 'E-commerce',
      date: 'April 10, 2025',
      author: 'Vikrant Kumar',
      image: 'https://images.pexels.com/photos/6956815/pexels-photo-6956815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'How to Design a Website That Converts Visitors into Customers',
      excerpt: 'Learn the key design principles and elements that can dramatically improve your website\'s conversion rate.',
      category: 'Web Design',
      date: 'March 22, 2025',
      author: 'Piyush Kumar',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'The Complete Guide to Google Ads for Small Businesses',
      excerpt: 'A step-by-step guide to creating and optimizing Google Ads campaigns that deliver ROI for small businesses.',
      category: 'PPC',
      date: 'March 5, 2025',
      author: 'Raj Patel',
      image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      title: 'UI/UX Design Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with these emerging user interface and experience design trends that are shaping the digital world.',
      category: 'UI/UX',
      date: 'February 18, 2025',
      author: 'Vikrant Kumar',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  const categories = [
    'All',
    'SEO',
    'Social Media',
    'E-commerce',
    'Web Design',
    'PPC',
    'UI/UX'
  ];
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = blogPosts.filter(post => {
    // Filter by search term
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = 
      activeCategory === 'All' || 
      post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Marketing Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights, tips, and strategies to help your business succeed online.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search Bar */}
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search 
                  size={20} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Blog Posts */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No articles found matching your criteria.</p>
                </div>
              ) : (
                <div className="space-y-10">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
                            {post.category}
                          </span>
                          
                          <h2 className="text-2xl font-bold mb-3">
                            <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                              {post.title}
                            </a>
                          </h2>
                          
                          <p className="text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <div className="flex items-center mr-4">
                              <Calendar size={16} className="mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <User size={16} className="mr-1" />
                              {post.author}
                            </div>
                          </div>
                          
                          <a 
                            href="#" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 group"
                          >
                            Read More
                            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* About the Blog */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">About Our Blog</h3>
                <p className="text-gray-600 mb-4">
                  Welcome to the Digichants blog, where we share insights, tips, and strategies to help businesses succeed in the digital landscape.
                </p>
                <p className="text-gray-600">
                  Our content covers a wide range of topics including SEO, social media, web design, e-commerce, and more.
                </p>
              </div>
              
              {/* Popular Categories */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <button
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center"
                        onClick={() => setActiveCategory(category)}
                      >
                        <span className="mr-2">•</span>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Featured Post */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Featured Post"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                      Digital Marketing Trends to Watch in 2025
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore the emerging trends that will shape the digital marketing landscape this year.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 group"
                  >
                    Read Article
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                  </a>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="mb-4">
                  Stay updated with the latest marketing tips and insights.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help With Your Digital Marketing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Our team of experts is ready to help you develop a strategy that drives results.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;