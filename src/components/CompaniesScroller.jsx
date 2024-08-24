import React from "react";
import Marquee from "react-fast-marquee";

const companyLogos = [
  "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Google%20Logotype.svg",
  "https://cdn.worldvectorlogo.com/logos/fidelity-investment-1.svg",
  "https://cdn.worldvectorlogo.com/logos/roche.svg",
  "https://cdn.worldvectorlogo.com/logos/3m-2.svg",
  "https://cdn.worldvectorlogo.com/logos/united-health.svg",
  "https://cdn.worldvectorlogo.com/logos/du-pont-1.svg",
  "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo-1.svg",
  "https://cdn.worldvectorlogo.com/logos/hsbc-3.svg",
  "https://cdn.worldvectorlogo.com/logos/logo-amazon.svg"
];

function CompaniesScroller() {
  return (
    <Marquee speed="40" className="h-20 bg-slate-50">
      {companyLogos.map((m, i) => {
        return <img src={m} className="h-10 lg:h-11 w-auto ml-8 lg:ml-20 grayscale" />;
      })}
    </Marquee>
  );
}

export default CompaniesScroller;
