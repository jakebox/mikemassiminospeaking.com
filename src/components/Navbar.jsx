import React from "react";

const sections = [
  {
    name: "Summary",
    id: "summary",
  },
  {
    name: "Speaking Videos",
    id: "videos",
  },
  {
    name: "Speech Descriptions",
    id: "speeches",
  },
  {
    name: "Testimonials",
    id: "testimonials",
  },
  {
    name: "Featured Media",
    id: "media",
  },
];

function Navbar() {
  return (
    <div className="bg-slate-900 text-white sticky top-[-0.5px]">
      <ul className="flex gap-6 justify-center items-center h-14 text-xl 2xl:text-2xl">
        {sections.map((s, i) => {
          return (
            <li key={i}>
              <a href={`#${s.id}`}>{s.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
