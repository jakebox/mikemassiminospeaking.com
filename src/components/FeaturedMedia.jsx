import React from "react";

import media from "../data/featuredMedia.yml";

function NewspaperCard({ title, link, image }) {
  return (
    <div className="flex flex-col justify-between">
      <h4 className="text-center text-xl mb-3 underline">
        <a href={link}>{title}</a>
      </h4>
      <div className="flex items-center justify-center">
        <img src={image} className="h-80 2xl:h-96 w-auto" alt={title} />
      </div>
    </div>
  );
}

function InPrint() {
  const newspaperCards = media.newspaper_cards;

  return (
    <div className="text-slate-100">
      <h2 className="text-3xl font-exo mb-8">In Print</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newspaperCards.map((card, index) => (
          <NewspaperCard key={index} title={card.title} link={card.link} image={card.image} />
        ))}
      </div>
    </div>
  );
}

function FeaturedMedia() {
  return (
    <div class="bg-gradient-to-r from-slate-700 via-indigo-600 to-blue-700 py-12">
      <div className="mx-5 md:mx-16 xl:mx-24 2xl:mx-36">
        <h2 className="font-exo text-4xl md:text-[48px] text-slate-100 font-semibold mb-6 mt-2 uppercase" id="summary">
          Featured Media
        </h2>
        <InPrint />
      </div>
    </div>
  );
}

export default FeaturedMedia;
