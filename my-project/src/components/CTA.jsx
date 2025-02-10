import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text dark:text-[white]">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts hidden and slides up
        animate={{ opacity: 1, y: 0 }} // Fades in and slides to position
        transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
        whileHover={{
          scale: 1.1,
          rotate: 3, // Adds a slight tilt
          boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.3)", // More pronounced shadow
          textShadow: "0px 4px 10px rgba(255, 255, 255, 0.8)", // Glow effect
        }}
        whileTap={{
          scale: 0.95,
          rotate: -3, // Tilts in the opposite direction
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Reduces shadow
        }}
      >
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
