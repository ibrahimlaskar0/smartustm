import React from 'react';
import { Play, ArrowRight, Users, Award, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Ranked #1 Private University in Northeast India</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Shape Your Future at
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                USTM
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Where innovation meets excellence. Join India's most progressive university 
              and unlock your potential with world-class education and cutting-edge research.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl">
                <span className="font-semibold">Explore Programs</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="flex items-center justify-center px-8 py-4 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all backdrop-blur-sm border border-white border-opacity-30">
                <Play className="w-5 h-5 mr-2" />
                <span className="font-semibold">Watch Campus Tour</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15K+</div>
                <div className="text-sm text-gray-300">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">500+</div>
                <div className="text-sm text-gray-300">Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100+</div>
                <div className="text-sm text-gray-300">Programs</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:max-w-lg">
                <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white border-opacity-20">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
                  <p className="text-gray-200 mb-6">Connect with students from 50+ countries and build lifelong networks.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Global Exposure</div>
                        <div className="text-gray-300 text-sm">International partnerships & exchange programs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Industry Recognition</div>
                        <div className="text-gray-300 text-sm">95% placement rate with top companies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;