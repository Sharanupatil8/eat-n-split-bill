import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend(props) {
  const [friendName, setFriendName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleInputFriendName = (e) => {
    setFriendName(e.target.value);
  };

  const handleInputImage = (e) => {
    setImage(e.target.value);
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID;
    if (friendName) {
      const newFriend = {
        name: friendName,
        balance: 0,
        id,
        image: `${image}?=${id}`,
      };
      props.addNewFriend(newFriend);
    }

    setFriendName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form onSubmit={handleAddFriend} className="form-add-friend">
      <label htmlFor="">🧑‍🤝‍🧑Friend name</label>
      <input
        value={friendName}
        onChange={handleInputFriendName}
        type="text"
        required
      />

      <label htmlFor=""> 🌆Image Url</label>
      <input value={image} onChange={handleInputImage} type="text" />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default FormAddFriend;
