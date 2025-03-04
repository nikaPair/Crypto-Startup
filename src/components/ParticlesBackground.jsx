import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const ParticlesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`;

const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ParticlesBackground = () => {
    const [canvas, setCanvas] = useState(null);

    const initParticles = useCallback(() => {
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const particles = [];
        const particleCount = 50;

        // Установка размеров canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Создание частиц
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `rgba(${Math.floor(Math.random() * 80) + 100}, ${
                    Math.floor(Math.random() * 80) + 100
                }, ${Math.floor(Math.random() * 155) + 100}, ${
                    Math.random() * 0.5 + 0.1
                })`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;

                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Создание начальных частиц
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Соединение частиц линиями
        function connectParticles() {
            const maxDistance = 150;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = 1 - distance / maxDistance;
                        ctx.strokeStyle = `rgba(120, 120, 255, ${
                            opacity * 0.2
                        })`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Анимация
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            connectParticles();
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [canvas]);

    useEffect(() => {
        if (canvas) {
            initParticles();
        }
    }, [canvas, initParticles]);

    return (
        <ParticlesContainer>
            <Canvas ref={setCanvas} />
        </ParticlesContainer>
    );
};

export default ParticlesBackground;
