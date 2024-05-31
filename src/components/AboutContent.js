import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'

import React1 from "../assets/react1.jpg";
import project4 from "../assets/project4.png";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
                <h1>who Am I?</h1>
                <p>I am a React Frontend Developer, i create responsive secure websites.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack  top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack  bottom">
                    <img src={project4} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;