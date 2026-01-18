'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { services } from '@/data/services';
import { testimonials, clientLogos } from '@/data/testimonials';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Target, BarChart, UserCheck, Search, LifeBuoy, Settings, Rocket } from 'lucide-react';
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
                Grow Your Business with Expert Digital Marketing
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                🚀 Get 300% ROI with proven SEO, PPC & Social Media strategies
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
                  <span>8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>500+ Successful Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Google & Facebook Certified</span>
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
                <h3 className="text-4xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>300%</h3>
                <p className="text-gray-600">Average ROI for Clients</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <Users className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>500+</h3>
                <p className="text-gray-600">Successful Projects</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-full mb-4">
                  <Award className="text-[#0066CC]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>8+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <Target className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>100%</h3>
                <p className="text-gray-600">Data-Driven Approach</p>
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

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Why Choose Amod Kumar for Your Digital Marketing?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We don&apos;t just provide services; we deliver results. Our approach is built on data, transparency, and a deep understanding of digital growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart className="text-[#0066CC]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Data-Driven</h3>
                      <p className="text-gray-600 text-sm">Every decision is backed by solid data and analytics.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="text-[#FF6B35]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Expert Team</h3>
                      <p className="text-gray-600 text-sm">Certified specialists in SEO, PPC, and Social Media.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="text-[#0066CC]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Transparent</h3>
                      <p className="text-gray-600 text-sm">Clear reporting and regular communication on progress.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LifeBuoy className="text-[#FF6B35]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Full Support</h3>
                      <p className="text-gray-600 text-sm">We are your partners in growth, always here to help.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="bg-gradient-to-br from-[#0066CC] to-[#FF6B35] rounded-2xl p-1 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-[#0066CC] font-bold text-2xl mb-1">300%+</p>
                        <p className="text-gray-600 text-sm font-medium">Average ROI Improvement</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-[#FF6B35] font-bold text-2xl mb-1">500+</p>
                        <p className="text-gray-600 text-sm font-medium">Successful Project Deliveries</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-[#0066CC] font-bold text-2xl mb-1">8+ Years</p>
                        <p className="text-gray-600 text-sm font-medium">Industry-Leading Expertise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Recent Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                  See how we&apos;ve helped other businesses achieve remarkable growth.
                </p>
              </div>
              <Link href="/case-studies" className="hidden md:flex items-center text-[#0066CC] font-bold hover:gap-2 transition-all">
                View All Projects <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(0, 3).map((study) => (
                <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="h-48 bg-[#0066CC]/5 flex items-center justify-center text-7xl">
                    {study.image}
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="text-sm font-bold text-[#FF6B35] mb-2 uppercase tracking-wider">{study.serviceType}</div>
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{study.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">{study.challenge}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-2xl font-bold text-[#0066CC]">{study.results.metric1.value}</p>
                        <p className="text-xs text-gray-500 uppercase">{study.results.metric1.label}</p>
                      </div>
                      <Link href={`/case-studies`} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0066CC] hover:text-white transition-colors">
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 md:hidden">
              <Button href="/case-studies" variant="outline">View All Projects</Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A systematic approach to ensuring your digital marketing success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-12 z-0"></div>
              
              {[
                { title: 'Discovery', desc: 'Understanding your business, goals, and target audience.', icon: Search, color: 'bg-blue-500' },
                { title: 'Strategy', desc: 'Developing a custom plan tailored to your specific needs.', icon: Target, color: 'bg-orange-500' },
                { title: 'Execution', desc: 'Implementing strategies across all selected channels.', icon: Settings, color: 'bg-blue-600' },
                { title: 'Scale', desc: 'Analyzing results and scaling what works for max ROI.', icon: Rocket, color: 'bg-orange-600' },
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 text-center">
                  <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{idx + 1}. {step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
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
