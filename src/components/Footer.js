import React from 'react';

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rahul Churiwal. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;