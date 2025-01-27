import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { skills, experiences } from "../constants";
import Leetcode from "../assets/images/Leetcode.png";
import GitHub from "../assets/images/Github.png";
import CTA from "../components/CTA";
import DarkModeToggle from "../components/ToggleButton";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delays each word's animation slightly
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
    "Passionate Software Engineer based in India with a background in competitive programming and hands-on experience in building robust MERN stack applications.";
  return (
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
        className="mt-5 flex flex-wrap gap-3 text-slate-500 leading-relaxed text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {aboutText.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mx-1 md:text-[20px]"
            whileHover={{
              scale: 1.2,
              color: "#1d4ed8", // Blue on hover
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <div className="py-10 flex flex-col items-center bg-gradient-to-b bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Heading with Animation */}
        <motion.h3
          className="subhead-text text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 dark:from-purple-400 dark:via-blue-400 dark:to-teal-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 15px rgba(128, 90, 213, 0.8)",
          }}
        >
          My Skills
        </motion.h3>

        {/* Skill Cards */}
        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.5 },
            },
          }}
        >
          {skills.map((skill, index) => (
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

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am currently working with a companany from where I am levelling up
            my skills and teaming up with smart people.Here's the rundown :
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <div className="py-16">
        <h3 className="subhead-text">Competitive Programming</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My competitive programming journey is far from ordinary. While many
            pursue it to secure a job, my motivation comes from a genuine love
            for problem-solving and understanding the "why" behind every
            challenge. This relentless curiosity and passion for thinking deeply
            set me apart and drive my continuous growth in the field.
          </p>
          <div className="mt-[15px] flex flex-col items-center">
            <img src={Leetcode} alt="Leetcode Image" />
            <a
              href="https://leetcode.com/u/dev_42/"
              className="mt-[12px] text-[24px] items-center text-blue-500"
              target="_blank"
            >
              Leetcode
            </a>
          </div>
        </div>
      </div>
      <hr className="border-slate-200" />
      <div className="py-16">
        <h3 className="subhead-text">Github Stats</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Web development is not just about building websites; it's about
            creating experiences and solving problems. This GitHub profile
            demonstrates my passion for creating and committing to projects in
            every field of web development.
          </p>
          <div className="mt-[15px] flex flex-col items-center">
            <img src={GitHub} alt="Github Stats" />
            <a
              href="https://github.com/Dev-42?tab=overview&from=2022-12-01&to=2022-12-31"
              className="mt-[12px] text-[24px] items-center text-blue-500"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
