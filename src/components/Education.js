import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Education() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1500,
            delay: 200,
            reset: false,
        });

        sr.reveal('.education-card', { interval: 150 });
    }, []);

    return (
        <section id="education" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12 section-title">Education</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* KIIT */}
                <div className="glass-effect p-6 rounded-2xl education-card flex items-start gap-4 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                    {/* graduation cap icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                        <path d="M12 2l10 6-10 6L2 8l10-6z" />
                        <path d="M2 14v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4" />
                    </svg>
                    <div>
                        <h3 className="font-semibold text-white">Kalinga Institute of Industrial Technology (KIIT)</h3>
                        <p className="text-sm text-gray-400">Bhubaneswar, Odisha</p>
                        <p className="text-sm text-gray-400">Bachelor of Technology (B.Tech), Computer Science & Engineering</p>
                        <p className="text-sm text-gray-400">2022 – Present | CGPA: 8.4</p>
                    </div>
                </div>

                {/* Don Bosco */}
                <div className="glass-effect p-6 rounded-2xl education-card flex items-start gap-4 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                    {/* school icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                        <path d="M3 11l9-6 9 6" />
                        <path d="M3 11v7a2 2 0 0 0 2 2h2v-6h10v6h2a2 2 0 0 0 2-2v-7" />
                    </svg>
                    <div>
                        <h3 className="font-semibold text-white">Don Bosco School, Liluah</h3>
                        <p className="text-sm text-gray-400">Howrah, West Bengal</p>
                        <p className="text-sm text-gray-400">Higher Secondary (Computer Science) — ISC Board</p>
                        <p className="text-sm text-gray-400">Apr 2020 – Mar 2022 | Grade: 92.4/100</p>
                    </div>
                </div>

                {/* M C Kejriwal */}
                <div className="glass-effect p-6 rounded-2xl education-card flex items-start gap-4 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                    {/* certificate icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                        <rect x="3" y="3" width="18" height="14" rx="2" ry="2" />
                        <path d="M7 21v-4l5-3 5 3v4" />
                    </svg>
                    <div>
                        <h3 className="font-semibold text-white">M C Kejriwal Vidyapeeth</h3>
                        <p className="text-sm text-gray-400">Liluah, Howrah, West Bengal</p>
                        <p className="text-sm text-gray-400">Secondary School (Matriculation) — ICSE Board</p>
                        <p className="text-sm text-gray-400">Apr 2008 – Mar 2020 | Grade: 93.6/100</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;
