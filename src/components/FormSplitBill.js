import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  const handleBill = (e) => {
    setBill(Number(e.target.value));
  };
  const handlePaidByUser = (e) => {
    setByUser(
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
    );
  };
  const handleWhoIsPaying = (e) => {
    setWhoIsPaying(Number(e.target.value));
  };

  const handleBillSplit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form onSubmit={handleBillSplit} className="form-split-bill">
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label htmlFor=""> 💰Bill value</label>
      <input type="text" value={bill} onChange={handleBill} />

      <label htmlFor="">🙎 Your expenses</label>
      <input type="text" value={paidByUser} onChange={handlePaidByUser} />

      <label htmlFor=""> 🙎 {selectedFriend.name} expense </label>
      <input type="text" value={paidByFriend} disabled />

      <label htmlFor=""> 🤑 who is paying the bill </label>
      <select value={whoIsPaying} onChange={handleWhoIsPaying}>
        <option value="user"> you</option>
        <option value="friend"> {selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
