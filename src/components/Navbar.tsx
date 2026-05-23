'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/guide', label: 'Guide' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 border-b border-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-extrabold text-russia-red tracking-tight group-hover:scale-105 transition">
              AfroRus
            </span>
            <span className="text-2xl font-light text-charcoal">|</span>
            <span className="text-lg font-semibold text-africa-gold hidden sm:inline">
              Reality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  pathname === link.href
                    ? 'text-russia-red bg-russia-red/5'
                    : 'text-charcoal hover:text-russia-red hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="ml-4 btn-primary py-2 px-5 text-sm">
              🇫🇷 FR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-charcoal hover:bg-gray-100 focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-light-gray">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'text-russia-red bg-russia-red/5'
                    : 'text-charcoal hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 btn-primary py-3">🇫🇷 Français</button>
          </div>
        </div>
      )}
    </nav>
  );
}