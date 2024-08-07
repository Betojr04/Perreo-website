import React from "react";
import "./AboutUsSection.css";

export const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            Join our perreo dance classes in Phoenix and immerse yourself in the
            vibrant world of Latin dance. Our experienced instructors will guide
            you through energetic routines, helping you improve your skills and
            confidence on the dance floor. Whether you're a beginner or an
            experienced dancer, our classes are designed to bring out the best
            in you. Come and be a part of our passionate dance community!
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://images.unsplash.com/photo-1466554934129-f71df54ebb27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhdGluJTIwZGFuY2luZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Dancing group"
          />
        </div>
      </div>
    </section>
  );
};
