import React, { useState, useEffect, useRef } from 'react';

import '../Styles/loader.css';

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const isVisible = containerRef.current.getBoundingClientRect().top >= 0 && containerRef.current.getBoundingClientRect().bottom <= window.innerHeight;
        if (isVisible && progress < props.percentage) {
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(() => {
            setProgress((prev) => {
              if (prev < props.percentage) {
                return prev + 1;
              } else {
                clearInterval(intervalRef.current);
                return prev;
              }
            });
          }, 30);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(intervalRef.current);
    };
  }, [progress, props.percentage]);

  return (
//   <div className='con'>
    <div ref={containerRef} className="container">
      {props.skill}
      <div className="progress-bar" style={{ backgroundColor: '#e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
        <div
          className="progress"
          style={{  width: `${progress}%`, backgroundColor: `${props.color}`,}}
        ></div>
      </div>
      {progress}%
    {/* </div> */}
    </div>
  );
};

export default ProgressBar;

/* Add this CSS to your stylesheet */

/* Container styling */
