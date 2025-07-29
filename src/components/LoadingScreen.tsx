import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingSteps = [
    'Initializing...',
    'Loading components...',
    'Setting up animations...',
    'Optimizing performance...',
    'Almost ready...',
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const totalSteps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / totalSteps) * 100;
      setProgress(newProgress);

      // Update loading text based on progress
      const textIndex = Math.floor((newProgress / 100) * (loadingSteps.length - 1));
      setLoadingText(loadingSteps[textIndex]);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setTimeout(onLoadingComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-2xl font-bold text-gray-800 dark:text-gray-200">
                AU
              </div>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"
          >
            Abdullah Uzair
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12"
          >
            Software Engineer & Full-Stack Developer
          </motion.p>

          {/* Progress Bar */}
          <div className="w-80 mx-auto mb-6">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
              <span>0%</span>
              <span>{Math.round(progress)}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Loading Text */}
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            {loadingText}
          </motion.p>

          {/* Rotating Loader */}
          <motion.div
            className="mt-8 w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;