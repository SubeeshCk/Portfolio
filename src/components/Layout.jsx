import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen text-white relative overflow-hidden bg-antigravity-dark">
            {/* Background Particles / Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
                <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent blur-3xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent blur-3xl"></div>
            </div>

            {/* Main Content */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 font-sans"
            >
                {children}
            </motion.main>
        </div>
    );
};

export default Layout;
