import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  isScrolling: boolean;
}

export default function Navigation({ activeSection, isScrolling }: NavigationProps) {
  const resumePath = import.meta.env.VITE_SANJAI_CV;
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolling ? 'bg-white/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="group">
            <span className="text-3xl font-bold relative">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">MS</span>
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all group-hover:w-full"></span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`relative text-lg transition-colors duration-300 ${activeSection === href.slice(1) ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Icons and Resume Button */}
          <div className="flex items-center space-x-6">
            {[ // Social Links
              { href: 'https://github.com/sanjai45-m', Icon: Github },
              { href: 'https://www.linkedin.com/in/sanjai-20-01-2002-m/', Icon: Linkedin },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Icon size={22} /> {/* No activeSection or isScrolling props passed here */}
              </a>
            ))}
            {/* Resume Download Button */}
            <a
              href={resumePath}
              download="My_Resume.pdf"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
