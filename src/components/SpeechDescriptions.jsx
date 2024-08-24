import React from "react";

const speeches = [
  {
    title: "Be Ready for the Future",
    subtitle: "Change is Inevitable, Accept and Embrace It",
    body: "Companies go through reorganizations and changes to grow their business and prepare for future opportunities in the changing marketplace. Often these transformations are met with resistance by team members who are happy with the way things are, but leadership needs to clearly communicate the benefits of these changes to gain buy- in. Mike relates changes in the space program to changes in today’s business world. During his career, NASA pivoted from working independently to embarking on global partnerships with the space faring countries of the world including Russia, and commercial partnerships with private space companies. Leadership made it clear that although many would be uncomfortable with these changes, they were needed to secure the future of space exploration, improve international relations, and stimulate a new space economy. Mike encourages audiences that although they may have an initial reluctance to accept change, they should embrace it as an opportunity for future greatness and success.",
  },
  {
    title: "Being Resilient and Adaptable in Challenging Times",
    subtitle: "When you think all hope is Lost, Find Another Way Around",
    body: "Sometimes forces out of our control can make moving forward difficult. In spite of our best efforts we often get knocked down repeatedly. But we need to find a way around that next obstacle. Mike encourages audiences: When the odds are against you, do it anyway. Mike’s dream of becoming an astronaut began when he was six years old watching Neil Armstrong take the first steps on the moon. The path to achieving this dream was wrought with unexpected challenges, failures, disappointments, and self-doubt. Mike was rejected three times by NASA including a medical disqualification which Mike overcame by teaching his eyes and brain to “see better.” His persistence paid off when he was selected to be an astronaut on his fourth try. This same resilience was needed after earning his astronaut wings to persevere through the setbacks, tragedies, and technical challenges that Mike experienced in his astronaut career. Mike stresses that as long as you keep trying, no matter the obstacles, achieving a goal is possible.",
  },
  {
    title: "The Team’s Success is Your Success",
    subtitle: "You Cannot do this Alone, You will Succeed or Fail as a Team",
    body: "An organization’s goals are only obtainable if everyone on the team works together. Individual accomplishments are needed, but the success of the team is most important. In our complex world, not everyone can be good at everything. But by pooling our abilities, we can be good at everything as a team. Mike conveys how he and his colleagues worked together with a culture of admitting mistakes and bringing forward concerns without worry of embarrassment or finger pointing. Providing help to teammates was not considered to be a burden, but rather a way to make the team stronger. When Mike broke a critical piece of equipment while repairing the Hubble Space Telescope during his final spacewalk, his team was there to help. Rather than blaming Mike, the ground control team and the astronauts in space worked together with him to come up with an innovative solution that saved the day and the mission. Although not every problem has an obvious solution, teamwork can help us with overcoming unforeseen challenges. Mike communicates to audiences how the NASA models for teamwork and leadership can be applied to the business world and in life. When you need help, reach out to your own “Mission Control Center,” and be “Mission Control” for others.",
  },
];

function SpeechDescriptions() {
  return (
    <div className="mx-5 md:mx-16 xl:mx-24 2xl:mx-36">
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
}

export default SpeechDescriptions;
