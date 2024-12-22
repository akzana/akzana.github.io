import React from "react";

function Education({ item }) {
  return (
    <div className="timeline-item">
      <div className="item-header">
        <img src={item.image} alt={item.school} className="item-image" />
        <div className="item-info">
          <h4 className="h4 timeline-item-title">{item.school}</h4>
          <h5 className="h5 timeline-item-position">{item.department}</h5>
          <span>{item.date}</span>
        </div>
      </div>
      <p className="timeline-text">{item.desc}</p>
      <div className="spacer"></div>
    </div>
  );
}

export default Education;
