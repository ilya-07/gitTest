import React from "react";
import { images } from "./../../assets/img";
export const CTA = () => (
  <div className="cta">
    <a className="btn" href={images.cv} download>
      Downlad cv{" "}
    </a>
    <a className="btn btn-primary" href="#contact">
      Lets Talk
    </a>
  </div>
);
