import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Card from "./../components/Card";
import "./App.css"; 
import Hero from "./Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      
      <div className="min-h-screen bg-[#0c212a] flex flex-col items-center justify-center p-10">
        <div className="w-full text-center">
          <h1 className="text-4xl text-white mb-6 block">
            Efficient and Integrated<br /> Manufacturing Services
          </h1>
          <p className="text-xl text-white mb-6 block">
            Simplify operations with our efficient, quality-focused services
          </p>
        </div>

        <div className="card-grid">
          <Card title="Production and Assembly" description="Details on product processes, assembly, and product types" icon="production" />
          <Card title="Custom Manufacturing" description="Custom product creation with design and customization options" icon="custom" />
          <Card title="Quality Control" description="Procedures and systems to ensure high product quality" icon="quality" />
          <Card title="Technology and Innovation" description="Latest manufacturing technologies and ongoing innovations" icon="technology" />
          <Card title="Packaging and Logistics" description="Packaging and logistics for shipping to customers and distributors" icon="packaging" />
          <Card title="Consulting & Market Research" description="Services to help companies understand market needs and provide strategic advice" icon="consulting" />
        </div>
      </div>
    </Router>
  );
}

export default App;
