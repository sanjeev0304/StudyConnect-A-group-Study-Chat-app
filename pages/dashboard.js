// // // 

// // import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/router';
// // import Chat from '../components/chat';

// // export default function Dashboard() {
// //   const [username, setUsername] = useState('');
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [inputUsername, setInputUsername] = useState('');
// //   const router = useRouter();

// //   useEffect(() => {
// //     const checkLoginStatus = async () => {
// //       try {
// //         const response = await fetch('/api/status', {
// //           credentials: 'include', // Ensures cookies are sent with the request
// //         });

// //         // Check if response is JSON
// //         const contentType = response.headers.get("content-type");
// //         if (!contentType || !contentType.includes("application/json")) {
// //           throw new Error("Invalid JSON response from server");
// //         }

// //         const data = await response.json();
// //         if (data.isLoggedIn) {
// //           setUsername(data.token); // Use token or fetch user details separately
// //         } else {
// //           router.push('/login');
// //         }
// //       } catch (error) {
// //         console.error('Error checking login status:', error);
// //         router.push('/login');
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     checkLoginStatus();
// //   }, [router]);

// //   const handleUsernameChange = (e) => {
// //     setInputUsername(e.target.value);
// //   };

// //   const handleUsernameSubmit = (e) => {
// //     e.preventDefault();
// //     if (inputUsername) {
// //       setUsername(inputUsername);
// //     }
// //   };

// //   if (isLoading) {
// //     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-4">
// //       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

// //       {!username ? (
// //         <form onSubmit={handleUsernameSubmit} className="mb-6">
// //           <label htmlFor="username" className="block text-lg font-semibold mb-2">Enter your username:</label>
// //           <input
// //             type="text"
// //             id="username"
// //             value={inputUsername}
// //             onChange={handleUsernameChange}
// //             className="border-2 border-gray-300 p-2 rounded-md"
// //             placeholder="Your username"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
// //           >
// //             Set Username
// //           </button>
// //         </form>
// //       ) : (
// //         <Chat username={username} />
// //       )}
// //     </div>
// //   );
// // }


// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Chat from '../components/chat';

// export default function Dashboard() {
//   const [username, setUsername] = useState('');
//   const [inputUsername, setInputUsername] = useState('');
//   const [isUsernameSet, setIsUsernameSet] = useState(false); // To track if the username is set
//   const router = useRouter();

//   const handleUsernameChange = (e) => {
//     setInputUsername(e.target.value);
//   };

//   const handleUsernameSubmit = (e) => {
//     e.preventDefault();
//     if (inputUsername) {
//       setUsername(inputUsername);
//       setIsUsernameSet(true); // Mark that the username has been set
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//       {!isUsernameSet ? (
//         <form onSubmit={handleUsernameSubmit} className="mb-6">
//           <label htmlFor="username" className="block text-lg font-semibold mb-2">Enter your username:</label>
//           <input
//             type="text"
//             id="username"
//             value={inputUsername}
//             onChange={handleUsernameChange}
//             className="border-2 border-gray-300 p-2 rounded-md"
//             placeholder="Your username"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
//           >
//             Set Username
//           </button>
//         </form>
//       ) : (
//         <Chat username={username} />
//       )}
//     </div>
//   );
// }

// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { motion } from 'framer-motion';
// import Chat from '../components/chat';

// export default function Dashboard() {
//   const [username, setUsername] = useState('');
//   const [inputUsername, setInputUsername] = useState('');
//   const [isUsernameSet, setIsUsernameSet] = useState(false);
//   const router = useRouter();

//   const handleUsernameChange = (e) => {
//     setInputUsername(e.target.value);
//   };

//   const handleUsernameSubmit = (e) => {
//     e.preventDefault();
//     if (inputUsername) {
//       setUsername(inputUsername);
//       setIsUsernameSet(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-lg mb-8">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-bold text-blue-600">ChatApp</div>
//             <div className="flex space-x-4">
//               <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl mx-auto"
//       >
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>

//         {!isUsernameSet ? (
//           <motion.form
//             onSubmit={handleUsernameSubmit}
//             className="bg-white p-8 rounded-lg shadow-lg"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <label htmlFor="username" className="block text-lg font-semibold text-gray-700 mb-4">
//               Enter your username:
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={inputUsername}
//               onChange={handleUsernameChange}
//               className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
//               placeholder="Your username"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg mt-4 hover:bg-blue-700 transition-colors"
//             >
//               Set Username
//             </button>
//           </motion.form>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Chat username={username} />
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// }



import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Chat from '../components/chat';

export default function Dashboard() {
  const [username, setUsername] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const router = useRouter();

  const handleUsernameChange = (e) => {
    setInputUsername(e.target.value);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (inputUsername) {
      setUsername(inputUsername);
      setIsUsernameSet(true);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'>
    <div className="fixed w-full top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      {/* Full-Width Navigation Bar */}
      <nav className="bg-transparent shadow-lg mb-8 w-full">
  <div className="px-4">
    <div className="flex justify-between items-center py-4">
      <div className="text-2xl font-bold text-blue-600">StudyConnectt</div>
      <div className="flex space-x-4">
        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
      </div>
    </div>
  </div>
</nav>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Chat with your peers</h1>

        {!isUsernameSet ? (
          <motion.form
            onSubmit={handleUsernameSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="username" className="block text-lg font-semibold text-gray-700 mb-4">
              Enter your username:
            </label>
            <input
              type="text"
              id="username"
              value={inputUsername}
              onChange={handleUsernameChange}
              className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your username"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg mt-4 hover:bg-blue-700 transition-colors"
            >
              Set Username
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Chat username={username} />
          </motion.div>
        )}
      </motion.div>
    </div>
    </div>
  );
}