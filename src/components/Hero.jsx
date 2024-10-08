import React from "react";

const text = [
  "Former NASA Astronaut",
  "New York Times Bestselling Author",
  "Columbia University Professor",
  "MIT Ph.D",
  "Media Personality",
  "First person to Tweet from space",
  "Expert commentator on network and cable news programs",
];

const speaksAbout = [
  "Teamwork & Team Building",
  "Leadership",
  "Motivation",
  "Resiliency",
  "Innovation & Problem Solving",
  "Overcoming Obstacles & Challenges",
  "Adapting to Organizational Change",
  "Incorporating AI in the workplace",
  "Building Trust in Your Organization",
  "Safety",
  "The Business of Commercial Spaceflight",
];

function HeaderImages() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
      <img
        src="assets/images/hero/1_spacewalk_closeup.jpg"
        className="w-full h-48 lg:h-64 object-cover rounded-lg shadow-md hover:scale-110"
        alt="Mike in space"
      />
      <img
        src="assets/images/hero/2_speaking.jpg"
        className="w-full h-48 lg:h-64 object-cover object-center rounded-lg shadow-md hover:scale-110"
        alt="Mike speaking"
      />
      <img
        src="assets/images/hero/3_letterman.jpg"
        className="w-full h-48 lg:h-64 object-cover object-top rounded-lg shadow-md hover:scale-110"
        alt="Mike with Letterman"
      />
      <img
        src="assets/images/hero/4_moonshot_cover.png"
        className="w-full h-48 lg:h-64 object-cover object-center rounded-lg shadow-md hover:scale-110"
        alt="Moonshot Cover"
      />
    </div>
  );
}

function SpeaksAbout() {
  return (
    <ul className="leading-relaxed md:leading-[1.5em] text-xl md:text-3xl inline-block 2xl:mb-4">
      {speaksAbout.map((m, i) => {
        return (
          <li key={i} className="ml-2 text-gray-700 inline-block font-[380]">
            {m}
            {i < speaksAbout.length - 1 && <span className="relative"> •</span>}
          </li>
        );
      })}
    </ul>
  );
}

function Taglines() {
  return (
    <ul className="leading-relaxed space-y-1">
      {text.map((m, i) => {
        return (
          <li key={i} className="inline-block mr-2">
            {m} {i < text.length - 1 && <span className="relative">|</span>}
          </li>
        );
      })}
    </ul>
  );
}

const Hero = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="text-center text-white">
      <div className="min-h-14 md:min-h-20 lg:min-h-24 xl:min-h-28 2xl:min-h-32 bg-slate-100">
        <div className="flex justify-center items-center absolute insert-x-0 top-0">
          <img src="assets/images/header2.png" className="w-2/3 md:w-2/5" />
        </div>
      </div>
      {/* <h1 className="text-5xl md:text-7xl font-extrabold uppercase">Mike Massimino</h1> */}
      <div className="bg-gradient-to-b from-black via-indigo-900 to-blue-900 py-9">
        <HeaderImages />
        <div className="font-[420] text-xl md:text-3xl px-6 mt-6 text-slate-100">
          <Taglines />
        </div>
      </div>
      <div className="bg-slate-50 text-blue-700 py-7 px-5">
        <h2 className="font-exo tracking-wide text-4xl md:text-[48px] font-semibold uppercase mb-7 2xl:mt-3 2xl:mb-9">
          Speaks About
        </h2>
        <SpeaksAbout />
      </div>
    </div>
  );
})

export default Hero;