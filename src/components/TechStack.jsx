import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'; // Added Docker/Git for filler if needed
import { SiMongodb, SiExpress, SiTypescript, SiPostgresql, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#000000" }, // White/Black depending on bg
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
];

const MagneticIcon = ({ children, color }) => {
    const ref = useRef(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Repulse effect: move AWAY from mouse
        // If mouse is close (e.g. within 100px), push icon in opposite direction
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDist = 150;

        if (distance < maxDist) {
            const force = (maxDist - distance) / maxDist; // 0 to 1
            const moveX = -(distanceX * force * 0.5); // Push away
            const moveY = -(distanceY * force * 0.5);
            position.x.set(moveX);
            position.y.set(moveY);
        } else {
            position.x.set(0);
            position.y.set(0);
        }
    };

    const handleMouseLeave = () => {
        position.x.set(0);
        position.y.set(0);
    };

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const animatedX = useSpring(position.x, springConfig);
    const animatedY = useSpring(position.y, springConfig);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: animatedX, y: animatedY, color: color }}
            className="relative z-10 p-6 rounded-2xl glass-panel text-5xl flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-white/10"
            whileHover={{ scale: 1.1 }}
        >
            {children}
        </motion.div>
    );
};

const TechStack = () => {
    return (
        <section id="skills" className="min-h-screen py-20 flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Tech <span className="text-neon-pink">Arsenal</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    My clean code is powered by a robust stack of modern technologies.
                </p>
            </motion.div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <MagneticIcon color={skill.color}>
                                {skill.icon}
                            </MagneticIcon>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
