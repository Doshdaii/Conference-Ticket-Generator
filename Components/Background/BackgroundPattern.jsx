import React from "react";
import pattern_circle from "../../src/assets/images/pattern-circle.svg";
import pattern_lines from "../../src/assets/images/pattern-lines.svg";
import pattern_squiggly_lineD from "../../src/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import pattern_squiggly_top from "../../src/assets/images/pattern-squiggly-line-top.svg";

import './BackgroundPattern.css'

const BackgroundPattern = () => {
  return (
    <>
       <img src={pattern_lines} alt="" className="bg-decor decor-1" />
      <img src={pattern_circle} alt="" className="bg-decor decor-2" />
      <img src={pattern_squiggly_top} alt="" className="bg-decor decor-3" />
      <img src={pattern_squiggly_lineD} alt="" className="bg-decor decor-4" />
    </>
  );
};

export default BackgroundPattern;
