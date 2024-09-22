import React, { forwardRef } from "react";

import testimonials from "../data/speakerTestimonials.yml";

function TestimonialSection({ testimonial }) {
  return (
    <div className="md:flex gap-16 justify-center items-center mt-5 mb-3">
      <div className="flex justify-center items-center mb-4 md:mb-0 min-w-28 max-w-28 md:min-w-40 md:max-w-40 xl:min-w-48 xl:max-w-48">
        <img src={testimonial.image} className="object-contain" />
      </div>
      <div className="flex-auto">
        {testimonial.quotes.map((t, idx) => {
          return (
            <div key={idx}>
              <p className="text-lg italic" dangerouslySetInnerHTML={{ __html: t.quote }}></p>
              <h3 className="text-xl mt-3 mb-3">{t.author}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Testimonials = forwardRef((props, ref) => (
  // <div className="bg-gradient-to-r from-[#c3c1d9] to-[#2F5296] text-slate-100">
  <div ref={ref} className="pt-4 pb-4 md:pt-10 md:pb-10 mx-5 md:mx-16 xl:mx-24 2xl:mx-36">
    <h2 className="font-exo text-4xl text-blue-700 md:text-[48px] font-semibold mb-8 mt-2 uppercase" id="summary">
      Testimonials
    </h2>
    <div className="mx-8">
      {testimonials.testimonials.map((t, idx) => {
        return (
          <div key={idx}>
            <TestimonialSection testimonial={t} />
            <hr />
          </div>
        );
      })}
    </div>
  </div>
  // </div>
));

export default Testimonials;
