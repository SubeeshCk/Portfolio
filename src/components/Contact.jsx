import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCopy, FaCheck, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [copied, setCopied] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:subeeshck.dev@gmail.com?subject=${subject}&body=${body}`;
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("subeeshck.dev@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 flex flex-col items-center justify-center relative">
            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto glass-panel p-12 rounded-3xl border border-white/5 overflow-hidden"
                >
                    <motion.h2 layout className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Want to <span className="text-neon-green">connect?</span>
                    </motion.h2>

                    <AnimatePresence mode="wait">
                        {!showForm ? (
                            <motion.div
                                key="cta"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-8"
                            >
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Whether you have a project in mind or just want to chat about the latest tech, my inbox is always open.
                                </p>
                                <motion.button
                                    onClick={() => setShowForm(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full shadow-[0_0_20px_rgba(102,217,239,0.5)] hover:shadow-[0_0_40px_rgba(102,217,239,0.7)] transition-shadow duration-300"
                                >
                                    Say Hello
                                </motion.button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-left w-full max-w-md mx-auto"
                            >
                                <p className="text-center text-gray-400 mb-8">
                                    Send me a message, direct call, or copy my email below.
                                </p>

                                {/* Contact Options Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <motion.a
                                        href="https://wa.me/919995282040"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center justify-center bg-[#25D366]/10 border border-[#25D366]/20 p-4 rounded-xl hover:bg-[#25D366]/20 transition-colors group cursor-pointer"
                                    >
                                        <FaWhatsapp size={24} className="text-[#25D366] mb-2" />
                                        <span className="text-white text-sm font-medium">WhatsApp</span>
                                    </motion.a>

                                    <motion.a
                                        href="tel:+919995282040"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center justify-center bg-neon-blue/10 border border-neon-blue/20 p-4 rounded-xl hover:bg-neon-blue/20 transition-colors group cursor-pointer"
                                    >
                                        <FaPhone size={20} className="text-neon-blue mb-2" />
                                        <span className="text-white text-sm font-medium">Call Me</span>
                                    </motion.a>
                                </div>

                                {/* Direct Email Copy */}
                                <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg mb-8 border border-white/10">
                                    <span className="text-gray-300 font-mono text-sm truncate mr-4">subeeshck.dev@gmail.com</span>
                                    <button
                                        onClick={copyEmail}
                                        className="text-neon-blue hover:text-white transition-colors"
                                        title="Copy Email"
                                    >
                                        {copied ? <FaCheck /> : <FaCopy />}
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            placeholder="What's on your mind?"
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="flex gap-4 pt-2">
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1 bg-neon-pink text-white font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(249,38,114,0.4)] hover:shadow-[0_0_25px_rgba(249,38,114,0.6)] transition-all flex items-center justify-center gap-2"
                                        >
                                            <FaPaperPlane size={14} /> Send
                                        </motion.button>
                                        <motion.button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="px-6 py-3 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            Cancel
                                        </motion.button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
