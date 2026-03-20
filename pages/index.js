"use client";
import { useRef } from "react";

export default function Home() {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * 25;
    const rotateY = ((x / width) - 0.5) * -25;

    // Card 3D rotate
    cardRef.current.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;

    // 🔥 Shine / lens move
    shineRef.current.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.35),
        transparent 40%
      )
    `;
  };

  const reset = () => {
    cardRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";

    shineRef.current.style.background = "transparent";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 🔥 3D Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          position: "relative",
          width: "260px",
          borderRadius: "20px",
          overflow: "hidden",
          transition: "transform 0.2s ease",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* Image */}
        <img
          src="/home_img/profile.png"
          alt="profile"
          style={{
            width: "100%",
            display: "block",
          }}
        />

        {/* 🔥 Glass Shine Layer */}
        <div
          ref={shineRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            transition: "background 0.2s",
          }}
        />

        {/* 🔥 Glass Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: "blur(4px)",
            background: "rgba(255,255,255,0.05)",
          }}
        />
      </div>
    </div>
  );
}