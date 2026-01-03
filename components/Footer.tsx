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
      <div className="bg-[#0066CC] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Stay Updated with Digital Marketing Tips
            </h3>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for the latest insights and strategies.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
              <button
                type="submit"
                className="bg-[#FF6B35] text-white px-8 py-3 rounded-full hover:bg-[#e55f2f] transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </form>
            {isSubmitted && (
              <p className="text-white mt-3">Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              DMA<span className="text-[#FF6B35]">.</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in digital marketing excellence. We help businesses grow through data-driven strategies.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-[#0066CC] transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#0066CC] transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#0066CC] transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-[#0066CC] transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#0066CC] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#seo" className="text-gray-400 hover:text-[#0066CC] transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services#ppc" className="text-gray-400 hover:text-[#0066CC] transition-colors">Google Ads & PPC</Link></li>
              <li><Link href="/services#social" className="text-gray-400 hover:text-[#0066CC] transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/services#content" className="text-gray-400 hover:text-[#0066CC] transition-colors">Content Creation</Link></li>
              <li><Link href="/services#analytics" className="text-gray-400 hover:text-[#0066CC] transition-colors">Analytics & Reporting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#FF6B35] flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Marketing Street, Digital City, DC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#FF6B35] flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#FF6B35] flex-shrink-0" />
                <a href="mailto:info@dma.com" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                  info@dma.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Digital Marketing Agency. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-[#0066CC] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#0066CC] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
