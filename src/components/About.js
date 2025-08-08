import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function About() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '60px',
      duration: 1500,
      delay: 200,
      reset: false,
    });

    sr.reveal('.about-content', {});
  }, []);

  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 section-title">About Me</h2>
      <div className="max-w-3xl mx-auto glass-effect p-8 rounded-2xl about-content">
        <p className="text-lg text-center leading-relaxed text-gray-300">
          I am a dedicated and results-oriented Computer Science and Engineering student at KIIT University. My passion lies in building robust and scalable applications. I have hands-on experience in full-stack web development with the MERN stack and have delved into the exciting world of Artificial Intelligence and Machine Learning. I thrive in collaborative environments, enjoy solving complex problems, and am always eager to learn new technologies to create innovative solutions.
        </p>
      </div>
    </section>
  );
}

export default About;