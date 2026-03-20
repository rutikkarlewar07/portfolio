"use client";
import { useRef } from "react";

export default function Home() {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imgRef.current.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * 20;
    const rotateY = ((x / width) - 0.5) * -20;

    imgRef.current.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const resetTransform = () => {
    imgRef.current.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* 🔥 3D Image */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <img
          ref={imgRef}
          src="/home_img/profile.png"
          alt="profile"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
          style={{
            width: "220px",
            borderRadius: "20px",
            transition: "transform 0.2s ease",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          padding: "40px",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Hi, I'm Rutik 👋
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#cbd5f5",
            marginBottom: "25px",
          }}
        >
          Full Stack Developer specializing in Next.js & Laravel.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <button
            style={{
              padding: "10px 22px",
              backgroundColor: "#3b82f6",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Projects
          </button>

          <button
            style={{
              padding: "10px 22px",
              border: "1px solid #cbd5f5",
              background: "transparent",
              color: "#cbd5f5",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
        </div>
      </div>

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#94a3b8" }}>
        © 2026 Rutik Portfolio
      </p>
    </div>
  );
}