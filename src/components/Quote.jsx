import React from "react";

function Quote() {
  return (
    <div className=" text-white bg-slate-50">
      <div className="flex flex-col mx-4 md:items-center mt-5">
        <div className="bg-blue-700 px-5 lg:px-11 py-5 md:py-12 my-5 rounded-md border-l-[10px] border-blue-500 shadow-xl">
          <div className="text-3xl italic">"Change is Inevitable, Accept and Embrace It."</div>
          <div className="text-2xl mt-4 font-semibold">- Mike Massimino</div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
