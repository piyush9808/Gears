"use client";
import React, { useState, useEffect } from 'react';
import ScrollProgressBar from 'react-scroll-progress-bar';

const CustomProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const percentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  
  const getColorClass = () => {
    if (scrollPercentage < 25) {
     
      return 'bg-red-500'; 
    } else if (scrollPercentage < 50) {
    
      return 'bg-yellow-500';
    } else if (scrollPercentage < 75) {
    
      return 'bg-green-500'; 
    } else {
      
      return 'bg-blue-500'; 
    }
  };

 
  return (
    <ScrollProgressBar
      height="5px"
      bgColor="bg-blue-500"
      percentage={scrollPercentage}
      className='progress-bar'
    />
  );
};

export default CustomProgressBar;
