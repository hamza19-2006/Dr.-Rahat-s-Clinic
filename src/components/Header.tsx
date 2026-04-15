import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-clinic-surface/90 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-clinic-purple rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
              R
            </div>
            <div>
              <h1 className="font-serif font-bold text-white leading-none">Dr. Rahat's</h1>
              <p className="text-[10px] uppercase tracking-widest text-clinic-teal font-semibold">Gynae & Obs Clinic</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-clinic-text-muted hover:text-clinic-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/923250783600" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-clinic-teal/10 text-clinic-teal hover:bg-clinic-teal hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            >
              <Phone className="w-4 h-4" />
              0325 0783600
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-clinic-text-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-clinic-surface shadow-2xl border-t border-white/5 py-4 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/923250783600" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-clinic-teal text-white px-5 py-3 rounded-full text-sm font-medium mt-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
