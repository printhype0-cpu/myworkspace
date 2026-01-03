'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#0066CC] via-[#0055aa] to-[#0066CC] py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Stay Updated with Digital Marketing Tips
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Subscribe to our newsletter for the latest insights and strategies.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30 shadow-lg"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF6B35] to-[#e55f2f] text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold"
              >
                Subscribe
              </button>
            </form>
            {isSubmitted && (
              <p className="text-white mt-4 text-lg font-medium animate-in fade-in">✓ Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              DMA<span className="text-[#FF6B35]">.</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in digital marketing excellence. We help businesses grow through data-driven strategies.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0066CC] hover:text-white transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0066CC] hover:text-white transition-all hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0066CC] hover:text-white transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0066CC] hover:text-white transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#seo" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">SEO Optimization</Link></li>
              <li><Link href="/services#ppc" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Google Ads & PPC</Link></li>
              <li><Link href="/services#social" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Social Media Marketing</Link></li>
              <li><Link href="/services#content" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Content Creation</Link></li>
              <li><Link href="/services#analytics" className="text-gray-400 hover:text-[#0066CC] transition-colors py-1 inline-block hover:translate-x-2 transition-transform">Analytics & Reporting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#FF6B35]" />
                </div>
                <span className="text-gray-400 leading-relaxed pt-1">123 Marketing Street, Digital City, DC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#FF6B35]" />
                </div>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-[#0066CC] transition-colors pt-1 inline-block">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#FF6B35]" />
                </div>
                <a href="mailto:info@dma.com" className="text-gray-400 hover:text-[#0066CC] transition-colors pt-1 inline-block">
                  info@dma.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p className="mb-4 md:mb-0">&copy; 2024 Digital Marketing Agency. All rights reserved.</p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="hover:text-[#0066CC] transition-colors hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#0066CC] transition-colors hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
