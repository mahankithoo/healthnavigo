
import React from "react";
import SymptomChecker from "./SymptomChecker";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-medical-secondary rounded-lg text-medical-primary mb-4">
            <span className="text-xs font-medium uppercase tracking-wider">Symptom Checker</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How are you feeling today?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Describe your symptoms below and our AI-powered system will provide you with possible conditions and remedies.
          </p>
        </div>

        <SymptomChecker />
      </motion.div>
    </div>
  );
};

export default HomePage;
