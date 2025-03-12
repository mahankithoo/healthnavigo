
import React, { useState, useEffect } from "react";
import { healthTips } from "@/utils/data";
import { motion } from "framer-motion";

const HealthTipsPage: React.FC = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  const currentTip = healthTips[currentTipIndex];
  
  useEffect(() => {
    // Auto change tip every 10 seconds
    const interval = setInterval(() => {
      handleNextTip();
    }, 10000);
    
    return () => clearInterval(interval);
  }, [currentTipIndex]);
  
  const handleNextTip = () => {
    if (isChanging) return;
    
    setIsChanging(true);
    setTimeout(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % healthTips.length);
      setIsChanging(false);
    }, 500);
  };
  
  const handlePrevTip = () => {
    if (isChanging) return;
    
    setIsChanging(true);
    setTimeout(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex - 1 + healthTips.length) % healthTips.length);
      setIsChanging(false);
    }, 500);
  };

  return (
    <div className="page-transition">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-medical-secondary rounded-lg text-medical-primary mb-4">
            <span className="text-xs font-medium uppercase tracking-wider">Daily Health Tips</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Wellness Wisdom
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Daily insights to help you live your healthiest life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full py-1 px-3 text-xs font-medium text-gray-700">
              Tip {currentTipIndex + 1} of {healthTips.length}
            </div>
            
            {/* Tip Card */}
            <div className="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={currentTip.image}
                  alt={currentTip.title}
                  className="w-full h-full object-cover transition-transform duration-10000 ease-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <motion.div
                  key={currentTip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {currentTip.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mb-6">
                    {currentTip.content}
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="bg-white px-8 py-4 flex justify-between">
              <button
                onClick={handlePrevTip}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                disabled={isChanging}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex gap-1.5">
                {healthTips.map((tip, index) => (
                  <button
                    key={tip.id}
                    onClick={() => {
                      if (!isChanging && index !== currentTipIndex) {
                        setIsChanging(true);
                        setTimeout(() => {
                          setCurrentTipIndex(index);
                          setIsChanging(false);
                        }, 500);
                      }
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentTipIndex
                        ? "bg-medical-primary scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNextTip}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                disabled={isChanging}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HealthTipsPage;
