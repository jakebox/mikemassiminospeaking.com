// import React from "react";

// const sections = [
//   {
//     name: "Summary",
//     id: "summary",
//   },
//   {
//     name: "Speaking Videos",
//     id: "videos",
//   },
//   {
//     name: "Speech Descriptions",
//     id: "speeches",
//   },
//   {
//     name: "Testimonials",
//     id: "testimonials",
//   },
//   {
//     name: "Featured Media",
//     id: "media",
//   },
// ];

// const handleScroll = (ref) => {
//   window.scrollTo({
//     top: ref.offsetTop,
//     left: 0,
//     behavior: "smooth",
//   });
// };

// function Navbar({ testRef }) {
//   return (
//     <div className="bg-slate-900 text-white sticky top-[-0.5px]">
//       <ul className="flex gap-3 md:gap-6 justify-center items-center text-center h-14 text-sm md:text-xl 2xl:text-2xl">
//         {sections.map((s, i) => {
//           return (
//             <li key={i}>
//               <a href={s.id} onClick={() => handleScroll(testRef.current)}>{s.name}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";

const sections = [
  { name: "Summary", id: "summary" },
  { name: "Speaking Videos", id: "videos" },
  { name: "Speech Descriptions", id: "speeches" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Featured Media", id: "media" },
];

const handleScroll = (ref) => {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 10,
      left: 0,
      behavior: "smooth",
    });
  }
};

function Navbar({ testRef }) {
  return (
    <div className="bg-slate-900 text-white sticky top-[-0.5px]">
      <ul className="flex gap-3 md:gap-6 justify-center items-center text-center h-14 text-sm md:text-xl 2xl:text-2xl">
        {sections.map((s, i) => (
          <li key={i}>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleScroll(testRef);
              }}
            >
              {s.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
