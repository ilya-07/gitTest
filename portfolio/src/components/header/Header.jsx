import React from "react";
import { CTA } from "./CTA";
import "./style.scss";
import { images } from "./../../assets/img";
import { HeaderScoial } from "./HeaderScoial";

export const Header = () => (
  <header className="header">
    <div className="container header__container">
      <h5>hallo, I'm</h5>
      <h1>Ilya</h1>
      <h5 className="text-light">Front-end Developer</h5>
      <HeaderScoial />
      <CTA />
      <div class="me">
        <img src={images.me} alt="" />
      </div>
      <a className="scroll__down" href="#contact">
        scroll Down
      </a>
    </div>
  </header>
);
