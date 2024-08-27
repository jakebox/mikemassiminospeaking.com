import Hero from "./components/Hero";
import CompaniesScroller from "./components/CompaniesScroller";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Videos from "./components/Videos";
import SpeechDescriptions from "./components/SpeechDescriptions";
import Testimonials from "./components/Testimonials";
import FeaturedMedia from "./components/FeaturedMedia";

import { useRef } from "react";

export default function App() {
  const testimonialsRef = useRef(null);

  return (
    <div className="bg-slate-50">
      <Hero />
      <CompaniesScroller />
      <Quote />
      <Navbar testRef={testimonialsRef} />
      <Summary />
      <Videos />
      <SpeechDescriptions />
      <FeaturedMedia />
      <Testimonials ref={testimonialsRef} />
    </div>
  );
}
