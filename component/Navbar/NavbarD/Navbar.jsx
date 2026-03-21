"use client";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,

        background: "rgba(2, 6, 23, 0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* 🔥 CENTER CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto", // 👈 SAME LEFT & RIGHT SPACE 🔥
          width: "100%",

          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* 🔹 LOGO */}
        <img
          src="/home_img/logo.webp"
          alt="logo"
          style={{
            height: "150px",
            width: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        {/* 🔹 MENU */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            color: "white",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          <span style={{ cursor: "pointer" }}>About</span>
          <span style={{ cursor: "pointer" }}>Services</span>
          <span style={{ cursor: "pointer" }}>Projects</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
        </div>
      </div>
    </div>
  );
}