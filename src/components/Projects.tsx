import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Parking Bill Generator',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
      image: import.meta.env.VITE_PROJECT_1, // Use Vite's environment variable syntax
      technologies: ['Flutter', 'Dart', 'Springboot', 'PostgreSQL'],
      githubUrl: 'https://github.com/sanjai45-m/E-bill',
      liveUrl: 'https://www.linkedin.com/posts/sanjai-20-01-2002-m_eparking-flutter-springboot-activity-7259461258578427904-mB7R?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'S-NEWS APP',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      image: import.meta.env.VITE_PROJECT_2,
      technologies: ['Flutter', 'Dart', 'Firebase', 'WebSocket'],
      githubUrl: 'https://github.com/sanjai45-m/S-NEWS-App',
      liveUrl: 'https://www.linkedin.com/posts/sanjai-20-01-2002-m_flutter-newsapp-mobileappdevelopment-activity-7236303159382450176-xKJp?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'S-NEWS Admin Panel',
      description: 'An AI-powered platform that generates high-quality content using machine learning algorithms.',
      image: import.meta.env.VITE_PROJECT_3,
      technologies: ['React.js', 'Javascript', 'Firebase', 'Node.js (FCM Notification Server)'],
      githubUrl: 'https://github.com/sanjai45-m/Admin-Panel-S-NEWS-APP',
      liveUrl: 'https://www.linkedin.com/posts/sanjai-20-01-2002-m_snews-flutter-reactjs-activity-7238773992084398080-vUr7?utm_source=share&utm_medium=member_desktop',
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work that showcases my skills and expertise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}