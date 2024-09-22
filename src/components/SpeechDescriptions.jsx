import React from "react";

import speeches from "../data/speeches.yml";

const SpeechDescriptions = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="mx-5 md:mx-16 xl:mx-24 2xl:mx-36">
      <h2 className="font-exo text-4xl md:text-[48px] text-blue-700 font-semibold mb-6 mt-2 uppercase" id="summary">
        Speech Descriptions
      </h2>
      <p className="text-lg">
        Mike never gives the same talk twice, and enjoys working with each client to craft a talk that will include
        stories that will hit the mark for their event. Here are a few examples:
      </p>
      <div className="">
        {speeches.map((speech, idx) => {
          return (
            <div key={idx}>
              <h3 className="text-2xl mt-7 mb-1 font-semibold text-blue-900">{speech.title}</h3>
              <h4 className="text-xl italic mb-3 text-blue-900">{speech.subtitle}</h4>
              <p className="text-lg leading-relaxed mb-7 text-slate-800">{speech.body}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default SpeechDescriptions;
