import { useState } from "react";

export default function AddNewFriendForm({
  handleName,
  handleImage,
  newFriendName,
  newFriendImage,
  handleNewFriend,
}) {
  const [currentState, setCurrentState] = useState(false);

  function handleClick() {
    setCurrentState((prevState) => !prevState);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "right",
      }}
    >
      {currentState && (
        <section className="friend_form">
          <div className="form_field">
            <label className="form_label">𐀪𐀪 Friend Name</label>
            <input
              className="form_input"
              onChange={handleName}
              value={newFriendName}
            />
          </div>
          <div className="form_field">
            <label className="form_label">🌅 Image URL</label>
            <input
              className="form_input"
              onChange={handleImage}
              value={newFriendImage}
            />
          </div>
          <button
            className="profile_button"
            style={{
              padding: "0.5rem",
              position: "relative",
              left: "16rem",
              width: "15rem",
              fontSize: "1.2rem",
            }}
            type="submit"
            onClick={handleNewFriend}
          >
            Add
          </button>
        </section>
      )}
      <button
        className="profile_button"
        style={{ width: "8rem", margin: "2rem" }}
        onClick={handleClick}
      >
        {currentState ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
