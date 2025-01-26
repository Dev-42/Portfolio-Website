import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants/index";
import { arrow } from "../assets/icons";
import DarkModeToggle from "../components/ToggleButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa"; // GitHub Icon
import { FiGlobe } from "react-icons/fi"; // Globe Icon for Live Link

const Projects = () => {
  const [ref, inVeiw] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
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
  const word = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <div className="w-full">
      <section className="max-container bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <DarkModeToggle />
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
        <motion.div
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
                    className="w-1/2 h-1/2 object-contain"
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
                    className="flex items-center text-gray-700 hover:text-black"
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
                    className="flex items-center text-blue-600 hover:text-blue-800"
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
  );
};

export default Projects;
