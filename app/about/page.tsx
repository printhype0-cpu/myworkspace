'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { teamMembers } from '@/data/team';
import { Target, Eye, Heart, Award, Users, TrendingUp, Linkedin, Twitter } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                About Us
              </h1>
              <p className="text-xl text-white/90">
                We&apos;re a team of passionate digital marketing experts dedicated to helping businesses thrive online
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To empower businesses of all sizes with data-driven digital marketing strategies that deliver measurable results and sustainable growth. We believe in transparency, innovation, and building long-term partnerships with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-full mb-4">
                  <Target className="text-[#0066CC]" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the most trusted digital marketing partner, known for delivering exceptional results and innovative solutions.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <Heart className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Integrity, excellence, innovation, and client success drive everything we do. We&apos;re committed to your growth.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-full mb-4">
                  <Eye className="text-[#0066CC]" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our Approach
                </h3>
                <p className="text-gray-600">
                  Data-driven strategies, creative execution, and continuous optimization to ensure maximum ROI for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Story
              </h2>
              <div className="space-y-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0066CC] text-white rounded-full flex items-center justify-center font-bold">
                      2009
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      The Beginning
                    </h3>
                    <p className="text-gray-600">
                      Founded by a group of digital marketing enthusiasts who saw the potential of online marketing to transform businesses. Started with just 3 team members and 5 clients.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold">
                      2014
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Rapid Growth
                    </h3>
                    <p className="text-gray-600">
                      Expanded our services to include comprehensive SEO, PPC, and social media management. Team grew to 25 members serving over 100 clients across various industries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0066CC] text-white rounded-full flex items-center justify-center font-bold">
                      2019
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Industry Recognition
                    </h3>
                    <p className="text-gray-600">
                      Awarded &quot;Top Digital Marketing Agency&quot; by industry publications. Launched our proprietary analytics platform to provide clients with real-time insights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold">
                      2024
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Today
                    </h3>
                    <p className="text-gray-600">
                      Now serving 500+ clients worldwide with a team of 50+ digital marketing experts. Continuing to innovate and deliver exceptional results for businesses of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-full mb-4">
                  <Users className="text-[#0066CC]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>500+</h3>
                <p className="text-gray-600">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <TrendingUp className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>250%</h3>
                <p className="text-gray-600">Avg. Traffic Growth</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0066CC]/10 rounded-full mb-4">
                  <Award className="text-[#0066CC]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#0066CC] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>25+</h3>
                <p className="text-gray-600">Industry Awards</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-full mb-4">
                  <Target className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-[#FF6B35] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>98%</h3>
                <p className="text-gray-600">Client Retention</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                The experts behind your success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] h-32"></div>
                  <div className="p-6 -mt-16 relative">
                    <div className="text-7xl mb-4 bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#0066CC] text-center font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-center mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0066CC] transition-colors">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0066CC] transition-colors">
                          <Twitter size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to take your digital marketing to the next level? Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0066CC]">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
