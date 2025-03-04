import { useState } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg from "../assets/soccer-players-action-professional-stadium.jpg";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Card Container with Oval Border */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 bg-white bg-opacity-80 p-8 md:p-12 rounded-[50px] shadow-2xl max-w-md w-full text-center border-4 border-purple-500" style={{borderRadius:"10px", width:"31rem",height:"14rem",marginTop:"-20rem"}}
      >
        <h2 className="text-4xl font-bold text-gray-800" style={{marginTop:"1rem"}}>Forgot Password?</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Enter your email to receive a reset link.
        </p>

        {/* Input Field */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-purple-400 transition"
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.button
            type="submit"
            className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Reset Link
          </motion.button>
        </motion.form>

        {/* Back to Login */}
        <motion.div className="mt-4">
          <Link
            to="/login"
            className="text-purple-600 hover:underline font-medium"
          >
            Back to Login
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
