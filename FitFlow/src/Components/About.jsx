import React from "react";
import "./About.css"; // Import CSS for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About <span className="highlight">FitFlow</span></h1>
        <p>Your personalized health & wellness companion.</p>
        <p>FitFlow helps you achieve your fitness goals with tailored workouts, nutrition guidance, and health tracking.</p>
      </div>
    </div>
  );
}

export default About;
