import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import Leetcode from "../assets/images/Leetcode.png";
import GitHub from "../assets/images/Github.png";
import CTA from "../components/CTA";
import DarkModeToggle from "../components/ToggleButton";
const About = () => {
  return (
    <section className="max-container bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="hidden md:block">
        <DarkModeToggle />
      </div>
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Dev
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Passionate Software Engineer based in India with a background in
          competitive programming and hands-on experience in building robust
          MERN stack applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
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
