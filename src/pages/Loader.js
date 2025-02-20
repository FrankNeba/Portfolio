import React, { useState, useEffect, useRef } from 'react';

import '../Styles/loader.css'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          let currentProgress = 0;
          const interval = setInterval(() => {
            if (currentProgress < 80) {
              currentProgress += 1;
              setProgress(currentProgress);
            } else {
              clearInterval(interval);
            }
          }, 50);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        >{progress}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;

/* Add this CSS to your stylesheet */

/* Container styling */
