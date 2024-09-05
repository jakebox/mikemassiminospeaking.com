import React from "react";

import media from "../data/featuredMedia.yml";

function NewspaperCard({ title, link, image }) {
  return (
    <div className="flex flex-col justify-between">
      <h4 className="text-center text-lg font-exo mb-3 italic">
        <a href={link}>{title}</a>
      </h4>
      <div className="flex items-center justify-center">
        <a href={link} target="_blank">
          <img src={image} className="h-64 2xl:h-72 w-auto" alt={title} />
        </a>
      </div>
    </div>
  );
}

function ContentLink({ bullet, link }) {
  return (
    <li className="text-md xl:text-lg">
      <a href={link} className="underline text-blue-300">
        {bullet}
      </a>
    </li>
  );
}

function MoreContent() {
  const content = media.more_content;

  return (
    <ul className="list-disc ml-8">
      {content.map((item, index) => (
        <ContentLink key={index} bullet={item.bullet} link={item.link} />
      ))}
    </ul>
  );
}

function InPrint() {
  const newspaperCards = media.newspaper_cards;

  return (
    <div className="text-slate-100">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {newspaperCards.map((card, index) => (
          <NewspaperCard key={index} title={card.title} link={card.link} image={card.image} />
        ))}
      </div>
    </div>
  );
}

function Books() {
  const bookCards = media.book_cards;

  return (
    <div className="text-slate-100">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-32">
        {bookCards.map((card, index) => (
          <NewspaperCard key={index} title={card.title} link={card.link} image={card.image} />
        ))}
      </div>
    </div>
  );
}

function FeaturedMedia() {
  return (
    <div class="bg-gradient-to-r from-slate-700 via-indigo-600 to-blue-700 py-12">
      <div className="mx-5 md:mx-16 xl:mx-24 2xl:mx-48 text-slate-100">
        <h2 className="font-exo text-4xl md:text-[48px] text-slate-100 font-semibold mb-8 mt-2 uppercase" id="summary">
          Featured Media
        </h2>
        <h2 className="text-3xl font-exo mb-6 ">In Print</h2>
        <InPrint />
        <h2 className="text-3xl font-exo mb-6 mt-8">Books</h2>
        {/* <h3 className="text-xl text-slate-300 mb-5">Mike is a New York Times best-selling author.</h3> */}
        <Books />
        <h2 className="text-3xl font-exo mb-6 mt-8">More Content</h2>
        <MoreContent />
      </div>
    </div>
  );
}

export default FeaturedMedia;
