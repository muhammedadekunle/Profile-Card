import React from "react";
import Twitter from "../Images/Twitter Icon.svg";
import Facebook from "../Images/Facebook Icon.svg";
import Instagram from "../Images/Instagram Icon.svg";
import Linkedin from "../Images/Linkedin Icon.svg";
import Github from "../Images/GitHub Icon.svg";

export default function Main() {
  return (
    <footer className="footer">
      <ul className="footer-ul">
        <li>
          <a href="https://twitter.com/muhammedadek" target="_blank">
            <img src={Twitter} alt="Twitter Logo" />
          </a>
        </li>
        <li>
          <a
            href="https://web.facebook.com/profile.php?id=100073541983849"
            target="_blank"
          >
            <img src={Facebook} alt="Facebook Icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/muhammed140332/" target="_blank">
            <img src={Instagram} alt="Instagram Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/muhammed-adekunle/"
            target="_blank"
          >
            <img src={Linkedin} alt="Linkedin Icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/muhammedadekunle" target="_blank">
            <img src={Github} alt="Github Icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
