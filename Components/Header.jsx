import React from "react";
import Profilephoto from "../Images/profile-image.jpg";

export default function Header() {
  return (
    <div className="profile-image">
      <img className="profile-photo" src={Profilephoto} alt="Profile Picture" />
    </div>
  );
}
