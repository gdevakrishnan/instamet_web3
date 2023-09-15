import React from 'react';
import TypingEffect from './TypingEffect';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const nav = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <TypingEffect />
      </div>
    </div>
  );
};

export default Hero;
