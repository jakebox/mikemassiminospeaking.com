import React from "react";

// Navbar sections
const sections = [
  { name: "Top", id: "top", refKey: "topRef" },
  { name: "Summary", id: "summary", refKey: "summaryRef" },
  { name: "Speaking Videos", id: "videos", refKey: "speakingVideosRef" },
  { name: "Speech Descriptions", id: "speeches", refKey: "speechDescriptionsRef" },
  { name: "Featured Media", id: "media", refKey: "featuredMediaRef" },
  { name: "Testimonials", id: "testimonials", refKey: "testimonialsRef" },
];

// Scroll handler
const handleScroll = (ref) => {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 10, // Adjust for offset
      left: 0,
      behavior: "smooth",
    });
  }
};

function Navbar({ summaryRef, speakingVideosRef, speechDescriptionsRef, testimonialsRef, featuredMediaRef, topRef }) {
  const refs = { summaryRef, speakingVideosRef, speechDescriptionsRef, testimonialsRef, featuredMediaRef, topRef };

  return (
    <>
      <div className="bg-slate-900 text-white sticky top-[-0.5px] z-20">
        <ul className="flex px-3 gap-3 md:gap-6 justify-center items-center text-center h-14 text-sm md:text-xl 2xl:text-2xl">
          {sections.map((s, i) => (
            <li key={i}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(refs[s.refKey]); // Use the correct ref for each section
                }}
              >
                {s.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
