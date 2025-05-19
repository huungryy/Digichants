import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with our team to discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        Bijnor, U.P India<br />
                        (near st marry)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                      <p className="text-gray-600">
                        +91 639 734 1136
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                      <p className="text-gray-600">
                        <a href="mailto:digichants.info@gmail.com" className="hover:text-blue-600 transition-colors">
                          digichants.info@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.0876983893386!2d78.14446602672737!3d29.390978476700388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bef338736d641%3A0xcd099774e6376b71!2sSt.%20Mary&#39;s%20School%20Bijnor!5e0!3m2!1sen!2sin!4v1705669433657!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;