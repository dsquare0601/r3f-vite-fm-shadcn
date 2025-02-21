import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex items-center justify-center w-full h-40 bg-blue-500 text-3xl font-bold shadow-lg">
        🚀 Tailwind v4 is working!
      </div>
      <div className="flex space-x-4 mt-10">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src={reactLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-extrabold mt-8">Vite + React</h1>

      <div className="flex flex-col mt-6 p-6 bg-gray-800 rounded-lg shadow-lg items-center justify-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 items-center justify-center bg-purple-500 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all"
        >
          Count is {count}
        </button>
        <p className="mt-3 text-gray-300">
          Edit <code className="text-yellow-400 font-mono">src/App.jsx</code>{" "}
          and save to test HMR.
        </p>
      </div>
      <p className="mt-8 p-4 text-lg text-center bg-yellow-500 text-red-900 rounded-lg shadow-md">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
