import React from "react";
import Friend from "./Frind";

function FriendList({ friends, showSplitBill, selectedFriend }) {
  const handleBillSplit = (friend) => {
    showSplitBill(friend);
  };

  return (
    <ul>
      {friends.map((friend, index) => {
        return (
          <Friend
            friend={friend}
            showSplitBill={handleBillSplit}
            key={friend.id}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
