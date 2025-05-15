import React from 'react';
import { CheckCircle, Activity, Quote, User } from 'lucide-react';
import StatsSection from '../components/sections/StatsSection';

// Replace image imports with placeholder URLs until you have the actual images
const strategyImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const AboutPage = () => {
  const team = [
    {
      name: 'Vikrant Kumar',
      role: 'Design Head',
      image: 'https://ui-avatars.com/api/?name=Vikrant+Kumar&background=0D8ABC&color=fff',
      bio: 'Expert UI/UX designer and web developer with a passion for creating beautiful, functional websites.'
    },
    {
      name: 'Karan',
      role: 'Sr SEO Specialist',
      image: 'https://ui-avatars.com/api/?name=Karan&background=6B46C1&color=fff',
      bio: 'Data-driven SEO expert who helps clients achieve top rankings and drive organic traffic.'
    },
    {
      name: 'Jeevesh Rajput',
      role: 'PPC Manager',
      image: 'https://ui-avatars.com/api/?name=Jeevesh+Rajput&background=2F855A&color=fff',
      bio: 'Google and Meta ads specialist with a track record of successful ROI-focused campaigns.'
    }
  ];
  
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to deliver exceptional results.'
    },
    {
      title: 'Integrity',
      description: 'We build relationships on trust, transparency, and honest communication with our clients.'
    },
    {
      title: 'Results',
      description: 'We focus on delivering measurable outcomes that drive real business growth.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and goals.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Digichants
            </h1>
            <p className="text-xl text-gray-600">
              We're a team of digital marketing experts passionate about helping businesses grow online.
            </p>
          </div>
        </div>
      </section>
      
      {/* CEO Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://ui-avatars.com/api/?name=Piyush+Kumar&size=400&background=4F46E5&color=fff"
                alt="Piyush Kumar - CEO & Founder" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
            
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Piyush Kumar</h2>
                <p className="text-xl text-blue-600 mb-6">CEO & Founder</p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
                <p className="text-gray-600 mb-6">
                  With over 7 years of experience in digital marketing, Piyush has helped numerous businesses achieve remarkable growth through innovative digital strategies and data-driven approaches.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <Quote className="absolute -top-3 -left-3 text-blue-600 bg-white rounded-full p-1" size={32} />
                  <p className="text-gray-700 italic">
                    "Our mission is to empower businesses with cutting-edge digital solutions that drive real results. We're not just service providers; we're growth partners committed to our clients' success."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">7+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                  <div className="text-gray-600">Projects Led</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative z-10 rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 p-8 flex items-center justify-center min-h-[400px]">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <User key={i} size={48} className="text-white/80" />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2022, Digichants began with a simple mission: to help businesses navigate the complex world of digital marketing and achieve measurable growth.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small startup has quickly grown into a full-service digital marketing agency, successfully completing over 10 projects for clients across various industries.
              </p>
              <p className="text-gray-600">
                Our team combines technical expertise with creative thinking to deliver customized solutions that address our clients' unique needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do at Digichants.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md flex">
                <div className="mr-4 text-blue-600">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <StatsSection />
      
      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              The talented people behind our successful projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Digichants?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expertise</h3>
                    <p className="text-gray-600">Our team brings specialized knowledge across all digital marketing channels.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Results-Driven</h3>
                    <p className="text-gray-600">We focus on delivering measurable outcomes that impact your bottom line.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Customized Approach</h3>
                    <p className="text-gray-600">We develop tailored strategies based on your specific business goals and target audience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Transparent Communication</h3>
                    <p className="text-gray-600">We provide regular updates and detailed reports on campaign performance.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform -rotate-3"></div>
              <img 
                src={strategyImage}
                alt="Digital Marketing Strategy" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your business grow through effective digital marketing.
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

export default AboutPage;