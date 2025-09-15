import React, { useEffect, useRef, useState } from 'react';
import { Users, GraduationCap, Building, Award } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, faculty: 0, programs: 0, awards: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = { students: 15000, faculty: 500, programs: 100, awards: 25 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounts = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        students: Math.floor(finalCounts.students * progress),
        faculty: Math.floor(finalCounts.faculty * progress),
        programs: Math.floor(finalCounts.programs * progress),
        awards: Math.floor(finalCounts.awards * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);
  };

  const stats = [
    {
      icon: Users,
      count: counts.students,
      suffix: '+',
      label: 'Students Enrolled',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: GraduationCap,
      count: counts.faculty,
      suffix: '+',
      label: 'Expert Faculty',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Building,
      count: counts.programs,
      suffix: '+',
      label: 'Academic Programs',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Award,
      count: counts.awards,
      suffix: '+',
      label: 'Awards & Recognition',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            USTM by the Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our achievements reflect our commitment to excellence in education and research
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.count.toLocaleString()}{stat.suffix}
                  </div>
                  
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-full px-8 py-4 border border-white border-opacity-20">
            <Award className="w-6 h-6 text-yellow-400 mr-3" />
            <span className="text-white font-semibold">Ranked #1 Private University in Northeast India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;