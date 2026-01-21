import React from "react";
import "./memberButton.css";

const MemberButton = ({ name, link }) => {
  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className="ds-member-btn"
    >
      <span className="ds-member-name">{name}</span>
      <span className="ds-member-arrow">↗</span>
    </a>
  );
};

export default MemberButton;
