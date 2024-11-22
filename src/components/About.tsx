import React from 'react';
import { Code2, Palette, Globe2, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using modern frameworks and tools.',
      technologies: ['React', 'Node', 'Redux', 'React-hooks']
    },
    {
      icon: Cpu,
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications and APIs.',
      technologies: ['Node.js', 'Java','springboot','SQL', 'PostgreSQL', 'MongoDB','MySQL']
    },
    {
      icon: Globe2,
      title: 'Mobile Development',
      description: 'Deploying and managing applications using cloud platforms.',
      technologies: ['Flutter',  'Dart','Docker']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user experiences.',
      technologies: ['Figma', 'Adobe XD', 'Responsive Design', 'Accessibility']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with 1.5+ years of experience in creating digital solutions 
            that help businesses grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ icon: Icon, title, description, technologies }) => (
            <div key={title} className="p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <Icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}