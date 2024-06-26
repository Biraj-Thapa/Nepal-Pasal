import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Biraj-Thapa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100027939323673" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/biraj-thapa-3a8142264/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Nepal-Pasal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;