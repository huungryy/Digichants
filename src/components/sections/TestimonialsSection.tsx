import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<number | null>(null);
  
  const testimonials = [
    {
      content: "Digichants transformed our online presence completely. Their SEO work increased our organic traffic by 200% in just three months. Highly recommend their services!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechSolutions Inc",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "Working with Digichants was a game-changer for our e-commerce business. Their Shopify development and Meta ad campaigns doubled our conversion rate.",
      author: "Michael Chen",
      role: "E-commerce Manager",
      company: "StyleBoutique",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "The team at Digichants delivered a website that perfectly captures our brand identity. Their attention to detail and creative approach made all the difference.",
      author: "Emma Rodriguez",
      role: "CEO",
      company: "Artisan Crafts",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-rotate slides
  useEffect(() => {
    slideIntervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  // Pause auto-rotation when user interacts
  const pauseAutoRotation = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  };

  // Resume auto-rotation after user interaction
  const resumeAutoRotation = () => {
    if (!slideIntervalRef.current) {
      slideIntervalRef.current = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it. Hear what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 z-10"
            onClick={() => {
              pauseAutoRotation();
              prevSlide();
              setTimeout(resumeAutoRotation, 10000);
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white p-3 rounded-full shadow-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 z-10"
            onClick={() => {
              pauseAutoRotation();
              nextSlide();
              setTimeout(resumeAutoRotation, 10000);
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  pauseAutoRotation();
                  setCurrentSlide(index);
                  setTimeout(resumeAutoRotation, 10000);
                }}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;