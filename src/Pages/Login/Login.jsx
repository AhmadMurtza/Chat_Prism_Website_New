import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <section className="h-screen">
        <div className="lg:px-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center md:justify-center md:items-start">
          {/* Left Image Section */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <img src="/Vector.png" alt="Vector" className="w-1/3" />
              <img
                src="/Mobile login-amico 1.png"
                alt="Login Illustration"
                className=" w-5/6"
              />
            </motion.div>
          </div>

          {/* Right Form Section */}
          <div className="md:col-span-6 flex flex-col py-6 items-center px-4 lg:px-16 shadow-lg rounded-lg">
            <img src="/Frame 1171275296.png" alt="Logo" className="w-28 mb-4" />
            <h1 className="text-4xl text-webcolor-achromatic font-normal mb-4 text-center">
              Welcome Back
            </h1>
            <h1 className="text-sm Gilroy-Regular font-normal">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="underline text-webcolor-primary cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </h1>
            <motion.form
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Email Input */}
              <label
                className="text-md font-normal text-webcolor-achromatic md:mt-3 mt-0"
                htmlFor="email"
              >
                What’s your email?
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                })}
                className="border border-gray-300 rounded-full bg-[#F8F8F8] px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-webcolor-primary transition-all"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}

              {/* Password Input */}
              <label
                className="text-md font-normal text-webcolor-achromatic flex justify-between"
                htmlFor="password"
              >
                Enter password
                <div
                  className="flex gap-1 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <p>
                    {showPassword ? (
                      <img src="/openeyeicon.svg" alt="open" />
                    ) : (
                      <img src="/icon.svg" alt="closed" />
                    )}
                  </p>
                </div>
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="border border-gray-300 bg-[#F8F8F8] rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-webcolor-primary transition-all"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <div className="flex flex-col justify-end items-end Gilroy-Regular">
                <Link to="/emailaddress">
                  <p className="text-webcolor-primary Gilroy-Regular cursor-pointer">
                    Forgot password
                  </p>
                </Link>
              </div>

              {/* Terms Checkbox */}
              <div>
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    checked={termsAgreed}
                    onChange={() => setTermsAgreed(!termsAgreed)}
                    className="w-4 h-4 text-webcolor-achromatic bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-webcolor-primary"
                  />
                  <label className="ms-2 text-sm flex font-medium text-gray-900">
                    I agree with the{" "}
                    <Link
                      to="/terms"
                      className="text-webcolor-primary ps-1 hover:underline"
                    >
                      Terms of use
                    </Link>
                    <p className="px-1"> and </p>
                    <Link
                      to="/terms"
                      className="text-webcolor-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-3 rounded-full w-full transition-all ${
                  isValid && termsAgreed
                    ? "bg-webcolor-primary text-white"
                    : "bg-gray-400 text-webcolor-achromatic"
                }`}
                type="submit"
              >
                Login
              </motion.button>
            </motion.form>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-3 text-webcolor-achromatic transition-all hover:bg-gray-100 px-4">
                <img
                  src="/Social media logo.svg"
                  alt="Google Icon"
                  className="w-6 h-6 mr-2"
                />
                Google
              </button>
              <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-3 text-webcolor-achromatic transition-all hover:bg-gray-100 px-4">
                <img
                  src="/Apple.svg"
                  alt="Apple Icon"
                  className="w-6 h-6 mr-2"
                />
                Apple
              </button>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
}

export default Login;
