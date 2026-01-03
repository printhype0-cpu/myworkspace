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
        <section className="relative bg-gradient-to-br from-[#0066CC] via-[#0055aa] to-[#004488] text-white py-20 md:py-40 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  🚀 Your Growth Partner
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Maximize Your ROI with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a]">
                  Digital Marketing Expertise
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/85 leading-relaxed max-w-3xl mx-auto">
                Drive growth with data-driven strategies in SEO, Google Ads, Social Media, and Content Marketing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button href="/contact" variant="primary" size="lg" className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Get Started Today
                </Button>
                <Button href="/services" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#0066CC] hover:scale-105 transition-all">
                  View Our Services
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                  <CheckCircle size={22} className="text-[#FF6B35]" />
                  <span className="font-medium">500+ Clients</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                  <CheckCircle size={22} className="text-[#FF6B35]" />
                  <span className="font-medium">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                  <CheckCircle size={22} className="text-[#FF6B35]" />
                  <span className="font-medium">15+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 mb-12 font-semibold uppercase tracking-widest text-sm">Trusted by Leading Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4">
              {clientLogos.map((client, index) => (
                <div 
                  key={client.name} 
                  className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-5xl md:text-6xl">{client.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals & Statistics */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0055aa] rounded-2xl mb-5 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <TrendingUp className="text-white" size={36} />
                </div>
                <h3 className="text-5xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>250%</h3>
                <p className="text-gray-600 font-medium">Average Traffic Growth</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#e55f2f] rounded-2xl mb-5 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Users className="text-white" size={36} />
                </div>
                <h3 className="text-5xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>500+</h3>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0055aa] rounded-2xl mb-5 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Award className="text-white" size={36} />
                </div>
                <h3 className="text-5xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>15+</h3>
                <p className="text-gray-600 font-medium">Years of Experience</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#e55f2f] rounded-2xl mb-5 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Target className="text-white" size={36} />
                </div>
                <h3 className="text-5xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>98%</h3>
                <p className="text-gray-600 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#FF6B35] font-bold uppercase tracking-widest text-sm mb-4 inline-block bg-[#FF6B35]/10 px-4 py-2 rounded-full">What We Do</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive digital marketing solutions tailored to your business goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.slice(0, 6).map((service) => (
                <div key={service.id} className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#0055aa] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#0066CC] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-7 leading-relaxed text-lg">{service.shortDescription}</p>
                  <Link href="/services" className="inline-flex items-center text-[#0066CC] font-bold hover:text-[#FF6B35] transition-all group">
                    Learn More <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-14">
              <Button href="/services" variant="secondary" size="lg" className="shadow-2xl hover:shadow-3xl hover:scale-105 transition-all">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#FF6B35] font-bold uppercase tracking-widest text-sm mb-4 inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/50 px-5 py-2 rounded-full border border-[#FF6B35]/20">Client Success</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Don&apos;t just take our word for it
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-20 border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0066CC]/10 to-[#FF6B35]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-4xl drop-shadow-lg">⭐</span>
                    ))}
                  </div>
                  <div className="relative px-12 py-4 bg-[#0066CC]/5 rounded-xl">
                   <p className="text-2xl md:text-3xl text-gray-800 mb-10 italic leading-relaxed text-center">
                     {testimonials[currentTestimonial].text}
                   </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#0055aa] flex items-center justify-center shadow-xl ring-4 ring-white">
                        <span className="text-6xl">{testimonials[currentTestimonial].image}</span>
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-900">{testimonials[currentTestimonial].name}</p>
                        <p className="text-gray-600 font-medium">{testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={prevTestimonial}
                        className="w-14 h-14 rounded-2xl bg-gray-100 hover:bg-gradient-to-br hover:from-[#0066CC] hover:to-[#0055aa] hover:text-white transition-all duration-300 flex items-center justify-center text-xl font-bold hover:scale-110 shadow-md hover:shadow-lg"
                        aria-label="Previous testimonial"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-14 h-14 rounded-2xl bg-gray-100 hover:bg-gradient-to-br hover:from-[#0066CC] hover:to-[#0055aa] hover:text-white transition-all duration-300 flex items-center justify-center text-xl font-bold hover:scale-110 shadow-md hover:shadow-lg"
                        aria-label="Next testimonial"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-gradient-to-br from-[#0066CC] via-[#0055aa] to-[#004488] text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Let&apos;s discuss how our digital marketing expertise can help you achieve your business goals.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="shadow-2xl hover:shadow-3xl hover:scale-105 transition-all">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
