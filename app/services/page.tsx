'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { services } from '@/data/services';
import { CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Services
              </h1>
              <p className="text-xl text-white/90">
                Comprehensive digital marketing solutions designed to grow your business and maximize your ROI
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Key Benefits:
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={20} className="text-[#0066CC] flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button href="/contact" variant="primary">
                      Get Started
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
                      <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        What&apos;s Included:
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                            <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                            <span className="font-medium text-gray-800">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Compare Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Find the perfect solution for your business needs
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-[#0066CC] text-white">
                    <th className="p-4 text-left">Service</th>
                    <th className="p-4 text-center">Best For</th>
                    <th className="p-4 text-center">Timeline</th>
                    <th className="p-4 text-center">ROI Potential</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">SEO Optimization</td>
                    <td className="p-4 text-center">Long-term growth</td>
                    <td className="p-4 text-center">3-6 months</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Google Ads & PPC</td>
                    <td className="p-4 text-center">Immediate results</td>
                    <td className="p-4 text-center">Instant</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Social Media Marketing</td>
                    <td className="p-4 text-center">Brand awareness</td>
                    <td className="p-4 text-center">1-3 months</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Content Creation</td>
                    <td className="p-4 text-center">Engagement & SEO</td>
                    <td className="p-4 text-center">2-4 months</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Analytics & Reporting</td>
                    <td className="p-4 text-center">Data-driven decisions</td>
                    <td className="p-4 text-center">Ongoing</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s create a custom digital marketing strategy for your business
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
