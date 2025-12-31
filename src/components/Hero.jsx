import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Hero = () => {
    // Typing Effect State
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Full Stack Developer", "Mern stack", "Problem Solver", "Creative Coder"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    // Interactive Blob State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        mouseX.set(clientX - centerX);
        mouseY.set(clientY - centerY);
    };

    const blobX = useTransform(mouseX, (x) => x * 0.1); // Move slightly opposite
    const blobY = useTransform(mouseY, (y) => y * 0.1);

    // Smooth physics for the blob
    const springConfig = { damping: 25, stiffness: 150 };
    const animatedBlobX = useSpring(blobX, springConfig);
    const animatedBlobY = useSpring(blobY, springConfig);

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content: Text & Bio */}
                <div className="text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-neon-green font-mono text-lg mb-2 pl-1">
                            Hello, I am
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            Subeesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">CK</span>
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-300 font-light h-[40px] flex items-center">
                            <span>{text}</span>
                            <span className="w-1 h-8 bg-neon-pink ml-1 animate-pulse" />
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
                            My code floats between creativity and logic, crafting digital experiences that feel seamless and lightweight.
                        </p>
                        <p className="leading-relaxed">
                            Specializing in the MERN stack and TypeScript, I turn complex ideas into elegant, scalable solutions.
                            I focus on clean, maintainable code, performance optimization, and efficient problem-solving, backed by a strong foundation in Data Structures and Algorithms.
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
                    <motion.div
                        style={{ x: animatedBlobX, y: animatedBlobY }}
                        className="absolute w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px]"
                    ></motion.div>

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
                            className="absolute -bottom-10 -right-5 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-xs hidden md:block"
                        >
                            <pre className="font-mono text-xs text-gray-300 overflow-x-auto">
                                <code>
                                    <span className="text-neon-pink">const</span> <span className="text-neon-blue">Developer</span> = <span className="text-yellow-300">{"{"}</span>{'\n'}
                                    {'  '}Name: <span className="text-green-400">"Subeesh ck"</span>,{'\n'}
                                    {'  '}Specialisation: <span className="text-neon-purple">"Mern Stack"</span>{'\n'}
                                    {'  '}Education: <span className="text-neon-purple">"BE Mechanical engineering"</span>{'\n'}
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
