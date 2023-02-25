import React from "react";
import Mail from "../Images/Mail.svg";

export default function Main() {
  return (
    <main>
      <h1 className="name">Muhammed Adekunle</h1>
      <h5 className="career">Frontend developer</h5>
      <h6 className="website">muhammedadekunle.website</h6>
      <button className="btn">
        <img src={Mail} alt="mail" />
        <span className="mail-text">Email</span>
      </button>
    </main>
  );
}
