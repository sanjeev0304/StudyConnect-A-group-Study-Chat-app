// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Signup() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [yearOfStudy, setYearOfStudy] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password, age, specialization, yearOfStudy }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         router.push('/login');
//       } else {
//         setError(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-6">Signup</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Age</label>
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Specialization</label>
//           <input
//             type="text"
//             value={specialization}
//             onChange={(e) => setSpecialization(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-2">Year of Study</label>
//           <input
//             type="number"
//             value={yearOfStudy}
//             onChange={(e) => setYearOfStudy(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>
//         <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
//           Signup
//         </button>
//       </form>
//       <p className="mt-4">
//         Already have an account?{' '}
//         <a href="/login" className="text-blue-500 hover:underline">
//           Login
//         </a>
//       </p>
//     </div>
//   );
// }





// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Signup() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [yearOfStudy, setYearOfStudy] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password, age, specialization, yearOfStudy }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         router.push('/login');
//       } else {
//         setError(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center">
//       <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-xl">
//         <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Signup</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
//             <input
//               type="number"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
//             <input
//               type="text"
//               value={specialization}
//               onChange={(e) => setSpecialization(e.target.value)}
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Year of Study</label>
//             <input
//               type="number"
//               value={yearOfStudy}
//               onChange={(e) => setYearOfStudy(e.target.value)}
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
//             Signup
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm">
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-500 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, age, specialization, yearOfStudy }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/login');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-xl"
      >
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm text-center">{error}</motion.p>}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
            <input
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Year of Study</label>
            <input
              type="number"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-all"
          >
            Signup
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
