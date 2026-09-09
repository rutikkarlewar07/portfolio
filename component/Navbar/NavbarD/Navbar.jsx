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
            whiteSpace: "nowrap",
          }}
        >
          InfoCore Solutions
        </Link>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {/* Services */}
          <div style={dropdownWrapperStyle}>
            <Link href="/services" style={navLinkStyle}>
              Services <span style={arrowStyle}>⌄</span>
            </Link>

            <div style={dropdownStyle}>
              <Link
                href="/services/website-development"
                style={dropdownLinkStyle}
              >
                Website Development
              </Link>

              <Link href="/services/app-development" style={dropdownLinkStyle}>
                App Development
              </Link>

              <Link
                href="/services/software-development"
                style={dropdownLinkStyle}
              >
                Custom Software
              </Link>

              <Link href="/services/seo" style={dropdownLinkStyle}>
                SEO
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div style={dropdownWrapperStyle}>
            <Link href="/tools" style={navLinkStyle}>
              Tools <span style={arrowStyle}>⌄</span>
            </Link>

            <div style={dropdownStyle}>
              <Link href="/tools/email" style={dropdownLinkStyle}>
                Email Tools
              </Link>

              <Link href="/tools/whatsapp" style={dropdownLinkStyle}>
                WhatsApp Tools
              </Link>

              <Link href="/tools/messaging" style={dropdownLinkStyle}>
                Messaging Tools
              </Link>

              <Link href="/tools/free" style={dropdownLinkStyle}>
                Free Tools
              </Link>

              <Link href="/tools/paid" style={dropdownLinkStyle}>
                Premium Tools
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div style={dropdownWrapperStyle}>
            <Link href="/solutions" style={navLinkStyle}>
              Solutions <span style={arrowStyle}>⌄</span>
            </Link>

            <div style={dropdownStyle}>
              <Link
                href="/solutions/business-automation"
                style={dropdownLinkStyle}
              >
                Business Automation
              </Link>

              <Link
                href="/solutions/digital-transformation"
                style={dropdownLinkStyle}
              >
                Digital Transformation
              </Link>

              <Link
                href="/solutions/custom-solutions"
                style={dropdownLinkStyle}
              >
                Custom Solutions
              </Link>
            </div>
          </div>

          <Link href="/industries" style={navLinkStyle}>
            Industries
          </Link>

          <Link href="/about-us" style={navLinkStyle}>
            About Us
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
            padding: "14px 26px",
            borderRadius: "4px",
            fontSize: "15px",
            fontWeight: 600,
            whiteSpace: "nowrap",
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
  whiteSpace: "nowrap",
};

const arrowStyle = {
  fontSize: "17px",
  marginLeft: "3px",
  color: "#64748b",
};

const dropdownWrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const dropdownStyle = {
  position: "absolute",
  top: "38px",
  left: "-15px",
  minWidth: "220px",
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  padding: "8px 0",
};

const dropdownLinkStyle = {
  display: "block",
  padding: "10px 16px",
  color: "#334155",
  textDecoration: "none",
  fontSize: "14px",
};
