import Hero from "./components/Hero";
import CompaniesScroller from "./components/CompaniesScroller";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Videos from "./components/Videos";
import SpeechDescriptions from "./components/SpeechDescriptions";

export default function App() {
  return (
    <div className="bg-slate-50">
      <Hero />
      <CompaniesScroller />
      <Quote />
      <Navbar />
      <Summary />
      <Videos />
      <SpeechDescriptions />
    </div>
  );
}
