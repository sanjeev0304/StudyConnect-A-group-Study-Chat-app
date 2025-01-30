// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import "../styles/globals.css";

// export default function Home() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("/api/status", { credentials: "include" })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Auth status:", data);
//         setIsLoggedIn(data.isLoggedIn);
//       })
//       .catch((err) => console.error("Error checking auth:", err));
//   }, []);
//   const handleLogout = () => {
//     fetch("/api/logout", {
//       method: "POST",  // Use POST to indicate a state-changing operation
//       credentials: "include", // Ensure cookies are included in the request
//     })
//       .then((res) => res.json())
//       .then(() => {
//         console.log("Token removed");
//         setIsLoggedIn(false);
//         router.refresh(); // Refresh UI after logout
//       })
//       .catch((err) => console.error("Logout error:", err));
//   };
  

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
//           Welcome to <span className="text-blue-600">Study Group App</span>
//         </h1>
//         <p className="text-xl text-gray-600 max-w-2xl">
//           A platform that connects students with similar learning goals and complementary skills, enabling peer-to-peer learning and collaboration.
//         </p>
//       </div>

//       {/* Conditional Login/Logout Button */}
//       <div className="flex space-x-6">
//         {isLoggedIn ? (
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
//           >
//             Logout
//           </button>
//         ) : (
//           <>
//             <Link href="/login">
//               <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
//                 Login
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
//                 Signup
//               </button>
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Footer Section */}
//       <footer className="mt-16 text-center text-gray-600">
//         <p>© 2024 Study Group App. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import "../styles/globals.css";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/status", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setIsLoggedIn(data.isLoggedIn);
      })
      .catch((err) => console.error("Error checking auth:", err));
  }, []);

  const handleLogout = () => {
    fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        setIsLoggedIn(false);
        router.refresh();
      })
      .catch((err) => console.error("Logout error:", err));
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      {/* Navigation Bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              StudyConnectt
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute w-full bg-white/95 backdrop-blur-sm"
            >
              <div className="px-4 py-4 space-y-4">
                {isLoggedIn ? (
                  <>
                    <Link href="/dashboard" className="block text-gray-600 hover:text-blue-600">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block text-gray-600 hover:text-blue-600">
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-center"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Collaborate, Learn & Grow Together
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Connect with peers who share your academic goals and complement your skills through our intelligent matching system.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            {!isLoggedIn && (
              <>
                <Link
                  href="/signup"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More
                </Link>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {['Smart Matching', 'Collaborative Tools', 'Progress Tracking'].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                An AI-driven system that pairs users based on their strengths, weaknesses, and learning goals, fostering effective collaboration and personalized growth.

                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Study Group App. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
