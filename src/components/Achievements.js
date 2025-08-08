import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Achievements() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1500,
      delay: 200,
      reset: false,
    });

    sr.reveal('.achievement-card', { interval: 150 });
  }, []);

  return (
    <section id="achievements" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 section-title">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* LeetCode Achievement */}
        <a
          href="https://leetcode.com/u/rahulchuriwal7/"
          target="_blank"
          rel="noreferrer"
          className="block glass-effect p-6 rounded-2xl achievement-card"
        >
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
              <path d="M10 20.5c.5-2.5.8-5 1-7.5.2-2.5.3-5 .4-7.5-1.5 2-3 4-4.5 6-1.5 2-3 4-4.5 6"/>
              <path d="M14 20.5c-.5-2.5-.8-5-1-7.5-.2-2.5-.3-5-.4-7.5L14 9.5l1.5 2 1.5 2 1.5 2 1.5 2-7.5 3z"/>
            </svg>
            <div>
              <h3 className="font-semibold text-white">550+ Problems Solved</h3>
              <p className="text-sm text-gray-400">LeetCode</p>
            </div>
          </div>
        </a>

        {/* Intern Achievement */}
        <div className="glass-effect p-6 rounded-2xl achievement-card flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <div>
            <h3 className="font-semibold text-white">Software Engineering Intern</h3>
            <p className="text-sm text-gray-400">CRM Masters Info Tech LLP</p>
          </div>
        </div>

        {/* Projects Achievement */}
        <div className="glass-effect p-6 rounded-2xl achievement-card flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <div>
            <h3 className="font-semibold text-white">5+ Projects Completed</h3>
            <p className="text-sm text-gray-400">Full-Stack & Machine Learning</p>
          </div>
        </div>

        {/* HackerRank Achievement */}
        <a
          href="https://www.hackerrank.com/certificates/c68ff913eb8d"
          target="_blank"
          rel="noreferrer"
          className="block glass-effect p-6 rounded-2xl achievement-card"
        >
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
              <path d="M12 .5l3.09 6.26 6.91 1.01-5 4.87L18.18 22 12 18.54 5.82 22 7 12.64l-5-4.87 6.91-1.01L12 .5z"/>
            </svg>
            <div>
              <h3 className="font-semibold text-white">5⭐ in Java & SQL</h3>
              <p className="text-sm text-gray-400">HackerRank</p>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Achievements;
