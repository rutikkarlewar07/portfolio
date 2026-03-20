export default function Home() {
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
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Card Container */}
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
        {/* Heading */}
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Hi, I'm Rutik 👋
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "16px",
            color: "#cbd5f5",
            marginBottom: "25px",
            lineHeight: "1.5",
          }}
        >
          Full Stack Developer specializing in Next.js & Laravel.  
          I build fast, scalable and SEO-friendly web applications.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "10px 22px",
              backgroundColor: "#3b82f6",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            View Projects
          </button>

          <button
            style={{
              padding: "10px 22px",
              backgroundColor: "transparent",
              border: "1px solid #cbd5f5",
              borderRadius: "6px",
              color: "#cbd5f5",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Footer small text */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "12px",
          color: "#94a3b8",
        }}
      >
        © 2026 Rutik Portfolio
      </p>
    </div>
  );
}