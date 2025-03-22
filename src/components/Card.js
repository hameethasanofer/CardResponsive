import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaCogs, FaIndustry, FaCheckCircle, FaLightbulb, FaBox, FaChartLine, FaArrowRight } from "react-icons/fa"; 
import "./../components/Card.css";

const iconMap = {
  "production": <FaCogs size={25} color="white" />,
  "custom": <FaIndustry size={25} color="white" />,
  "quality": <FaCheckCircle size={25} color="white" />,
  "technology": <FaLightbulb size={25} color="white" />,
  "packaging": <FaBox size={25} color="white" />,
  "consulting": <FaChartLine size={25} color="white" />
};

const Card= ({title, icon, description, loading})=>{
  return loading ?(<Skeleton height={150} className="rounded-lg"/>):(
    <div className="card-container">
      <div className="card-icon">{iconMap[icon]}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="arrow-icon">
      <FaArrowRight size={20} className="#fff"/>
      </div>
    </div>
  )
}
export default Card;
