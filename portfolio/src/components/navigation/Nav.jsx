import React from "react";
import "./style.scss";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaUserAstronaut } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ImBook } from "react-icons/im";
import { RiServiceLine } from "react-icons/ri";

export const Nav = () => {
  const [active, setActive] = React.useState("home");
  const toActive = (el) => {
    setActive(el);
  };
  return (
    <nav>
      <a
        className={active === "home" ? "active" : null}
        onClick={() => toActive.call("", "home")}
        href="#"
      >
        <RiHomeHeartFill />
      </a>
      <a
        className={active === "about" ? "active" : null}
        onClick={() => toActive.call("", "about")}
        href="#about"
      >
        <FaUserAstronaut />
      </a>
      <a
        className={active === "experience" ? "active" : null}
        onClick={() => toActive.call("", "experience")}
        href="#experience"
      >
        <ImBook />
      </a>
      <a
        className={active === "services" ? "active" : null}
        onClick={() => toActive.call("", "services")}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        className={active === "contact" ? "active" : null}
        onClick={() => toActive.call("", "contact")}
        href="#contact"
      >
        <FiPhoneCall />
      </a>
    </nav>
  );
};
