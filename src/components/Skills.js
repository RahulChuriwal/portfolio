import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Skills() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1500,
      delay: 200,
      reset: false,
    });

    sr.reveal('.skill-card', { interval: 100 });
  }, []);

  const skills = [
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    {
      name: 'Tailwind CSS',
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
    }
    ,
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 section-title">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card glass-effect p-6 rounded-2xl text-center flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2">
            <img
              src={skill.icon}
              className="h-16 w-16 skill-icon transition-transform duration-300"
              alt={`${skill.name} Icon`}
            />
            <p className="mt-4 font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;