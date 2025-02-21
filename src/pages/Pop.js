import React, { useEffect, useRef, useState } from 'react';
import '../Styles/pop.css';

const Pop = ({ children }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Check if the element is within the viewport
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`simple-box ${isVisible ? 'show' : ''}`}
    >
      {children}
    </div>
  );
};

export default Pop;
