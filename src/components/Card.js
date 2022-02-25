import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.content.imageUrl} alt="Cat" className="card-img-top" />
      <div className="card-body">
        <h4>{props.content.title}</h4>
        <small className="text-muted">{props.content.published}</small>
      </div>
    </div>
  );
}
