import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1500,
      delay: 200,
      reset: false,
    });

    sr.reveal('.project-card', { interval: 200 });
  }, []);

  const projects = [
    {
      title: 'Building Blocks (AI Course Platform)',
      description: 'An AI-powered learning platform using React/Next.js and Google Gemini API to automate course generation and content delivery.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop',
      fallbackImage: 'https://placehold.co/600x400/1e293b/e0e0e0?text=AI+Learning',
      liveLink: 'https://building-blocks-ai-course-generator-delta.vercel.app/',
      codeLink: 'https://github.com/RahulChuriwal/BuildingBlocks-AI-Course-Generator-platform',
      tags: ['React', 'Next.js', 'Gemini API'],
      tagColorClass: 'bg-indigo-500/20 text-indigo-300',
    },
    {
      title: 'Netflix-GPT (Movie Recommendation)',
      description: 'A movie recommendation site built with React and a custom Python ML model, delivering a Netflix-like user experience.',
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=800&auto=format&fit=crop',
      fallbackImage: 'https://placehold.co/600x400/1e293b/e0e0e0?text=Movie+Night',
      liveLink: '',
      codeLink: 'https://github.com/RahulChuriwal/Netflix-GPT',
      tags: ['React', 'Python', 'ML'],
      tagColorClass: 'bg-fuchsia-500/20 text-fuchsia-300',
    },
    {
      title: 'Loan Approval System',
      description: 'A Machine Learning model to predict loan approval based on applicant data, built with Python and Scikit-learn.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      fallbackImage: 'https://placehold.co/600x400/1e293b/e0e0e0?text=Finance',
      liveLink: 'https://loanapprovalprediction-fappcuwn2p24fyaytjoddng.streamlit.app/',
      codeLink: 'https://github.com/RahulChuriwal/Loan_approval_Prediction',
      tags: ['Python', 'Flask', 'Scikit-learn'],
      tagColorClass: 'bg-teal-500/20 text-teal-300',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 section-title">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-effect rounded-2xl overflow-hidden group project-card flex flex-col">
            <a href={project.liveLink || project.codeLink} target="_blank" rel="noreferrer" className="block overflow-hidden h-48 project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover project-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = project.fallbackImage;
                }}
              />
            </a>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`${project.tagColorClass} text-xs font-semibold px-3 py-1 rounded-full`}>{tag}</span>
                ))}
              </div>
              <div className="flex space-x-4 mt-auto">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="border border-gray-500 text-gray-300 font-semibold px-5 py-2 rounded-full hover:bg-gray-700 hover:border-gray-700 transition-colors text-sm w-full text-center"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;