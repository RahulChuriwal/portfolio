import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1500,
      delay: 200,
      reset: false,
    });
    sr.reveal('#contact', { interval: 200 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      subject,
      message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_5rd9q4g',   // Replace with EmailJS Service ID
        'template_3mebjpo',  // Replace with EmailJS Template ID
        templateParams,
        'XlrJtBaYn7gpQXV6i'    // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setName('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText('Copied!');
    setTimeout(() => setCopiedText(''), 300);
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY + 20 });
  };

  return (
    <section id="contact" className="py-20" onMouseMove={handleMouseMove}>
      {copiedText && (
        <div
          className="fixed z-50 text-sm bg-black/80 text-white px-3 py-1 rounded-lg pointer-events-none"
          style={{ top: cursorPos.y, left: cursorPos.x, transform: 'translate(-50%, 0)' }}
        >
          {copiedText}
        </div>
      )}

      <h2 className="text-4xl font-bold text-center mb-12 section-title">Get In Touch</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Contact Details</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleCopy('rahulchuriwal7@gmail.com')}
                className="flex items-center gap-4 group w-full text-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="text-indigo-400 group-hover:text-fuchsia-400 transition-colors">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-gray-300 group-hover:text-white transition-colors">rahulchuriwal7@gmail.com</span>
              </button>

              <button
                onClick={() => handleCopy('22052659@kiit.ac.in')}
                className="flex items-center gap-4 group w-full text-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="text-indigo-400 group-hover:text-fuchsia-400 transition-colors">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-gray-300 group-hover:text-white transition-colors">22052659@kiit.ac.in</span>
              </button>

              <button
                onClick={() => handleCopy('+91 9163885541')}
                className="flex items-center gap-4 group w-full text-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 
                           19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 
                           0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 
                           0 0 1-.45 2.11L8.09 9.91a16 16 
                           0 0 0 6 6l1.27-1.27a2 2 
                           0 0 1 2.11-.45 12.84 12.84 
                           0 0 0 2.81.7A2 2 
                           0 0 1 22 16.92z"/>
                </svg>
                <span className="text-gray-300">+91 9163885541</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <a
              href="https://www.linkedin.com/in/rahul-churiwal-a54980276"
              target="_blank"
              rel="noreferrer"
              className="inline-block btn-gradient text-white font-bold px-8 py-3 rounded-full text-lg w-full text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div>
          <form className="glass-effect p-8 rounded-2xl space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[150px] resize-y" // <-- fixed min height
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="btn-gradient text-white font-bold px-6 py-3 rounded-full text-lg w-full">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
