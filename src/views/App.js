import React from "react";
import { Hero } from "../components/HeroSection/Hero";
import { AboutUsSection } from "../components/About/AboutUsSection";
import { ScheduleSection } from "../components/Schedule/ScheduleSection";
import { ContactSection } from "../components/Contact/ContactSection";
import { ReviewSection } from "../components/Review/ReviewSection";

const App = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUsSection />
      </section>
      <section id="schedule">
        <ScheduleSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="reviews">
        <ReviewSection />
      </section>
    </main>
  );
};

export default App;
