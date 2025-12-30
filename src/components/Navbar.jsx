import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const links = ['About', 'Skills', 'Projects', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <div className="glass-panel px-8 py-4 rounded-full flex items-center gap-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-opacity-60 backdrop-blur-md border border-white/10">
                {links.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                    >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all group-hover:w-full box-shadow-[0_0_10px_#f92672]"></span>
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
