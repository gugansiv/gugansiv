import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="navbar">
        <div className="text-wrapper">Home</div>
        <div className="div">About</div>
        <div className="text-wrapper-2">Skills</div>
        <div className="text-wrapper-3">Projects</div>
      </div>
      <p className="portfolio">
        <span className="span">Port</span>
        <span className="text-wrapper-4">folio.</span>
      </p>
      <div className="text-wrapper-5">Contact</div>
    </div>
  );
};
