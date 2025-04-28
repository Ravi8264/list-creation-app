import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500;
        this.px = this.x;
        this.py = this.y;
        this.speed = Math.random() * 0.5 + 0.5;
        // Light blue color scheme
        this.color = `hsl(${Math.random() * 30 + 180}, 70%, 80%)`;
      }

      update() {
        this.px = this.x;
        this.py = this.y;
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = 1500;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.px = this.x;
          this.py = this.y;
        }
      }

      draw() {
        const scale = 1500 / (1500 - this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const px2d = (this.px - canvas.width / 2) * scale + canvas.width / 2;
        const py2d = (this.py - canvas.height / 2) * scale + canvas.height / 2;

        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.moveTo(px2d, py2d);
        ctx.lineTo(x2d, y2d);
        ctx.stroke();
      }
    }

    // Create particles
    const particles = Array.from({ length: 100 }, () => new Particle());

    // Animation loop
    const animate = () => {
      // Very light background for better visibility
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #b2ebf2, #80deea)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      }}
    />
  );
};

export default AnimatedBackground;
