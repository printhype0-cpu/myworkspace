'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { caseStudies, industries, serviceTypes } from '@/data/caseStudies';
import { Filter, TrendingUp } from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedServiceType, setSelectedServiceType] = useState('All');

  const filteredCaseStudies = caseStudies.filter((study) => {
    const industryMatch = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const serviceMatch = selectedServiceType === 'All' || study.serviceType === selectedServiceType;
    return industryMatch && serviceMatch;
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Case Studies
              </h1>
              <p className="text-xl text-white/90">
                Real results from real clients. See how we&apos;ve helped businesses achieve their digital marketing goals.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50 sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-[#0066CC]" />
                <span className="font-medium">Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedIndustry === industry
                        ? 'bg-[#0066CC] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {serviceTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedServiceType(type)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedServiceType === type
                        ? 'bg-[#FF6B35] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredCaseStudies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No case studies found matching your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredCaseStudies.map((study) => (
                  <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] p-12 flex items-center justify-center">
                      <div className="text-8xl">{study.image}</div>
                    </div>
                    <div className="p-8">
                      <div className="flex gap-2 mb-4">
                        <span className="bg-[#0066CC]/10 text-[#0066CC] px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-sm font-medium">
                          {study.serviceType}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {study.title}
                      </h2>
                      <p className="text-gray-600 mb-4">Client: {study.client}</p>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Challenge:</h3>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Solution:</h3>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="text-[#0066CC]" />
                          <h3 className="font-semibold">Results:</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-[#0066CC]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {study.results.metric1.value}
                            </p>
                            <p className="text-sm text-gray-600">{study.results.metric1.label}</p>
                            <p className="text-xs text-gray-500">{study.results.metric1.period}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-[#FF6B35]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {study.results.metric2.value}
                            </p>
                            <p className="text-sm text-gray-600">{study.results.metric2.label}</p>
                            <p className="text-xs text-gray-500">{study.results.metric2.period}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-[#0066CC]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {study.results.metric3.value}
                            </p>
                            <p className="text-sm text-gray-600">{study.results.metric3.label}</p>
                            <p className="text-xs text-gray-500">{study.results.metric3.period}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#0066CC]/5 border-l-4 border-[#0066CC] p-4 mb-6">
                        <p className="text-gray-700 italic">&quot;{study.testimonial}&quot;</p>
                        <p className="text-sm text-gray-600 mt-2">— {study.testimonialAuthor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business grow with proven digital marketing strategies.
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
