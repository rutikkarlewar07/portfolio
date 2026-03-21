"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/uploads_3d_pc.glb");
  const { camera } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    // 🔥 Perfect framing (no cut)
    camera.position.copy(center);
    camera.position.z += size * 2.2; // thoda door (cut avoid)
    camera.position.y += size * 0.6;
    camera.position.x += size * 0.3;

    camera.lookAt(center);
  }, [scene, camera]);

  return (
    <primitive
      object={scene}
      scale={1.2} // 🔥 balance (not too big)
      position={[0, -1, 0]}
    />
  );
}

export default function HomepageD() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 🔥 Full responsive canvas */}
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas camera={{ position: [10, 5, 12], fov: 50 }}>
          {/* Soft global light */}
<ambientLight intensity={0.4} />

{/* 🌞 Main Sun Light */}
<directionalLight
  position={[10, 10, 5]} // upar se angle
  intensity={3}
  color={"#fff5cc"} // halka warm sunlight color
  castShadow
/>

{/* 🔥 Extra glow / sunlight reflection */}
<pointLight
  position={[-5, 5, -5]}
  intensity={1.5}
  color={"#ffe8a3"}
/>

          <Model />

          <OrbitControls
            enableZoom={false}
            minDistance={6}
            maxDistance={18}
          />

          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}