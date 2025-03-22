import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./../components/Navbar";
import Card from "./../components/Card";
import Hero from "./Hero"; 
import "./App.css"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar loading={loading} />
      <Hero loading={loading} />
      
      <div className="min-h-screen bg-[#0c212a] flex flex-col items-center justify-center p-10">
        <div className="w-full text-center">
          {loading ? <Skeleton width={300} height={40} /> : (
            <h1 className="text-4xl text-white mb-6 block">
              Efficient and Integrated<br /> Manufacturing Services
            </h1>
          )}
          {loading ? <Skeleton width={250} height={20} /> : (
            <p className="text-xl text-white mb-6 block">
              Simplify operations with our efficient, quality-focused services
            </p>
          )}
        </div>

        <div className="card-grid">
          {[ 
            { title: "Production and Assembly", icon: "production", description: "Details on product processes, assembly, and product types" },
            { title: "Custom Manufacturing", icon: "custom", description: "Custom product creation with design and customization options" },
            { title: "Quality Control", icon: "quality", description: "Procedures and systems to ensure high product quality" },
            { title: "Technology and Innovation", icon: "technology", description: "Latest manufacturing technologies and ongoing innovations" },
            { title: "Packaging and Logistics", icon: "packaging", description: "Packaging and logistics for shipping to customers and distributors" },
            { title: "Consulting & Market Research", icon: "consulting", description: "Services to help companies understand market needs and provide strategic advice" }
          ].map((card, index) => (
            loading ? 
              <Skeleton key={index} height={150} width={300} className="rounded-lg mb-4" /> 
              : <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
