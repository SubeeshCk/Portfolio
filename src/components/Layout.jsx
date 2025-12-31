import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((window.innerWidth * window.innerHeight) / 4000); // Responsive count
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    vx: (Math.random() - 0.5) * 0.2, // Slow horizontal movement
                    vy: (Math.random() - 0.5) * 0.2, // Slow vertical movement
                    alpha: Math.random(),
                    targetAlpha: Math.random(),
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background gradient just in case, though handled by CSS
            // ctx.fillStyle = 'transparent';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                // Update transparency
                if (Math.abs(star.alpha - star.targetAlpha) < 0.01) {
                    star.targetAlpha = Math.random(); // Pick new target
                } else {
                    star.alpha += (star.targetAlpha - star.alpha) * 0.02; // Smooth transition
                }

                // Move star
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.5})`; // White stars with varying opacity
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen text-white relative overflow-hidden bg-antigravity-dark cursor-none">
            <CustomCursor />

            {/* Dynamic Starfield Background */}
            <Starfield />

            {/* Gradient Overlays for Depth */}
            <div className="fixed inset-0 z-0 pointer-events-none">
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
