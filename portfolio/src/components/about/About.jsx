import React from "react";
import "./style.scss";
import { images } from "./../../assets/img";
import { FaAward } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";
const cards = [
  {
    title: "Experience",
    exp: "3+ Years work experience",
    img: <FaAward className="about__icon" />,
  },
  {
    title: "Clients",
    exp: "200+ clients",
    img: <FaUserSecret className="about__icon" />,
  },
  {
    title: "Project",
    exp: "80+ project",
    img: <MdFolderSpecial className="about__icon" />,
  },
];
export const About = () => {
  return (
    <section id="about">
      <h5>Get to Now</h5>
      <h2>Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={images.meAbout} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {cards.map((el, i) => (
              <article className="about__card" key={i}>
                {el.img}
                <h5>{el.title}</h5>
                <small>{el.exp}</small>
              </article>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsa
            neque velit voluptate illum nostrum beatae, fuga recusandae!
            Architecto, incidunt a officia sit maxime voluptatum harum natus
            aspernatur corrupti repellendus!
          </p>
          <a className="btn btn-primary" href="#contact">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};
