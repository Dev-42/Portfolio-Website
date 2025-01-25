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
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
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
      audioRef.current.currentTime = 0; // Reset audio to the beginning
    }
  }, [isPlaying]);

  const toggleSound = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    // Clean up the audio when the component unmounts
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio
    };
  }, []);

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
      <section
        className="relative flex flex-col items-center justify-center h-screen text-center z-20"
        style={{ marginTop: "25px" }}
      >
        {/* Profile Image with Floating Effect */}
        <motion.img
          src={ProfileImage}
          alt="Profile"
          className="rounded-full w-40 h-40 border-4 shadow-lg"
          style={{
            boxShadow:
              "0 0 30px rgba(0,255,255,0.7), 0 0 60px rgba(0,255,255,0.5)",
          }}
          // animate={{
          //   y: [0, -10, 0],
          //   rotateZ: [-3, 3, -3],
          // }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          onMouseMove={(e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.target.style.transform = `rotateY(${x / 50}deg) rotateX(${
              y / 50
            }deg)`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "rotateY(0deg) rotateX(0deg)";
          }}
        />

        <motion.div
          className="text-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Main Heading with Dynamic Glow */}
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">
            Hello, I'm <span className="text-cyan-400">Dev Bhattacharya</span>
          </h1>

          {/* Typewriter Effect with Gradient Text */}
          <motion.div
            className="mt-4 text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse px-2 md:px-0 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: [
                  "— Innovative Frontend Developer 🚀",
                  "— Backend Engineer Who Delivers 💻",
                  "— Crafting Seamless User Experiences ✨",
                  "— A Full Stack Trailblazer 🔥",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          {/* Tagline with Animated Glow */}
          <motion.p
            className="mt-[1rem] text-lg max-w-2xl mx-auto text-gray-300 tracking-wide leading-relaxed drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            With a passion for building visually stunning, user-focused
            applications, I bring creative ideas to life through cutting-edge
            web technologies.
          </motion.p>
        </motion.div>
        {/* Social Media Links */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/dev42/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn of Dev Bhattacharya"
            whileHover={{
              scale: 1.5,
              rotate: 15,
              transition: { duration: 0.5 },
              boxShadow: "0px 0px 20px rgba(0, 191, 255, 0.8)",
            }}
            whileTap={{ scale: 1.1 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 0, 360],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="text-white"
          >
            <FaLinkedin className="text-3xl hover:text-cyan-400 transition-all" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/koder_dev1221/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram of Dev Bhattacharya"
            whileHover={{
              scale: 1.5,
              rotate: -15,
              transition: { duration: 0.5 },
              boxShadow: "0px 0px 20px rgba(255, 105, 180, 0.8)",
            }}
            whileTap={{ scale: 1.2 }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0],
              color: ["#ffffff", "#ff69b4", "#ff1493"],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="text-white"
          >
            <FaInstagram className="text-3xl hover:text-pink-400 transition-all" />
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://x.com/dev_bhatt_42"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter of Dev Bhattacharya"
            whileHover={{
              scale: 1.5,
              rotate: 10,
              transition: { duration: 0.5 },
              boxShadow: "0px 0px 20px rgba(29, 161, 242, 0.8)",
            }}
            whileTap={{ scale: 1.2 }}
            animate={{
              y: [0, -8, 8, 0],
              scale: [1, 1.1, 1],
              color: ["#ffffff", "#1DA1F2", "#1E90FF"],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="text-white"
          >
            <FaTwitter className="text-3xl hover:text-blue-400 transition-all" />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Dev-42"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github of Dev Bhattacharya"
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.5 },
              boxShadow: "0px 0px 20px rgba(51, 51, 51, 0.8)",
            }}
            whileTap={{ scale: 1.2 }}
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -10, 10, 0],
              rotate: [0, 10, -10, 0],
              color: ["#ffffff", "#333", "#555"],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="text-white"
          >
            <FaGithub className="text-3xl hover:text-gray-400 transition-all" />
          </motion.a>
        </motion.div>

        {/* Animated Button */}
        <div className="flex gap-6 mt-[22px]">
          {/* Explore My Work Button */}
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg shadow-md"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: ["0px 0px 10px #FFD700", "0px 0px 20px #FF00FF"],
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 30px 5px #00FFFF",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            onClick={() => navigate("/projects")}
          >
            Explore My Work
          </motion.button>

          {/* Contact Button */}
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-md"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0px 0px 10px #00FF7F",
                "0px 0px 20px #00FA9A",
                "0px 0px 10px #00FF7F",
              ],
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 30px 5px #00FF7F",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </motion.button>
        </div>
      </section>
      <div className="absolute bottom-[57rem] md:bottom-4 left-4 z-30">
        <motion.img
          src={!isPlaying ? soundon : soundoff}
          alt="sound"
          className="w-12 h-12 cursor-pointer object-contain"
          whileTap={{ rotate: 180 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          onClick={toggleSound}
        />
      </div>
    </div>
  );
};

export default Home;
