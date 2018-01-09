import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
      <div className="card" onClick={() => props.markSys(props.index)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
          <p className="description"><strong>{props.name} by:{props.company}</strong></p>
        </div>
      </div>
);

export default FriendCard;
