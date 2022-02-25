import React from "react";
import Card from "./components/Card";

export default function PrimaryCard() {
  return (
    <div className="py-4">
      <div className="container">
        <h4>The Posts</h4>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Card content={{
              imageUrl: "http://placekitten.com/g/300/200",
              title: "First Post",
              published: "2 Mar, 2022",
             }}
            />
          </div>
          <div className="col-md-4">
            <Card content={{
              imageUrl: "http://placekitten.com/300/200",
              title: "Second Post",
              published: "3 Jun, 2022",
             }}
            />
          </div>
          <div className="col-md-4">
            <Card content={{
              imageUrl: "http://placekitten.com/300/200",
              title: "Third Post",
              published: "8 Agu, 2022",
             }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
