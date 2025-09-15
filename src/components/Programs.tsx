import React from 'react';
import { Code, Stethoscope, Calculator, Briefcase, Palette, FlaskConical, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Code,
      title: 'Computer Science & Engineering',
      description: 'Master the future of technology with AI, ML, and software development',
      duration: '4 Years',
      degree: 'B.Tech',
      color: 'from-blue-500 to-blue-600',
      features: ['AI & Machine Learning', 'Software Development', 'Cybersecurity', 'Data Science']
    },
    {
      icon: Stethoscope,
      title: 'Medicine & Health Sciences',
      description: 'Comprehensive medical education with state-of-the-art facilities',
      duration: '5.5 Years',
      degree: 'MBBS',
      color: 'from-red-500 to-red-600',
      features: ['Clinical Training', 'Research Labs', 'Hospital Internship', 'Specializations']
    },
    {
      icon: Calculator,
      title: 'Business & Management',
      description: 'Develop leadership skills and business acumen for the modern world',
      duration: '2 Years',
      degree: 'MBA',
      color: 'from-emerald-500 to-emerald-600',
      features: ['Leadership Training', 'Industry Projects', 'Global Exposure', 'Entrepreneurship']
    },
    {
      icon: Briefcase,
      title: 'Law & Legal Studies',
      description: 'Comprehensive legal education with practical training',
      duration: '5 Years',
      degree: 'B.A. LLB',
      color: 'from-purple-500 to-purple-600',
      features: ['Constitutional Law', 'Corporate Law', 'Moot Courts', 'Legal Research']
    },
    {
      icon: Palette,
      title: 'Design & Architecture',
      description: 'Creative programs combining art, design, and technology',
      duration: '4 Years',
      degree: 'B.Des',
      color: 'from-orange-500 to-orange-600',
      features: ['UI/UX Design', 'Architecture', 'Graphics Design', 'Product Design']
    },
    {
      icon: FlaskConical,
      title: 'Biotechnology',
      description: 'Advanced research in life sciences and biotechnology',
      duration: '4 Years',
      degree: 'B.Tech',
      color: 'from-teal-500 to-teal-600',
      features: ['Genetic Engineering', 'Biomedical Research', 'Lab Techniques', 'Industrial Biotech']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from 100+ programs across various disciplines, designed to prepare you for tomorrow's challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${program.color} text-white`}>
                      {program.degree}
                    </span>
                    <span className="text-sm text-gray-500">{program.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-all group-hover:bg-blue-600 group-hover:text-white">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-xl">
            <span className="font-semibold">View All Programs</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;