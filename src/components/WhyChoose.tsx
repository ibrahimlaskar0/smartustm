import React from 'react';
import { Trophy, Users, Globe2, Lightbulb, BookOpen, Target } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Consistently ranked among top private universities with NAAC A+ grade and international accreditations.',
      stats: 'NAAC A+ Grade'
    },
    {
      icon: Users,
      title: 'Industry Connections',
      description: 'Strong partnerships with Fortune 500 companies ensuring excellent placement opportunities.',
      stats: '95% Placement Rate'
    },
    {
      icon: Globe2,
      title: 'Global Exposure',
      description: 'International collaborations and exchange programs with universities across 25+ countries.',
      stats: '25+ Partner Countries'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'State-of-the-art research facilities and incubation centers fostering entrepreneurship.',
      stats: '50+ Startups Incubated'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Holistic education combining theoretical knowledge with practical skills and life experiences.',
      stats: '1000+ Research Papers'
    },
    {
      icon: Target,
      title: 'Career Support',
      description: 'Dedicated career services with personalized guidance from industry experts and alumni network.',
      stats: '10,000+ Alumni Network'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">USTM</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes USTM the preferred choice for students seeking world-class education and limitless opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full">
                      <span className="text-sm font-semibold text-blue-700">
                        {feature.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-emerald-900 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives at USTM. 
              Your future starts with the right education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all font-semibold">
                Schedule Campus Visit
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;