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
        src="src/assets/images/in_space/sts109-328-018_orig.jpg"
        className="w-full h-48 lg:h-64 object-cover object-center rounded-lg shadow-md"
        alt="Space Image 1"
      />
      <img
        src="src/assets/images/Massimino-Credit-Jeffrey-Schifman-for-Columbia-Engineering.jpg"
        className="w-full h-48 lg:h-64 object-cover object-top rounded-lg shadow-md"
        alt="Space Image 2"
      />
      <img
        src="src/assets/images/in_space/s125e009381_orig.jpg"
        className="w-full h-48 lg:h-64 object-cover object-bottom rounded-lg shadow-md"
        alt="Space Image 3"
      />
      <img
        src="src/assets/images/in_space/S109E5386_orig.jpg"
        className="w-full h-48 lg:h-64 object-cover object-top rounded-lg shadow-md"
        alt="Space Image 4"
      />
    </div>
  );
}

function SpeaksAbout() {
  return (
    <ul className="leading-relaxed md:leading-[1.5em] text-xl md:text-3xl inline-block">
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

export default function Hero() {
  return (
    <div className="text-center text-white">
      <div className="min-h-12 md:min-h-20 lg:min-h-24 xl:min-h-28 bg-slate-100">
        <div className="flex justify-center items-center absolute insert-x-0 top-0">
          <img src="src/assets/images/header2.png" className="w-3/5 md:w-2/5" />
        </div>
      </div>
      {/* <h1 className="text-5xl md:text-7xl font-extrabold uppercase">Mike Massimino</h1> */}
      <div className="bg-gradient-to-b from-black via-indigo-900 to-blue-900 py-9">
        <HeaderImages />
        <div className="font-[420] text-xl md:text-3xl px-6 mt-6 text-slate-200">
          <Taglines />
        </div>
      </div>
      <div className="bg-slate-50 text-blue-700 py-7 px-5">
        <h2 className="font-exo text-3xl md:text-[48px] font-semibold uppercase mb-7">Speaks About</h2>
        <SpeaksAbout />
      </div>
    </div>
  );
}
