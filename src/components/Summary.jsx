import React from "react";

const summaryText = [
  "Mike Massimino is a four-time spacewalker on two missions to the Hubble Space Telescope, including the final Hubble servicing mission which has been called the most dangerous and complex mission in space shuttle history. But he is more than an astronaut – he is a recurring character on <i>The Big Bang Theory</i>, a bestselling author, an engineering professor, an MIT Ph.D, and a popular guest on morning shows, news programs and late-night television.",
  "Mike uses humor and his unique storytelling ability to inspire audiences to identify the passion in their work, use teamwork and innovation to solve problems, provide leadership in the face of adversity and change, and never give up when pursuing a goal. Mike has written 3 books including his NY Times Bestselling memoir <i>Spaceman</i>, and his most recent book <i>Moonshot: A NASA Astronaut’s Guide to Achieving the Impossible</i> which distills stories and insights from NASA into an actionable guide for success in business and in life. Mike is clear, “We all have our own personal “moon shots” we’d like to take in life, but as mission control will tell you, doing one big thing really means getting a thousand little things right along the way.”",
];

const Summary = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="pt-4 pb-4 md:pt-10 md:pb-10 mx-5 md:mx-16 xl:mx-24 2xl:mx-36">
      <h2 className="font-exo text-4xl md:text-[48px] text-blue-700 font-semibold mb-6 mt-2 uppercase" id="summary">
        Summary
      </h2>
      <div className="md:flex gap-6">
        <div className="">
          <p className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: summaryText[0] }}></p>
          <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: summaryText[1] }}></p>
        </div>
        <div className="md:flex-none min-w-32 mt-4 md:mt-0 mb-4 md:mb-0">
          <img
            src="assets/images/Massimino-Credit-Jeffrey-Schifman-for-Columbia-Engineering.jpg"
            className="w-auto h-[300px]"
          />
        </div>
      </div>
    </div>
  );
});

export default Summary;
