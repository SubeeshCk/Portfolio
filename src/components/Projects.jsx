import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CHRONO HEAVEN — Luxury Watch E-Commerce Platform",
    description:
      "CHRONO HEAVEN is a full-stack luxury watch e-commerce platform with a backend-centric architecture. Built using Node.js, Express.js, and MongoDB, it features secure Razorpay payments, Google authentication, and AWS deployment, focusing on performance, scalability, and clean backend workflows.",
    tech: [
      "Javascript",
      "Node.js, Express.js",
      "MongoDB",
      "HTML, CSS",
      "Google OAuth",
      "Razorpay",
      "AWS",
      "Git, GitHub",
    ],
    github: "https://github.com/SubeeshCk/Chrono_heaven_Ecommerce.git",
    live: "#",
    color: "from-neon-purple to-cyan-400",
  },
  {
    title: "HABIT - Routine building application",
    description:
      "HABIT is a premium, dark-mode-first routine tracker built with the MERN stack. It features strict history locking, smart wake up alarms, and a distraction-free interface to help you build consistency.",
    tech: [
      "React",
      "Node.js",
      "Javascript",
      "jwt authentication",
      "Axios",
      "CSS/Taiwind",
      "MongoDB",
      "vercel",
    ],
    github: "https://github.com/SubeeshCk/habit_tracker.git",
    live: "https://habittracker-rose.vercel.app/",
    color: "from-neon-purple to-pink-500",
  },
  {
    title: "MERN-Crud Application",
    description:
      "Crud application using react js in front end with redux,tailwind css where express js in back end with jwt authentication and authorization .",
    tech: [
      "Redux",
      "taiwind css",
      "Express js",
      "MongoDB",
      "JWT Authentication",
    ],
    github: "https://github.com/SubeeshCk/mern-crudApp.git",
    live: "#",
    color: "from-neon-green to-emerald-400",
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative glass-panel rounded-2xl p-8 overflow-hidden h-full min-h-[300px]"
      >
        {/* Gradient Glow Background on Hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.color}`}
          style={{ transform: "translateZ(-50px)" }}
        ></div>

        <div
          className="relative z-10 flex flex-col h-full"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex gap-4">
              <a
                href={project.github}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={project.live}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </div>

          <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

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
