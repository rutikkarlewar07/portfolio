"use client";

import { motion } from "framer-motion";
import Home3d from "../HomepageD/Home3d";

export default function Homepage() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      
      {/* 🔥 Animated Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/home_img/bg_img_3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* 🔥 Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Home3d />
      </div>
    </div>
  );
}