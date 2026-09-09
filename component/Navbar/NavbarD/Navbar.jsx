"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function HoverLink({ href, style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style,
        color: hover ? "#0057d9" : style.color,
      }}
    >
      {children}
    </Link>
  );
}

function HoverDropdownButton({ isOpen, onClick, children }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...dropdownButtonStyle,
        color: hover || isOpen ? "#0057d9" : dropdownButtonStyle.color,
      }}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((current) => (current === dropdown ? null : dropdown));
  };

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
        ref={navRef}
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
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src="/website-img/logo.webp"
            alt="Logo"
            style={{
              height: "48px",
              width: "auto",
              maxWidth: "150px",
              display: "block",
              objectFit: "contain",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#0f172a",
              whiteSpace: "nowrap",
            }}
          >
            InfoCore Solutions
          </span>
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
            <HoverDropdownButton
              isOpen={openDropdown === "services"}
              onClick={() => toggleDropdown("services")}
            >
              Services
              <span
                style={{
                  ...arrowStyle,
                  transform:
                    openDropdown === "services"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              >
                ⌄
              </span>
            </HoverDropdownButton>

            {openDropdown === "services" && (
              <div style={dropdownStyle}>
                <HoverLink
                  href="/services/website-development"
                  style={dropdownLinkStyle}
                >
                  Website Development
                </HoverLink>

                <HoverLink
                  href="/services/app-development"
                  style={dropdownLinkStyle}
                >
                  App Development
                </HoverLink>

                <HoverLink
                  href="/services/software-development"
                  style={dropdownLinkStyle}
                >
                  Custom Software
                </HoverLink>

                <HoverLink href="/services/seo" style={dropdownLinkStyle}>
                  SEO
                </HoverLink>
              </div>
            )}
          </div>

          {/* Tools */}
          <div style={dropdownWrapperStyle}>
            <HoverDropdownButton
              isOpen={openDropdown === "tools"}
              onClick={() => toggleDropdown("tools")}
            >
              Tools
              <span
                style={{
                  ...arrowStyle,
                  transform:
                    openDropdown === "tools"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              >
                ⌄
              </span>
            </HoverDropdownButton>

            {openDropdown === "tools" && (
              <div style={dropdownStyle}>
                <HoverLink href="/tools/email" style={dropdownLinkStyle}>
                  Email Tools
                </HoverLink>

                <HoverLink href="/tools/whatsapp" style={dropdownLinkStyle}>
                  WhatsApp Tools
                </HoverLink>

                <HoverLink href="/tools/messaging" style={dropdownLinkStyle}>
                  Messaging Tools
                </HoverLink>

                <HoverLink href="/tools/free" style={dropdownLinkStyle}>
                  Free Tools
                </HoverLink>

                <HoverLink href="/tools/paid" style={dropdownLinkStyle}>
                  Premium Tools
                </HoverLink>
              </div>
            )}
          </div>

          {/* Solutions */}
          <div style={dropdownWrapperStyle}>
            <HoverDropdownButton
              isOpen={openDropdown === "solutions"}
              onClick={() => toggleDropdown("solutions")}
            >
              Solutions
              <span
                style={{
                  ...arrowStyle,
                  transform:
                    openDropdown === "solutions"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              >
                ⌄
              </span>
            </HoverDropdownButton>

            {openDropdown === "solutions" && (
              <div style={dropdownStyle}>
                <HoverLink
                  href="/solutions/business-automation"
                  style={dropdownLinkStyle}
                >
                  Business Automation
                </HoverLink>

                <HoverLink
                  href="/solutions/digital-transformation"
                  style={dropdownLinkStyle}
                >
                  Digital Transformation
                </HoverLink>

                <HoverLink
                  href="/solutions/custom-solutions"
                  style={dropdownLinkStyle}
                >
                  Custom Solutions
                </HoverLink>
              </div>
            )}
          </div>

          <HoverLink href="/industries" style={navLinkStyle}>
            Industries
          </HoverLink>

          <HoverLink href="/about-us" style={navLinkStyle}>
            About Us
          </HoverLink>

          <HoverLink href="/contact" style={navLinkStyle}>
            Contact
          </HoverLink>
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
  transition: "color 0.2s ease",
};

const dropdownButtonStyle = {
  border: "none",
  background: "transparent",
  color: "#334155",
  fontSize: "15px",
  fontWeight: 500,
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  transition: "color 0.2s ease",
};

const arrowStyle = {
  fontSize: "17px",
  marginLeft: "5px",
  color: "#64748b",
  transition: "transform 0.2s ease",
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
  minWidth: "230px",
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  padding: "8px 0",
};

const dropdownLinkStyle = {
  display: "block",
  padding: "11px 16px",
  color: "#334155",
  textDecoration: "none",
  fontSize: "14px",
  whiteSpace: "nowrap",
  transition: "color 0.2s ease",
};
