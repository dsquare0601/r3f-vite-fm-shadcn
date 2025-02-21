import { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { GradientTexture, OrbitControls } from "@react-three/drei";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import threeJsLogo from "./assets/threejs.png";
import shadCnLogo from "./assets/shadcn-ui.jpg";
import "./index.css";
import "./App.css";
import { Button } from "./components/ui/button";
import { Github } from "lucide-react";

const Box = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={["#ff00ff", "#00ffff"]}
          size={1024}
        />
      </meshStandardMaterial>
    </mesh>
  );
};

const Scene = ({ boxPosition, key }) => {
  return (
    <Canvas key={key} className="!w-full !h-full cursor-pointer">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={boxPosition} />
      <OrbitControls />
    </Canvas>
  );
};
export default function App() {
  const [count, setCount] = useState(0);
  const [boxPosition, setBoxPosition] = useState([0, 0, 0]);
  const [canvasKey, setCanvasKey] = useState(0); // Force re-render

  const resetPosition = () => {
    setBoxPosition([0, 0, 0]);
    setCanvasKey((prev) => prev + 1); // Update key to force re-render
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      {/* Header Section */}
      <motion.div
        className="flex items-center justify-center w-full h-20 bg-blue-500 text-3xl font-bold shadow-lg text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Tailwind v4 + React Three Fiber
      </motion.div>

      {/* Logo Section */}
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
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src={threeJsLogo} className="w-24 h-24" alt="React logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src={shadCnLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-extrabold mt-4 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Vite + React + R3F + ShadCN
      </motion.h1>

      {/* Counter Section */}
      <div className="flex flex-col mt-6 p-4 bg-gray-800 rounded-lg shadow-lg items-center justify-center">
        <p className="mb-3 text-gray-300">Counter</p>
        <Button
          onClick={() => setCount((count) => count + 1)}
          className="cursor-pointer px-6 py-2 items-center justify-center bg-purple-500 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all"
        >
          Count is {count}
        </Button>
      </div>

      {/* 3D Scene Section */}
      <motion.div
        className="w-96 h-96 border border-gray-700 rounded-lg overflow-hidden mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Scene boxPosition={boxPosition} key={canvasKey} />
      </motion.div>

      {/* Reset Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Button
          onClick={resetPosition}
          className="bg-yellow-300 hover:bg-yellow-400 text-black"
        >
          Reset
        </Button>
      </motion.div>

      {/* Footer */}
      <Button className="mt-5 px-6 py-2 text-center text-white rounded-md shadow-md bg-purple-500 hover:scale-110 hover:bg-purple-600 transition-transform duration-300">
        <Github />
        <a href="https://github.com/dsquare0601" target="_blank">
          <p className="">Created By Dhaval Darji</p>
        </a>
      </Button>
    </div>
  );
}
