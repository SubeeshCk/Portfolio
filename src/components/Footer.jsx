import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-400 relative z-10 glass-panel border-l-0 border-r-0 border-b-0 rounded-none bg-black/40">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
                <div className="flex gap-8">
                    <a href="https://github.com/SubeeshCk" className="transform hover:scale-110 transition-transform duration-300 hover:text-neon-blue drop-shadow-[0_0_8px_rgba(102,217,239,0.8)]">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/subeesh-ck-7a3a86211" className="transform hover:scale-110 transition-transform duration-300 hover:text-neon-pink drop-shadow-[0_0_8px_rgba(249,38,114,0.8)]">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="#" className="transform hover:scale-110 transition-transform duration-300 hover:text-neon-green drop-shadow-[0_0_8px_rgba(166,226,46,0.8)]">
                        <FaTwitter size={24} />
                    </a>
                </div>
                <p className="text-sm font-light tracking-wide">
                    © {new Date().getFullYear()} Subeesh CK. Built with <span className="text-neon-pink">♥</span> & React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
