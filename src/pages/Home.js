import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Append Typeform script dynamically when component mounts
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="home-container">
      <h1>A community for innovators and builders to find inspiration and collaboration.</h1>
      {/* Embed the Typeform with dangerouslySetInnerHTML */}
      <div
        id="typeform-container"
        style={{ height: '900px', width: '100%' }} // Ensure the container is large enough
        dangerouslySetInnerHTML={{
          __html: `<div data-tf-live="01J8QG9M339MEMAQBKS12GAX91"></div>`,
        }}
      ></div>
    </div>
  );
};

export default Home;