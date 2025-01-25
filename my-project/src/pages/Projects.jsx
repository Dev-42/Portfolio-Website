import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants/index";
import { arrow } from "../assets/icons";
import DarkModeToggle from "../components/ToggleButton";
import { motion } from "framer-motion";

const Projects = () => {
  const [displayText, setDisplayText] = useState("");
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

              <div className="mt-5 flex flex-col">
                <motion.h4
                  className="text-2xl font-poppins font-semibold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {project.name}
                </motion.h4>
                <motion.p
                  className="mt-2 text-slate-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain animate-bounce"
                  />
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
