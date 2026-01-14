import React, { useState } from 'react';
import Head from 'next/head';

export default function MayurCommercials() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- CONTACT FORM STATE & LOGIC ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // WhatsApp Logic
    const targetPhone = '919113834881'; // Your specific number
    const message = `*New Wholesale Enquiry*\n\n*Name:* ${formData.name.trim()}\n*Phone:* ${formData.phone.trim()}\n*Requirement:* ${formData.requirement.trim()}`;
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', requirement: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-yellow-500/30">
      <Head>
        <title>Mayur Commercials | Wholesale Rice & Food Grains</title>
        <meta name="description" content="Premium B2B Wholesale Rice Dealer in APMC Yard, Yeshwanthpur, Bangalore." />
      </Head>

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Mayur Commercials</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
              <a href="#products" className="hover:text-yellow-500 transition-colors">Products</a>
              <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   {isMenuOpen ? (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                   )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-2">
            <a href="#about" className="block py-2 text-slate-300">About</a>
            <a href="#products" className="block py-2 text-slate-300">Products</a>
            <a href="#contact" className="block py-2 text-slate-300">Contact</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-medium tracking-wide uppercase mb-6">
            Since 2009 • APMC Yeshwanthpur
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Premium Wholesale <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Rice & Food Grains
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Your trusted B2B partner for high-quality Basmati, Non-Basmati, and Pulses. 
            Serving retailers and institutions with consistency and trust.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-yellow-600 text-slate-950 font-bold rounded-lg hover:bg-yellow-500 transition-all flex items-center gap-2">
              Request Quote
            </a>
            <a href="#products" className="px-8 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all">
              View Catalog
            </a>
          </div>
        </div>
      </section>

      {/* --- TRUST INDICATORS --- */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Item 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-slate-800 rounded-full text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-semibold text-lg">15+ Years Experience</h3>
            <p className="text-slate-400 text-sm">Family-run business delivering quality since 2009.</p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-slate-800 rounded-full text-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="font-semibold text-lg">Prime Location</h3>
            <p className="text-slate-400 text-sm">Located at the heart of APMC Yard, Yeshwanthpur.</p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-slate-800 rounded-full text-yellow-500">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
            </div>
            <h3 className="font-semibold text-lg">Wholesale Supply</h3>
            <p className="text-slate-400 text-sm">Bulk quantities available for retailers & hotels.</p>
          </div>
        </div>
      </section>

      {/* --- PRODUCT CATEGORIES --- */}
      <section id="products" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Product Range</h2>
            <p className="text-slate-400">Strictly selected for quality and consistency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Basmati Rice", desc: "Premium long-grain aromatic rice for high-end retail.", color: "from-amber-900" },
              { title: "Sona Masoori", desc: "The staple lightweight rice perfect for daily consumption.", color: "from-slate-800" },
              { title: "Bullet Rice", desc: "High-quality raw rice varieties widely used in Karnataka.", color: "from-slate-800" },
              { title: "Idli Rice", desc: "Specialized short bold grains for soft idlis and dosas.", color: "from-slate-800" },
              { title: "Jeera Samba", desc: "Traditional aromatic small grain rice for biryanis.", color: "from-amber-900" },
              { title: "Pulses & Grains", desc: "Wholesale Toor Dal, Urad Dal, and other essentials.", color: "from-slate-800" }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-yellow-600/50 transition-all duration-300">
                <div className={`h-32 w-full bg-gradient-to-b ${item.color} to-slate-900 opacity-50`}></div>
                <div className="p-6 relative -mt-12">
                  <div className="w-12 h-12 bg-slate-950 border border-slate-700 rounded-lg flex items-center justify-center mb-4 shadow-xl">
                    <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
                  <a href="#contact" className="block w-full text-center py-2 border border-slate-700 rounded text-sm font-medium hover:bg-yellow-600 hover:text-slate-950 hover:border-yellow-600 transition-colors">
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (YOUR CUSTOM FORM) --- */}
      <section id="contact" className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6">
          <div className="bg-slate-950 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Contact Info Side */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-slate-400 mb-10">
                    Ready to place a bulk order or request a sample? Contact our sales team directly or fill out the form to chat with us on WhatsApp.
                  </p>
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-600 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Visit our Warehouse</h4>
                        <p className="text-slate-400 text-sm">
                          Mayur Commercials, APMC Yard,<br />
                          Yeshwanthpur, Bangalore - 560022
                        </p>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-600 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Call Us</h4>
                        <p className="text-slate-400 text-sm">+91 919113834881</p>
                        <p className="text-slate-500 text-xs mt-1">Mon - Sat, 9am - 7pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name / Business Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium text-slate-400 mb-2">Your Requirement</label>
                    <textarea 
                      id="requirement"
                      name="requirement"
                      required
                      rows={4}
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors resize-none"
                      placeholder="E.g., 500kg Basmati Rice"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                      submitted 
                        ? 'bg-green-600 text-white cursor-default' 
                        : 'bg-yellow-600 hover:bg-yellow-500 text-slate-950'
                    }`}
                  >
                    {isSubmitting ? (
                      'Opening WhatsApp...'
                    ) : submitted ? (
                      'Enquiry Sent!'
                    ) : (
                      <>
                        Send Enquiry via WhatsApp 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Mayur Commercials. All rights reserved.</p>
      </footer>
    </div>
  );
}
