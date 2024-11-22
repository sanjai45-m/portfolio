import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Renixe Info Tech Pvt. Ltd.',
      role: 'Software Developer',
      period: '2023 - Present',
      location: 'Avadi, Chennai',
      description: 'Team Player in  development of enterprise-level applications and  mentored junior developers',
      achievements: [
        'Reduced application load time by 40%',
        'Implemented microservices architecture',
        'Led Product productivity to 30%'
      ]
    },
   
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600">My professional journey and achievements.</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-xl text-purple-600">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="text-gray-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}