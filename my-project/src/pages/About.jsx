import { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { skills, experiences } from "../constants";
import Leetcode from "../assets/images/Leetcode.png";
import GitHub from "../assets/images/Github.png";
import CTA from "../components/CTA";
import DarkModeToggle from "../components/ToggleButton";
import { Helmet } from "react-helmet-async";
import ProfileImage from "../assets/ProfileImage.jpg";
const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(skills.map((skill) => skill.type))];
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.type === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // Stagger effect
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150 },
    },
    whileTap: { scale: 0.95, rotate: -5 }, // Ripple-like effect
  };
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Adds a stagger effect
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const hoverEffect = {
    scale: 1.1,
    rotate: [0, 5, -5, 0], // Adds a subtle wiggle effect
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const aboutText =
    "I'm a passionate MERN Stack Developer with hands-on experience in building scalable web applications and solving complex problems. With 360+ LeetCode solutions under my belt, I thrive on tackling challenging algorithms and enhancing system performance. I’m an immediate joiner, eager to collaborate, innovate, and drive impactful tech solutions forward.";
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
          Dev Bhattacharya | Engineering Scalable & Future-Ready Web Experiences
        </title>
        <meta
          name="description"
          content="Get to know Dev Bhattacharya, a passionate frontend and backend developer. Explore my journey, skills, and expertise in creating seamless web experiences."
        />
        <meta
          name="keywords"
          content="About Dev Bhattacharya, Web Developer, Frontend Engineer, Backend Engineer, Full Stack Developer, React, Node.js, Software Engineer, UI/UX"
        />
        <meta name="author" content="Dev Bhattacharya" />
        <meta
          property="og:title"
          content="About Dev Bhattacharya | My Journey in Web Development"
        />
        <meta
          property="og:description"
          content="Learn more about Dev Bhattacharya’s experience, skills, and approach to building high-performance web applications."
        />
        <meta property="og:image" content={ProfileImage} />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Dev Bhattacharya | My Journey in Web Development"
        />
        <meta
          name="twitter:description"
          content="Discover my journey as a frontend and backend developer, crafting digital experiences that matter."
        />
        <meta name="twitter:image" content={ProfileImage} />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>
      <section className="max-container bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="hidden md:block"></div>
        <h1 className="head-text text-4xl sm:text-6xl lg:text-8xl font-bold text-center leading-tight relative">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 10px rgba(0, 255, 255, 0.7)",
              transition: { duration: 0.3 },
            }}
          >
            Hello, I'm{" "}
            <motion.span
              className="blue-gradient_text font-semibold drop-shadow bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Dev
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
          </motion.div>
        </h1>
        <motion.div
          className="mt-5 flex flex-wrap gap-[6px] text-slate-500 md:leading-relaxed text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000, // Creates 3D depth effect
          }}
          onMouseMove={handleMouseMove}
        >
          {aboutText.split(" ").map((word, index) => (
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
        <div className="py-10 flex flex-col items-center bg-gradient-to-b text-gray-900 dark:text-gray-100">
          {/* Heading with Animation */}
          <motion.h3
            className="subhead-text text-6xl font-extrabold mb-[-0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 dark:from-purple-400 dark:via-blue-400 dark:to-teal-300 relative"
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              textShadow: "0 0 20px rgba(128, 90, 213, 0.9)",
            }}
          >
            <span className="animate-pulse-slow">My Skills</span>
            <span className="text-gray-900 dark:text-gray-100">🛠️</span>
          </motion.h3>

          {/* Skill Cards */}
          <div className="p-6 md:p-10">
            {/* Filter Tabs */}
            <motion.div
              className="flex justify-center gap-4 mb-8 flex-wrap"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 2,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition-transform duration-300 relative overflow-hidden 
        ${
          selectedCategory === category
            ? "bg-gradient-to-r from-purple-500 to-teal-400 text-white shadow-lg"
            : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-800"
        }`}
                >
                  <span className="relative z-10">{category}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
            >
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="relative group w-28 h-28 md:w-32 md:h-32 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 shadow-xl hover:shadow-2xl cursor-pointer transform-gpu dark:from-gray-700 dark:to-gray-900 dark:shadow-gray-800"
                  variants={{
                    hidden: { scale: 0.8, opacity: 0, y: 50 },
                    visible: { scale: 1, opacity: 1, y: 0 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotateY: 360,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                >
                  {/* Glow Animation */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-xl transition-opacity duration-300 dark:from-purple-600 dark:to-blue-600"
                    whileHover={{
                      opacity: 0.7,
                      filter: "blur(2.5rem)",
                      transition: { duration: 0.4 },
                    }}
                  />

                  {/* Skill Icon */}
                  <motion.div
                    className="flex justify-center items-center w-full h-full bg-white rounded-xl group-hover:shadow-lg dark:bg-gray-800"
                    whileHover={{
                      scale: 1.2,
                      rotateZ: [0, 15, -15, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-2/3 h-2/3 object-contain group-hover:scale-150 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <motion.p
                    className="mt-2 text-center text-sm text-slate-700 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 dark:text-gray-300"
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    whileHover={{
                      scale: 1.2,
                      color: "rgba(128, 90, 213, 1)",
                      textShadow: "0px 0px 10px rgba(128, 90, 213, 0.8)",
                    }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Work Experience */}
        <div className="py-10 flex flex-col items-center bg-gradient-to-b text-gray-900 dark:text-gray-100">
          <motion.h3
            className="subhead-text text-6xl font-extrabold mb-[-0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 dark:from-purple-400 dark:via-blue-400 dark:to-teal-300 relative"
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              textShadow: "0 0 20px rgba(128, 90, 213, 0.9)",
            }}
          >
            <span className="animate-pulse-slow">Work Experience</span>
            <span className="text-gray-900 dark:text-gray-100"> 💼</span>
          </motion.h3>
          <motion.div
            className="mt-5 flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.08,
                textShadow:
                  "0 0 12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.8)",
              }}
              className="leading-relaxed text-gray-800 dark:text-gray-200 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent font-size:20px"
            >
              I have over <strong>1 year of experience</strong> as a{" "}
              <strong>Software Developer</strong> in the <strong>USA</strong>,
              where I honed my skills in <strong>full-stack development</strong>
              , collaborated with highly skilled teams, and worked on{" "}
              <strong>scalable, real-world applications</strong>. During my time
              there, I gained hands-on experience with{" "}
              <strong>cutting-edge technologies</strong>, optimized performance
              for <strong>high-traffic applications</strong>, and contributed to
              building robust, efficient solutions that enhanced user
              experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                textShadow:
                  "0 0 15px rgba(0, 200, 0, 0.8), 0 0 25px rgba(0, 255, 255, 0.8)",
              }}
              className="text-lg font-semibold text-gray-900 dark:text-teal-400 flex items-center gap-2"
            >
              🚀 Here's a rundown of my journey and key contributions:
            </motion.p>
          </motion.div>
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{
                    background: experience.iconBg,
                    color: "#fff",
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
                    transform: "scale(1.1)",
                  }}
                  contentStyle={{
                    background: "rgba(20, 20, 20, 0.9)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    borderRadius: "20px",
                    border: `2px solid ${experience.iconBg}`,
                    boxShadow: "0px 4px 30px rgba(255, 255, 255, 0.3)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: "backOut",
                    }}
                  >
                    <h3 className="text-white text-3xl font-extrabold tracking-wide neon-glow">
                      {experience.title}
                    </h3>
                    <p className="text-gray-300 text-lg font-semibold">
                      {experience.company_name}
                    </p>
                  </motion.div>

                  <motion.ul
                    className="my-5 list-disc ml-5 space-y-3"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.3 }}
                  >
                    {experience.points.map((point, idx) => (
                      <motion.li
                        key={`experience-point-${idx}`}
                        className="text-gray-300 text-sm leading-relaxed transition-all duration-300 ease-in-out"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          color: "#fff",
                          textShadow: "0px 0px 15px rgba(255, 255, 255, 1)",
                        }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </motion.div>
        </div>
        <hr className="border-slate-200" />
        {/* Competitive programming section*/}
        <div className="py-10 flex flex-col items-center bg-gradient-to-b text-gray-900 dark:text-gray-100">
          <motion.h3
            className="subhead-text text-6xl font-extrabold mb-[-0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 dark:from-purple-400 dark:via-blue-400 dark:to-teal-300 relative"
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              textShadow: "0 0 20px rgba(128, 90, 213, 0.9)",
            }}
          >
            <span className="animate-pulse-slow">Competitive Programming</span>
            <span className="text-gray-900 dark:text-gray-100"> 💡</span>
          </motion.h3>

          <motion.div
            className="mt-5 flex flex-col gap-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.08,
                textShadow:
                  "0 0 12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.8)",
              }}
              className="leading-relaxed text-gray-800 dark:text-gray-200 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent text-lg"
            >
              My journey in competitive programming is driven by an unwavering{" "}
              <strong>passion</strong> for problem-solving and a deep curiosity
              about the <strong>'why'</strong> behind every challenge. Rather
              than treating it as a means to a job, I see it as a{" "}
              <strong>playground for intellectual growth</strong>—where I push
              boundaries, refine my <strong>analytical skills</strong>, and
              continuously evolve as a <strong>problem-solver</strong>. This
              mindset not only sharpens my <strong>technical abilities</strong>{" "}
              but also equips me to tackle{" "}
              <strong>complex, real-world challenges</strong> with creativity
              and efficiency
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.02 }}
            onMouseMove={handleMouseMove}
          >
            <motion.img
              src={Leetcode}
              alt="Leetcode Profile"
              className="w-[100%] h-[100%] object-cover rounded-lg shadow-lg"
              style={{
                rotateX,
                rotateY,
                transformPerspective: 800, // Gives 3D depth effect
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            <motion.a
              href="https://leetcode.com/u/dev_42/"
              className="mt-4 text-2xl font-bold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              target="_blank"
              whileHover={{
                scale: 1.15,
                textShadow: "0px 0px 12px rgba(59, 130, 246, 1)",
                transition: { duration: 0.3, yoyo: Infinity },
              }}
              whileTap={{ scale: 0.9 }}
            >
              🚀 Leetcode Profile
            </motion.a>
          </motion.div>
        </div>
        <hr className="border-slate-200" />
        {/* Github Section */}
        <div className="py-10 flex flex-col items-center bg-gradient-to-b text-gray-900 dark:text-gray-100">
          <motion.h3
            className="subhead-text text-6xl font-extrabold mb-[-0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 dark:from-purple-400 dark:via-blue-400 dark:to-teal-300 relative"
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              textShadow: "0 0 20px rgba(128, 90, 213, 0.9)",
            }}
          >
            <span className="animate-pulse-slow">GitHub Stats</span>
            <span className="text-gray-900 dark:text-gray-100"> 🚀</span>
          </motion.h3>

          <motion.div
            className="mt-5 flex flex-col gap-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.08,
                textShadow:
                  "0 0 12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 255, 0.8)",
              }}
              className="leading-relaxed text-gray-800 dark:text-gray-200 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent text-lg"
            >
              <strong>Web development</strong> is more than just writing
              code—it's about{" "}
              <strong>architecting engaging digital experiences</strong> and{" "}
              <strong>engineering scalable, high-performance solutions</strong>{" "}
              that solve <strong>real-world challenges</strong>. My{" "}
              <strong>GitHub profile</strong> isn't just a collection of
              repositories; it's a <strong>blueprint of innovation</strong>,
              where I{" "}
              <strong>
                experiment with cutting-edge technologies, optimize performance,
                and build solutions that matter
              </strong>
              . From <strong>intuitive UI/UX designs</strong> to{" "}
              <strong>robust backend systems</strong>, every project reflects my{" "}
              <strong>
                commitment to excellence, problem-solving mindset, and
                adaptability
              </strong>{" "}
              in an <strong>ever-evolving tech landscape</strong>.
              <strong>Recruiters</strong>, if you're looking for someone who{" "}
              <strong>
                thrives on pushing boundaries and delivering impact-driven
                software
              </strong>
              , let's connect! 🚀
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={GitHub}
              alt="GitHub Stats"
              className="w-[100%] h-[100%] object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            <motion.a
              href="https://github.com/Dev-42?tab=overview&from=2022-12-01&to=2022-12-31"
              className="mt-4 text-2xl font-bold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              target="_blank"
              whileHover={{
                scale: 1.15,
                textShadow: "0px 0px 12px rgba(59, 130, 246, 1)",
                transition: { duration: 0.3, yoyo: Infinity },
              }}
              whileTap={{ scale: 0.9 }}
            >
              🌟 Visit My GitHub Profile
            </motion.a>
          </motion.div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
    </>
  );
};

export default About;
