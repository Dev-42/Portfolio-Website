import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ ...props }) => {
  const { scene, animations } = useGLTF(planeScene); // Load GLTF model
  const ref = useRef(); // Reference for the plane group
  const { actions } = useAnimations(animations, ref); // Access animations

  const [direction, setDirection] = useState(1); // Track flight direction

  // Debugging: Log scene and animations
  useEffect(() => {
    console.log("Scene:", scene);
    console.log("Animations:", animations);
    if (actions && animations.length > 0) {
      actions[Object.keys(actions)[0]]?.play(); // Play the first available animation
    }
  }, [scene, animations, actions]);

  useFrame((state) => {
    if (ref.current) {
      // Smooth flight path
      ref.current.position.x += direction * 0.02;
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;

      // Reverse direction at screen edges
      if (ref.current.position.x > 5 || ref.current.position.x < -5) {
        setDirection(-direction);
        ref.current.rotation.y += Math.PI; // Flip plane
      }
    }
  });

  return (
    <group
      ref={ref}
      scale={[0.03, 0.03, 0.03]}
      position={[0, 1, -5]}
      {...props}
    >
      <primitive object={scene} />
      <pointLight position={[0, 0.1, 0.2]} intensity={1} color="red" />
      <pointLight position={[0, 0.1, -0.2]} intensity={1} color="green" />
    </group>
  );
};

export default Plane;
