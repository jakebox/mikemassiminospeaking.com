import React, { forwardRef } from "react";

import testimonials from "../data/speakerTestimonials.yml";

function TestimonialSection({ testimonial }) {
  return (
    <div className="md:flex gap-16 my-10 justify-center items-center">
      <div className="max-h-48 mb-4 md:mb-0 w-48 flex justify-center items-center min-w-32">
        <img src={testimonial.image} className="object-contain h-full w-full" alt={testimonial.author} />
      </div>
      <div className="flex-auto">
        <p className="text-lg italic" dangerouslySetInnerHTML={{ __html: testimonial.quote }}></p>
        <h3 className="mt-4 text-xl">— {testimonial.author}</h3>
      </div>
    </div>
  );
}

const Testimonials = forwardRef((props, ref) => (
  // <div className="bg-gradient-to-r from-[#c3c1d9] to-[#2F5296] text-slate-100">
  <div ref={ref} className="pt-4 pb-4 md:pt-10 md:pb-10 mx-5 md:mx-16 xl:mx-24 2xl:mx-36">
    <h2 className="font-exo text-4xl md:text-[48px] font-semibold mb-8 mt-2 uppercase" id="summary">
      Testimonials
    </h2>
    <div className="mx-8">
      {testimonials.map((t, idx) => {
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
