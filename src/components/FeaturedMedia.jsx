import React from "react";

import media from "../data/featuredMedia.yml";

function NewspaperCard({ title, link, image }) {
  return (
    <div className="flex flex-col justify-between">
      <h4 className="text-center text-lg font-exo mb-3 italic hover:text-sky-200">
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
    <li className="text-lg xl:text-xl xl:mt-2">
      <a href={link} className="underline text-blue-300 hover:text-sky-200">
        {bullet}
      </a>
    </li>
  );
}

function MoreContent() {
  const content = media.more_content;

  return (
    <div className="md:flex gap-6 items-start">
      {/* Left Side: List */}
      <div className="md:w-2/3">
        <ul className="list-disc ml-8">
          {content.map((item, index) => (
            <ContentLink key={index} bullet={item.bullet} link={item.link} />
          ))}
        </ul>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/3 flex justify-center mt-4 md:mt-0 mb-4 md:mb-0">
        <img
          src="assets/images/speaking_2.jpg"
          className="w-auto h-[300px] object-cover rounded-md shadow-md"
          alt="Visual Interest"
        />
      </div>
    </div>
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

function ClipCard({ title, link, image }) {
  return (
    <article className="flex flex-col items-center bg-gray-900 bg-opacity-50 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Title */}
      <h4 className="text-center text-lg font-exo mb-3 italic">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-sky-200">
          {title}
        </a>
      </h4>

      {/* Image Container */}
      <div className="relative w-full h-64 2xl:h-72 z-10">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {/* Image */}
          <img src={image} className="w-full h-full object-cover rounded-md" alt={title} />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-800 opacity-75 p-3 rounded-full shadow-lg">
              {/* SVG Play Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </button>
          </div>
        </a>
      </div>
    </article>
  );
}

function BBT() {
  const bbt = media.bbt;

  return (
    <div className="text-slate-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {bbt.map((card) => (
          <ClipCard key={card.id} title={`The Big Bang Theory: ${card.title}`} link={card.link} image={card.image} />
        ))}
      </div>
    </div>
  );
}

const FeaturedMedia = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} class="bg-gradient-to-r from-slate-700 via-indigo-600 to-blue-600 py-12">
      <div className="mx-5 md:mx-16 xl:mx-24 2xl:mx-48 text-slate-100">
        <h2 className="font-exo text-4xl md:text-[48px] text-slate-100 font-semibold mb-8 mt-2 uppercase" id="summary">
          Featured Media
        </h2>
        <h2 className="text-3xl font-exo mb-8 ">In Print</h2>
        <InPrint />
        <h2 className="text-3xl font-exo mb-8 mt-10">Books</h2>
        <Books />
        <h2 className="text-3xl font-exo mb-8 mt-10">More Content</h2>
        <MoreContent />
        <h2 className="text-3xl font-exo mb-8 mt-10">
          Recurring role as himself on <span className="italic">The Big Bang Theory</span>
        </h2>
        <BBT />
      </div>
    </div>
  );
});

export default FeaturedMedia;
