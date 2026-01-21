import React from "react";
import "./LeaderCard.css";

const LeaderCard = ({ name, role, img, link }) => {
  const initials = name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2);

  return (
    <a
      href={link}
      className="ds-leader-card"
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <div className="ds-leader-avatar">
        {img ? (
          <img src={img} alt={name} />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <div className="ds-leader-info">
        <h4 className="ds-leader-name">{name}</h4>
        <p className="ds-leader-role">{role}</p>
      </div>
    </a>
  );
};

export default LeaderCard;
