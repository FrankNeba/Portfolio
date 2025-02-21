import React, { useEffect, useRef, useState } from 'react';
import '../Styles/pop.css'

const Pop = ({children}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setTimeout(() => {
            if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
        }, 0)

      
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
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

