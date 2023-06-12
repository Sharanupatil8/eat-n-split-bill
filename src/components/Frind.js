import React from "react";
import Button from "./Button";

function Friend(props) {
  const isSelected = props.friend?.id === props.selectedFriend?.id;
  console.log(props.showSplitBill);
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={props.friend.image} alt={props.friend.name} />
      <h3>{props.friend.name}</h3>
      {props.friend.balance < 0 && (
        <p className="red">
          You owe {props.friend.name} {Math.abs(props.friend.balance)}
        </p>
      )}
      {props.friend.balance > 0 && (
        <p className="green">
          {props.friend.name} owes you {Math.abs(props.friend.balance)}
        </p>
      )}

      {props.friend.balance === 0 && <p>you are even</p>}

      <Button onClick={() => props.showSplitBill(props.friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
