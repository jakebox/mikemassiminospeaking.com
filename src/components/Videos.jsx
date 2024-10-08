import React from "react";

const videos = [
  {
    name: "Intro Video for Your Event",
    url: "https://player.vimeo.com/video/334527924",
  },
  {
    name: "Recognizing the Passion in Your Work",
    url: "https://player.vimeo.com/video/673766358",
  },
  {
    name: "Persistence when Pursuing a Goal",
    url: "https://player.vimeo.com/video/673758300",
  },
  {
    name: "Resilience in the Face of Adversity",
    url: "https://player.vimeo.com/video/996710486",
  },
  {
    name: "Accepting Organizational & Technological Change",
    url: "https://player.vimeo.com/video/998000697",
  },
  {
    name: "On Teamwork & Leadership",
    url: "https://player.vimeo.com/video/673764082",
  },
];

function VideosGrid() {
  const content = videos;

  return (
    <div className="grid sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-2 lg:gap-8 lg:gap-x-24 xl:grid-cols-3">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col justify-between mb-6">
          <a
            href={item.link}
            target="_blank"
            className="text-center text-md lg:text-lg underline text-sky-300 hover:text-sky-200 mb-2"
          >
            {item.name}
          </a>
          <div className="flex items-center justify-center">
            <iframe
              src={item.url}
              allowfullscreen="true"
              loading="lazy"
              className="aspect-video w-72 mb-3 sm:mb-5 sm:w-80 lg:w-96"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

const Videos = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-gradient-to-r from-[#64617D] to-[#2F5296]">
      <div className="md:mx-16 mb-12 pt-5 pb-8 text-center text-white">
        {/* Title Section */}
        <h2 className="font-exo text-5xl font-semibold mb-3 uppercase" id="videos">
          Mike Massimino Videos
        </h2>
        <h3 className="text-2xl italic mb-10">Get a taste of what Mike Massimino brings to the stage</h3>

        <VideosGrid />

      </div>
    </div>
  );
}
)

export default Videos;
