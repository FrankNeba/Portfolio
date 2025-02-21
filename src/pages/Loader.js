import React, { useState, useEffect, useRef } from 'react';

import '../Styles/loader.css';

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible && progress < props.percentage) {
          let currentProgress = progress;
          const interval = setInterval(() => {
            if (currentProgress < props.percentage) {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [progress, props.percentage]);

  return (
    <div ref={containerRef} className="container">
      {props.skill}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, backgroundColor: `${props.color}` }}
        ></div>
      </div>
      {progress}%
    </div>
  );
};

export default ProgressBar;

/* Add this CSS to your stylesheet */

/* Container styling */
