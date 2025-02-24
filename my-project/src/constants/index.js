import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  SQLite,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  materialUI,
  contentful,
  Bludit,
  Sequelize,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "FullStack",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: contentful,
    name: "Contentful",
    type: "CMS",
  },
  {
    imageUrl: Bludit,
    name: "Bludit",
    type: "CMS",
  },
  {
    imageUrl: materialUI,
    name: "Material UI",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: SQLite,
    name: "SQLite",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: Sequelize,
    name: "Sequelize",
    type: "Backend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "CureValue",
    icon: "",
    iconBg: "#accbe1",
    date: "January 2024 - January 2025",
    points: [
      "Migrated ReactJS to NextJS – Boosted SEO & performance. Optimized APIs in Node.js & MongoDB for faster data retrieval.",
      "Enhanced Features & UI – Built facility comparison, interactive maps, clustering, dynamic filters, and responsive UI. Improved search & onboarding.",
      "Automated Database Management – Wrote scripts for doctor profiles & metadata updates. Optimized AWS S3 image handling & data filtering.",
      "SEO & Analytics – Implemented SEMrush SEO, JSON-LD metadata, OpenGraph & Twitter cards. Integrated Hotjar for user insights.",
      "Bug Fixes & Optimization – Resolved UI bugs, crashes, and data inconsistencies. Optimized localStorage-based facility comparison.",
    ],
  },
  {
    title: "Exploring MERN Stack",
    company_name: "Physics Wallah Skills",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "July 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with multiple students to develop multiple projects in several domains of web development.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Practiced some competitve programming in platforms like leetcode.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "StockInsight Pro",
    description:
      "Developed an advanced AI-driven web application for fundamental stock analysis using ReactJS and the Gemini API, providing investors with precise valuations and actionable insights they can rely on for the next five years.The most trusted tool for the investors worldwide.",
    githubLink: "https://github.com/Dev-42/A.I-Stock-Prediction-Tool-",
    link: "https://a-i-stock-prediction-tool.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Mr.Chef | Culinary Express App",
    description:
      "Developed an end-to-end full-stack application revolutionizing food delivery with secure Firebase authentication, dynamic product display via Mr.Chef's API, optimized search with debouncing, and seamless Razorpay integration for secure payments.",
    githubLink: "https://github.com/Dev-42/Mr.Chef-Culinary-Express-App",
    link: "https://ephemeral-smakager-9f78ae.netlify.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "HealthKart 2.0",
    description:
      "I led a team of 5 to build HealthKart 2.0, a one-stop destination for medicines, supplements, and fitness equipment.",
    githubLink: "https://github.com/Swagh001/HealthKart-Clone",
    link: "https://graceful-speculoos-4458b2.netlify.app/index.html",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Express 2.0",
    description:
      "This web app was built by a total of 5 people to serve daily fashion requirement of the youth at their doorstep.",
    githubLink:
      "https://github.com/muskanthapa2000/express.com_shopping_website_clone",
    link: "https://express-clone-ecomm-site.netlify.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Personal Portfolio",
    description:
      "Developed a web application using react,react-router and threeJS to showcase my skills and experience.",
    githubLink: "https://github.com/Dev-42/Portfolio-Website",
    link: "",
  },
];
