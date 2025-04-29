import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Main() {
  // State to track which button is active
  const [activeButton, setActiveButton] = useState("login"); // Default active is login

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="pt-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        <motion.div
          className="hidden lg:flex justify-between items-center w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 h-full"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <img src="/Frame.png" alt="img" className="" />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-6 w-full lg:w-1/2 xl:w-1/3 2xl:w-1/3"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <img src="/Frame 1171275296.png" alt="logo" className="" />
          <h1 className="font-normal text-4xl lg:text-5xl Gilroy-ExtraBold text-center text-webcolor-primary">
            Imagine a place...
          </h1>
          <p className="text-[#717171] font-normal lg:px-0 px-4 text-start Gilroy-Regular text-base lg:text-lg lg:text-center">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>

          {/* Buttons with increased margin */}
          <div className="flex gap-4 lg:gap-8">
            {/* Login Button */}
            <Link to="/login">
              <motion.button
                onClick={() => setActiveButton("login")}
                className={`h-[48px] lg:h-[56px] w-[160px] lg:w-[218px] rounded-full border transition-all ${
                  activeButton === "login"
                    ? "bg-[#DFE2FF] text-webcolor-primary  border-primary"
                    : "bg-[#DFE2FF] text-webcolor-primary border-primary"
                } hover:bg-webcolor-primary hover:text-white`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log In
              </motion.button>
            </Link>
            {/* Sign Up Button */}
            {/* /creataccount */}
            <Link to="/creataccount">
              <motion.button
                onClick={() => setActiveButton("signup")}
                className={`h-[48px] lg:h-[56px] w-[160px] lg:w-[218px] rounded-full border transition-all ${
                  activeButton === "signup"
                    ? "bg-[#DFE2FF] text-white border-primary"
                    : " bg-webcolor-primary text-white border-primary"
                } hover:bg-webcolor-primary hover:text-white`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
          <motion.img
            src="/Frame 2095585042.png"
            alt=""
            className="hidden lg:block"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <img src="/Frame1.png" alt="img2" className="w-full h-auto" />
        </motion.div>
      </div>

      {/* Middle Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 pt-10 md:pt-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Image Section */}
        <div className="col-span-12  md:col-span-6 flex justify-center w-full md:w-4/5 mb-8 md:mb-0">
          <img
            src="/Group Chat-pana.png"
            alt="Group Chat-pana"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-12 md:col-span-6 w-full md:w-4/5 px-4 lg:px-0 flex justify-center items-center flex-col gap-3">
          <h1 className="Gilroy-Bold font-normal text-2xl md:text-3xl text-start text-webcolor-lightblack">
            Create an invite-only place where you belong
          </h1>
          <p className="Gilroy-Regular font-normal text-sm md:text-base lg:text-lg  text-start  text-[#717171]">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </motion.div>

      {/* Remaining sections... */}
      <div>
        {/* <SignUpFooter /> */}
      </div>
    </section>
  );
}

export default Main;
