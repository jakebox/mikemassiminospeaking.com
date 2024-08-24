import React from "react";

const videos = [
  {
    name: "Intro Video for Your Event",
    image: "src/assets/images/hero/mike-massimino.jpg",
    url: "https://player.vimeo.com/video/334527924",
  },
  {
    name: "Recognizing the Passion in Your Work",
    image: "src/assets/images/hero/mike-massimino.jpg",
    url: "https://player.vimeo.com/video/673766358",
  },
  {
    name: "Persistence when Pursuing a Goal",
    image: "src/assets/images/hero/mike-massimino.jpg",
    url: "https://player.vimeo.com/video/673758300",
  },
  {
    name: "Resilience in the Face of Adversity",
    image: "src/assets/images/hero/mike-massimino.jpg",
    url: "https://player.vimeo.com/video/996710486",
  },
  {
    name: "Accepting Organizational & Technological Change",
    image: "src/assets/images/hero/mike-massimino.jpg",
    url: "https://player.vimeo.com/video/998000697",
  },
];

function VideoCard({ video }) {
  const url = video.url + "?title=0&byline=0&portrait=0&sidedock=0";
  return (
    <div className="">
      <iframe src={url} allowfullscreeen="true" className="w-80 md:w-96 aspect-video"></iframe>
      <div className="bg-slate-800 w-80 md:w-96 px-3 py-2">
        <h4 className="text-lg font-light mt-2 text-left opacity-100">
          <a href={video.url}>{video.name}</a>
        </h4>
      </div>
    </div>
  );
}

function Videos() {
  return (
    <div className="bg-gradient-to-r from-[#64617D] to-[#2F5296]">
      <div className="md:mx-16 mb-12 pt-5 pb-8 text-center text-white">
        <h2 className="font-exo text-5xl font-semibold mb-3 uppercase" id="videos">Mike Massimino Videos</h2>
        <h3 className="text-2xl italic mb-6">Get a taste of what Mike Massimino brings to the stage</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-3 gap-x-12 2xl:px-36">
          <VideoCard video={videos[0]} />
          <VideoCard video={videos[1]} />
          <VideoCard video={videos[2]} />
          <VideoCard video={videos[3]} />
          <VideoCard video={videos[4]} />
        </div>
      </div>
    </div>
  );
}

export default Videos;
