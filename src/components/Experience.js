import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Experience() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '60px',
      duration: 1500,
      delay: 200,
      reset: false,
    });

    sr.reveal('.experience-card', {});
  }, []);

  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 section-title">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect p-8 rounded-2xl experience-card">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
            <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
            <p className="text-indigo-300 font-semibold mt-2 sm:mt-0">May 2025 - June 2025</p>
          </div>
          <p className="text-lg font-semibold text-gray-300 mb-4">CRM Masters Info Tech LLP | Gurugram, India</p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Completed a live project as part of a 2-month software engineering internship.</li>
            <li>Demonstrated strong coding, problem-solving, and teamwork skills while collaborating with senior developers.</li>
            <li>Gained hands-on experience in a professional development environment, contributing to real-world applications.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;