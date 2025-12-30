import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content: Text & Bio */}
                <div className="text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-neon-green font-mono text-lg mb-2 pl-1">
                            &lt;Hello /&gt; I am
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            Subeesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">CK</span>
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-300 font-light">
                            Full Stack Developer
                        </h3>
                    </motion.div>

                    <motion.div
                        className="space-y-4 text-gray-400 max-w-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <p className="leading-relaxed">
                            I’m a self-taught Full Stack Developer with a passion for building minimal, high-end web applications.
                            My code floats between creativity and logic, crafting digital experiences that feel weightless.
                        </p>
                        <p className="leading-relaxed">
                            Specializing in the MERN stack and modern UI libraries, I turn complex problems into elegant, glowing solutions.
                        </p>
                    </motion.div>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 38, 114, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block mt-8 px-8 py-3 bg-transparent border border-neon-pink text-neon-pink rounded-full font-mono text-sm hover:bg-neon-pink hover:text-white transition-all duration-300"
                    >
                        Check My Work
                    </motion.a>
                </div>

                {/* Right Content: Floating Image & Code Element */}
                <div className="relative flex justify-center items-center">
                    {/* Glowing Background Blob */}
                    <div className="absolute w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-slow"></div>

                    {/* Profile Image Container */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-20 w-72 h-72 md:w-96 md:h-96"
                    >
                        {/* Image */}
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            <img src="/profile.jpg" alt="Subeesh CK" className="w-full h-full object-cover" />
                        </div>

                        {/* Floating Code Card Overlay */}
                        <motion.div
                            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-10 -right-5 glass-panel p-6 rounded-2xl border-white/10 max-w-xs hidden md:block"
                        >
                            <pre className="font-mono text-xs text-gray-300 overflow-x-auto">
                                <code>
                                    <span className="text-neon-pink">const</span> <span className="text-neon-blue">Developer</span> = <span className="text-yellow-300">{"{"}</span>{'\n'}
                                    {'  '}name: <span className="text-green-300">"Subeesh"</span>,{'\n'}
                                    {'  '}type: <span className="text-neon-purple">"Full Stack"</span>{'\n'}
                                    <span className="text-yellow-300">{"}"}</span>;
                                </code>
                            </pre>
                        </motion.div>

                        {/* Decorative Floating Icon */}
                        <motion.div
                            className="absolute -left-4 top-10 text-neon-purple drop-shadow-[0_0_10px_rgba(174,129,255,0.5)]"
                            animate={{ rotate: 360, y: [0, -10, 0] }}
                            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                        >
                            <FaCode size={50} />
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
