"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "72px",
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          height: "100%",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#0b1f3a",
            fontSize: "26px",
            fontWeight: 700,
          }}
        >
          InfoCore Solutions
        </Link>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <Link href="/" style={navLinkStyle}>
            Home
          </Link>

          <Link href="/services" style={navLinkStyle}>
            Services
          </Link>

          <Link href="/about-us" style={navLinkStyle}>
            About Us
          </Link>

          <Link href="/industries" style={navLinkStyle}>
            Industries
          </Link>

          <Link href="/contact" style={navLinkStyle}>
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          style={{
            background: "#0057d9",
            color: "#fff",
            textDecoration: "none",
            padding: "14px 28px",
            borderRadius: "4px",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          Get a Free Consultation
        </Link>
      </div>
    </header>
  );
}

const navLinkStyle = {
  color: "#334155",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 500,
};
