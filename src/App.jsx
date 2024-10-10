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
import Footer from "./components/Footer";

export default function App() {
  const topRef = useRef(null);
  const summaryRef = useRef(null);
  const speakingVideosRef = useRef(null);
  const speechDescriptionsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const featuredMediaRef = useRef(null);

  return (
    <>
      <div className="bg-slate-50">
        <Hero ref={topRef} />
        <CompaniesScroller />
        <Quote />
        <Navbar
          topRef={topRef}
          summaryRef={summaryRef}
          speakingVideosRef={speakingVideosRef}
          speechDescriptionsRef={speechDescriptionsRef}
          testimonialsRef={testimonialsRef}
          featuredMediaRef={featuredMediaRef}
        />
        <Summary ref={summaryRef} />
        <Videos ref={speakingVideosRef} />
        <SpeechDescriptions ref={speechDescriptionsRef} />
        <FeaturedMedia ref={featuredMediaRef} />
        <Testimonials ref={testimonialsRef} />
        <p className="text-black text-center pb-5">
          <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>Back to Top</button>
        </p>
      </div>
      <Footer />
    </>
  );
}
