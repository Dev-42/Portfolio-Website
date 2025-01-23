import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import { soundon, soundoff } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import ProfileImage from "../assets/ProfileImage.jpg"; // Replace with your image path
import { motion } from "framer-motion";
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
      number: { value: 150 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      opacity: { value: 0.6 },
      color: { value: ["#00FFFF", "#FF00FF", "#FFD700", "#FF4500"] },
      twinkle: {
        lines: { enable: true, frequency: 0.1, opacity: 1 },
        particles: { enable: true, frequency: 0.2, opacity: 1 },
      },
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
    <div className="relative w-full overflow-hidden h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black text-white">
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
          animate={{
            opacity: 1,
            color: ["#FFD700", "#FF00FF", "#00FFFF", "#FFD700"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Hello, I'm Dev Bhattacharya",
                "A Passionate Developer",
                "A Software Engineer",
                "Frontend Engineer",
                "Backend Engineer",
                "Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg mt-4 max-w-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Crafting interactive, user-friendly, and visually stunning web
          applications with a deep passion for innovation.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="mt-10 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg shadow-md"
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 30px 5px #00FFFF",
          }}
          animate={{
            boxShadow: ["0px 0px 10px #FFD700", "0px 0px 20px #FF00FF"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
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

      {/* 3D Canvas Section */}
      <section className="absolute top-0 w-full h-screen z-10">
        <Canvas
          className="w-full h-screen"
          camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            {/* Lighting */}
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <ambientLight intensity={0.3} />
            <hemisphereLight intensity={0.5} />

            <motion.group
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            ></motion.group>

            {/* Graceful Bird with Subtle Spin */}
            <motion.group
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <Bird />
            </motion.group>
          </Suspense>
        </Canvas>
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
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </div>
  );
};

export default Home;
