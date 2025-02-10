import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://dev-portfolio-backend.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("🚀 Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(`❌ Error: ${data.message}`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("⚠️ Oops! Something went wrong. Try again later.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }

    setIsLoading(false);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-10 py-12 md:py-16 bg-gray-50 dark:bg-gray-900 space-y-12 md:space-y-0 overflow-hidden">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -150, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 80,
        }}
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          <motion.span
            animate={{ color: ["#6366F1", "#EC4899", "#6366F1"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Let's chat.
          </motion.span>
          <br />
          Tell me about your project.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 80,
          }}
          className="text-gray-600 dark:text-gray-400 text-lg"
        >
          Let's create something together ✌️
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="flex items-center justify-center md:justify-start space-x-4 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 border border-gray-300 dark:border-gray-700 w-fit"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-2xl" />
          </motion.div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=devbhattacharya42@gmail.com&su=Let's%20Collaborate&body=Hi%20there,%0A%0AI%20wanted%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 dark:text-indigo-300 font-bold text-lg transition duration-300 hover:text-pink-500"
          >
            devbhattacharya42@gmail.com
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side (Form) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 md:p-8 shadow-2xl rounded-2xl border border-gray-300 dark:border-gray-700"
        style={{ marginTop: "40px" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2"
        >
          <FaPaperPlane className="text-indigo-600 dark:text-indigo-400" />
          <span>Send me a message🚀</span>
        </motion.h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(form).map((field, index) => (
            <motion.input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field.charAt(0).toUpperCase() +
                field.slice(1) +
                (field !== "subject" ? "*" : "")
              }
              required={field !== "subject"}
              value={form[field]}
              onChange={handleChange}
              className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          ))}
          <motion.button
            type="submit"
            className="w-full p-3 md:p-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex justify-center items-center space-x-2 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane /> <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
