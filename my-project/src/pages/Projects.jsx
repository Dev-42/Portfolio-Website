import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants/index";
import { arrow } from "../assets/icons";
import DarkModeToggle from "../components/ToggleButton";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa"; // GitHub Icon
import { FiGlobe } from "react-icons/fi"; // Globe Icon for Live Link
import { Helmet } from "react-helmet-async";
import ProfileImage from "../assets/ProfileImage.jpg";

const Projects = () => {
  const text = `Throughout my journey as a web developer, I've embarked on numerous projects,but these are the ones I hold closest to my heart. As a passionate developer specializing in the MERN stack, I love building projects and continuously seek to improve them. If you come across something that piques your interest, feel free to explore the codebase and share your thoughts or ideas.Your feedback is highly valued!`;
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const word = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate effect based on mouse movement
  const rotateX = useTransform(y, [-1, 1], [-10, 10]); // Tilt on Y-axis
  const rotateY = useTransform(x, [-1, 1], [10, -10]); // Tilt on X-axis
  // Capture container dimensions
  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height } = dimensions;

    // Normalize values to range (-1 to 1)
    const xValue = (clientX / width) * 2 - 1;
    const yValue = (clientY / height) * 2 - 1;

    x.set(xValue);
    y.set(yValue);
  };
  return (
    <>
      <Helmet>
        <title>
          Dev Bhattacharya | Innovative Web Projects & Full-Stack Solutions
        </title>
        <meta
          name="description"
          content="Explore cutting-edge web projects by Dev Bhattacharya, a full-stack developer specializing in frontend and backend technologies. Check out my innovative solutions!"
        />
        <meta
          name="keywords"
          content="Dev Bhattacharya, Web Developer, Full Stack Projects, Frontend Engineer, Backend Developer, React, Node.js, UI/UX, Software Engineer, Scalable Web Solutions"
        />
        <meta name="author" content="Dev Bhattacharya" />

        {/* <!-- Open Graph for Social Sharing --> */}
        <meta
          property="og:title"
          content="Dev Bhattacharya | Innovative Web Projects & Full-Stack Solutions"
        />
        <meta
          property="og:description"
          content="Browse through my portfolio featuring modern, scalable, and high-performance web applications built with React, Node.js, and more."
        />
        <meta property="og:image" content={ProfileImage} />
        {/* <meta property="og:url" content="https://yourwebsite.com/projects" /> */}
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dev Bhattacharya | Innovative Web Projects & Full-Stack Solutions"
        />
        <meta
          name="twitter:description"
          content="Discover my latest projects in frontend, backend, and full-stack development. Let's build something amazing together!"
        />
        <meta name="twitter:image" content={ProfileImage} />
      </Helmet>
      ;
      <div className="w-full">
        <section className="max-container bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {/* My Projects heading */}
          <motion.h1
            className="head-text text-4xl sm:text-6xl lg:text-8xl font-bold text-center leading-tight relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 10px rgba(0, 255, 255, 0.7)",
              transition: { duration: 0.3 },
            }}
          >
            My{" "}
            <motion.span
              className="blue-gradient_text drop-shadow-xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Projects
            </motion.span>
            <motion.div
              className="absolute -top-2 left-[45%] h-2 w-2 bg-teal-400 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </motion.h1>
          {/* Some text */}
          {/* <motion.div
          className="text-slate-500 mt-[28px] leading-relaxed text-center"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {text.split(" ").map((wordText, index) => (
            <motion.span
              key={index}
              variants={word}
              className="inline-block mx-1 md:text-[20px]"
              whileHover={{
                scale: 1.2,
                color: "#1d4ed8", // Blue color
              }}
            >
              {wordText}
            </motion.span>
          ))}
        </motion.div> */}
          <motion.div
            className="mt-5 flex flex-wrap gap-[6px] text-slate-500 leading-relaxed text-center"
            initial="hidden"
            animate="visible"
            variants={container}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000, // Creates 3D depth effect
            }}
            onMouseMove={handleMouseMove}
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block md:mx-1 md:text-[20px]"
                whileHover={{
                  scale: 1.2,
                  color: "#1d4ed8", // Blue on hover
                  textShadow: "0px 0px 8px rgba(29, 78, 216, 0.8)", // Glow effect
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex flex-wrap my-20 gap-16 justify-center">
            {projects.map((project) => (
              <motion.div
                className="lg:w-[400px] w-full"
                key={project.name}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="block-container w-12 h-12"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className={`btn-back rounded-xl ${project.theme} shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                  />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt="threads"
                      className="w-1/2 h-1/2 object-contain bg-transparent rounded-lg dark:shadow-none"
                    />
                  </div>
                </motion.div>
                {/* Projects heading */}
                <div className="mt-5 flex flex-col">
                  <motion.h4
                    className="text-2xl font-poppins font-semibold relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    {project.name.split("").map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 * index, // Stagger effect for each letter
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className="inline-block hover:animate-pulse"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h4>
                  <motion.p
                    className="mt-2 text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="mt-5 flex items-center gap-4 font-poppins">
                    {/* GitHub Link */}
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.div>
                    </motion.a>

                    {/* Live Link */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <FiGlobe className="w-6 h-6" />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <hr className="border-slate-200" />

          <CTA />
        </section>
      </div>
    </>
  );
};

export default Projects;
