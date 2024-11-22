import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-purple-600 font-medium">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sanjai M
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light">
                Crafting digital experiences through code
              </p>
            </div>
            
            <p className="text-gray-600 text-lg max-w-xl">
            A passionate full-stack developer with expertise in React.js, Spring Boot, and crafting engaging web and mobile applications. I combine creativity and functionality to deliver seamless user experiences
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-8 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700 transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-6 items-center">
              <div className="h-[1px] w-12 bg-gray-300"></div>
              <div className="flex gap-4">
                <span className="text-gray-600">Tech Stack</span>
                {['React', 'Springboot', 'Flutter', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
            <img
              src="./assets/profile.jpg"
              alt="Developer"
              className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div> 
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown size={24} className="text-purple-600 animate-bounce" />
      </div>
    </section>
  );
}