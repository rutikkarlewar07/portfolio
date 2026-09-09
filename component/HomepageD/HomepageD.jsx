"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Homepage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f9fc",
        paddingTop: "72px",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          minHeight: "calc(100vh - 72px)",
          padding: "70px 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "70px",
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            style={{
              margin: "0 0 18px",
              color: "#0057d9",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            SERVING BUSINESSES IN PUNE & ACROSS INDIA
          </p>

          <h1
            style={{
              margin: "0 0 18px",
              color: "#0b1f3a",
              fontSize: "46px",
              lineHeight: "1.08",
              fontWeight: 700,
              letterSpacing: "-1.5px",
            }}
          >
            Website & Software
            <br />
            Solutions for Growing
            <br />
            Businesses
          </h1>

          <p
            style={{
              maxWidth: "500px",
              margin: "0 0 28px",
              color: "#4b6483",
              fontSize: "16px",
              lineHeight: "1.55",
            }}
          >
            InfoCore Solutions is a Pune-based technology company providing
            professional website development, web application development,
            custom software and digital solutions for businesses.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <a
              href="/contact"
              style={{
                display: "inline-block",
                background: "#0057d9",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 20px",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "3px",
              }}
            >
              Get a Free Consultation
            </a>

            <a
              href="/services"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#334155",
                textDecoration: "none",
                padding: "11px 20px",
                fontSize: "13px",
                fontWeight: 500,
                border: "1px solid #aeb8c8",
                borderRadius: "3px",
              }}
            >
              View Our Services
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            padding: "46px 26px",
            minHeight: "405px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/website-img/home-page.webp"
            alt="Website and software solutions"
            width={600}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            priority
          />
        </motion.div>
      </section>

      {/* Business Value Bar */}
      <section
        style={{
          borderTop: "1px solid #d9e0ea",
          borderBottom: "1px solid #d9e0ea",
          background: "#eef3fb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            minHeight: "66px",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Item 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              color: "#46566f",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                color: "#0057d9",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            Business-focused solutions
          </div>

          {/* Item 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              color: "#46566f",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                color: "#0057d9",
                fontSize: "16px",
              }}
            >
              ▣
            </span>
            Responsive & scalable technology
          </div>

          {/* Item 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              color: "#46566f",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                color: "#0057d9",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              ‹›
            </span>
            Custom development
          </div>

          {/* Item 4 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              color: "#46566f",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                color: "#0057d9",
                fontSize: "16px",
              }}
            >
              ♧
            </span>
            Support & maintenance
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 32px",
        }}
      >
        <h2
          style={{
            margin: 0,
            textAlign: "center",
            color: "#0b1f3a",
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          Comprehensive IT Services
        </h2>
      </section>
    </main>
  );
}
