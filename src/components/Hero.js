import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Hero() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Software Developer', 'AI Enthusiast', 'Problem Solver', 'Backend Engineer'],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="font-hero text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm Rahul Churiwal
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2">
          <span className="section-title" ref={typedTextRef}></span>
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
          A passionate Computer Science student from West Bengal, India, with a focus on backend development, web applications, and machine learning.
        </p>
        <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-6">
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/rahul-churiwal-a54980276" target="_blank" rel="noreferrer" className="text-gray-300 social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com/RahulChuriwal" target="_blank" rel="noreferrer" className="text-gray-300 social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/rahulchuriwal7/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Orange part of LeetCode */}
                <path
                  d="M17.5 6.5L13 2l-8 10 8 10 4.5-4.5"
                  stroke="#FFA116"
                  fill="none"
                />
                {/* Black part of LeetCode */}
                <path
                  d="M21 12H8"
                  stroke="#FFFFFF"
                  fill="none"
                />
              </svg>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/191WY1TI3HVYtD0YQohZhUKyKiCUJQYmS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-gradient text-white font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Down arrow */}
              <path d="M12 3v12" />
              <polyline points="8 15 12 19 16 15" />
              {/* Underline */}
              <path d="M5 21h14" />
            </svg>
            Download Resume
          </a>

        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden p-2 bg-gradient-to-br from-indigo-500 to-fuchsia-500 profile-img-container">
          <img
            src={require('../assets/photo.jpg')}
            alt="Rahul Churiwal"
            className="w-full h-full object-cover rounded-full profile-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/320x320/0a0a1a/e0e0e0?text=Rahul';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;