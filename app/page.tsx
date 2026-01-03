'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { services } from '@/data/services';
import { testimonials, clientLogos } from '@/data/testimonials';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Target } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Maximize Your ROI with Digital Marketing Expertise
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Drive growth with data-driven strategies in SEO, Google Ads, Social Media, and Content Marketing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Get Started Today
                </Button>
                <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0066CC]">
                  View Our Services
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>500+ Clients Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600 mb-8 font-medium">Trusted by Leading Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((client) => (
                <div key={client.name} className="text-5xl grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals & Statistics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-full mb-4">
                  <TrendingUp className="text-[#0066CC]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>250%</h3>
                <p className="text-gray-600">Average Traffic Growth</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <Users className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-full mb-4">
                  <Award className="text-[#0066CC]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>15+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <Target className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                  <Link href="/services" className="text-[#0066CC] font-medium inline-flex items-center hover:gap-2 transition-all">
                    Learn More <ArrowRight size={20} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button href="/services" variant="secondary" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don&apos;t just take our word for it
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{testimonials[currentTestimonial].image}</div>
                    <div>
                      <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-600">{testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#0066CC] hover:text-white transition-colors flex items-center justify-center"
                      aria-label="Previous testimonial"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#0066CC] hover:text-white transition-colors flex items-center justify-center"
                      aria-label="Next testimonial"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our digital marketing expertise can help you achieve your business goals.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
