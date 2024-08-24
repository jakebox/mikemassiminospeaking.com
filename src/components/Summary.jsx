import React from "react";

const summaryText = [
  "Mike Massimino is a four-time spacewalker on two missions to the Hubble Space Telescope, including the final Hubble servicing mission which has been called the most dangerous and complex mission in space shuttle history. But he is more than an astronaut – he is a recurring character on The Big Bang Theory, a bestselling author, an engineering professor, an MIT Ph.D, and a popular guest on news and late-night television programs.",
  "Mike uses humor and his unique storytelling ability to inspire audiences to identify the passion in their work, use teamwork and innovation to solve problems, provide leadership in the face of adversity and change, and never give up when pursuing a goal. Mike has written 3 books including his NY Times Bestselling memoir Spaceman, and his most recent book Moonshot: A NASA Astronaut’s Guide to Achieving the Impossible which distills stories and insights from NASA into an actionable guide for success in business and in life. Mike is clear, “We all have our own personal “moon shots” we’d like to take in life, but as mission control will tell you, doing one big thing really means getting a thousand little things right along the way.”",
];

function Summary() {
  return (
    <div className="mx-16 mb-8 pt-6">
      <h2 className="text-4xl font-bold mb-6 uppercase" id="summary">
        Summary
      </h2>
      <div className="md:flex gap-6 lg:items-center">
        <div className="">
          <p className="text-lg leading-relaxed mb-4">{summaryText[0]}</p>
          <p className="text-lg leading-relaxed">{summaryText[1]}</p>
        </div>
        <div className="md:flex-none min-w-32 mt-4 md:mt-0">
          <img
            src="src/assets/images/Massimino-Credit-Jeffrey-Schifman-for-Columbia-Engineering.jpg"
            className="w-auto h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
