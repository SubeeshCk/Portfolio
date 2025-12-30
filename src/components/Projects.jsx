import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "CHRONO HEAVEN - E-commerce platform",
        description: "A full-stack e-commerce platform for luxury watches with payment using razopay.",
        tech: ["Javascript", "Node.js", "MongoDB", "CSS" ,],
        github: "https://github.com/SubeeshCk/Chrono_heaven_Ecommerce.git",
        live: "#",
        color: "from-neon-purple to-cyan-400"
    },
    {
        title: "HABIT - Habit tracking app",
        description: "Habit tracker application for creating routines and make it a habit with daily report notifications and other feature,Build using AI.",
        tech: ["React", "Node.js", "Javascript", "jwt authentication" ,"Axios" ,"CSS/Taiwind" ,"MongoDB"],
        github: "https://github.com/SubeeshCk/habit_tracker.git",
        live: "https://habittracker-rose.vercel.app/",
        color: "from-neon-purple to-pink-500"
    },
    {
        title: "DevDashboard",
        description: "Cloud infrastructure management dashboard for monitoring AWS services.",
        tech: ["Next.js", "AWS SDK", "Chart.js", "PostgreSQL"],
        github: "#",
        live: "#",
        color: "from-neon-green to-emerald-400"
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative glass-panel rounded-2xl p-8 overflow-hidden"
    >
        {/* Gradient Glow Background on Hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.color}`}></div>

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                </h3>
                <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
                        <FaExternalLinkAlt size={18} />
                    </a>
                </div>
            </div>

            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-gray-300">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 relative">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
                >
                    Selected <span className="text-neon-purple">Works</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
