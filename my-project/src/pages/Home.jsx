import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import { soundon, soundoff } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import ProfileImage from "../assets/ProfileImage.jpg"; // Replace with your image path
import { motion, useScroll } from "framer-motion";
import Plane from "../Models/Plane";
import Bird from "../Models/Bird";
import Loader from "../components/Loader";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";
import Typewriter from "typewriter-effect";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.6;
  audioRef.current.loop = true;

  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll();

  const particlesInit = async (engine) => {
    await loadFull(engine); // Initializes the tsParticles engine
  };

  const particlesOptions = {
    background: { color: "#000" },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 5 },
        repulse: { distance: 100, duration: 1 },
      },
    },
    particles: {
      number: { value: 100 },
      size: { value: 2 },
      move: { enable: true, speed: 1 },
      opacity: { value: 0.5 },
      twinkle: { particles: { enable: true, frequency: 0.05, opacity: 1 } },
    },
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black text-white">
      {/* Twinkling Stars Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 w-full h-screen z-0"
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center z-20">
        {/* Profile Image with Floating Effect */}
        <motion.img
          src={ProfileImage}
          alt="Profile"
          className="rounded-full w-40 h-40 border-4 border-gray-700 shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-extrabold mt-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Hello, I'm Dev Bhattacharya",
                "A Passionate Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </motion.h2>

        {/* Scroll-based animation for subtext */}
        <motion.p
          className="text-lg mt-4 max-w-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Crafting interactive, user-friendly, and visually stunning web
          applications with a deep passion for innovation.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgb(30,144,255)",
            boxShadow: "0px 0px 15px rgba(30,144,255, 0.5)",
          }}
          transition={{ duration: 0.3 }}
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          Explore My Work
        </motion.button>
      </section>

      {/* 3D Canvas Section with Parallax */}
      <section className="absolute top-0 w-full h-screen z-10">
        <motion.div style={{ scale: scrollYProgress }}>
          <Canvas
            className="w-full h-screen"
            camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
              {/* Lighting */}
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <ambientLight intensity={0.3} />
              <hemisphereLight intensity={0.5} />

              {/* Moving Plane */}
              <Plane
                scale={[0.03, 0.03, 0.03]}
                position={[0, 0, -5]}
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Graceful Bird */}
              <Bird />
            </Suspense>
          </Canvas>
        </motion.div>
      </section>

      {/* Sound Button */}
      <div className="absolute bottom-4 left-4 z-30">
        <motion.img
          src={!isPlaying ? soundon : soundoff}
          alt="sound"
          className="w-12 h-12 cursor-pointer object-contain"
          whileTap={{ rotate: 360 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </div>
  );
};

export default Home;
