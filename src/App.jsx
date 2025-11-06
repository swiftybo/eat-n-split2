import { useState } from "react";

import FriendList from "./components/FriendList.jsx";
import AddNewFriendForm from "./components/AddNewFriendForm.jsx";

const firstFriends = [
  {
    id: 282,
    name: "Anthony",
    img: "https://i.pravatar.cc/60?{img=7}",
    balance: -7,
  },
  {
    id: 93,
    name: "Sarah",
    img: "https://i.pravatar.cc/60?{img=38}",
    balance: 20,
  },
  {
    id: 389,
    name: "Clark",
    img: "https://i.pravatar.cc/60?{img=22}",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(firstFriends);

  const [newName, setNewName] = useState("");
  const [newImgURL, setNewImgURL] = useState("");

  function addNewFriend(newFriendName, newFriendImg) {
    const newFriend = {
      id: crypto.randomUUID(),
      name: newFriendName,
      img: newFriendImg,
      balance: 0,
    };
    const newFriendsList = [...friends, newFriend];
    setFriends(newFriendsList);
    setNewName("");
    setNewImgURL("");
  }

  return (
    <>
      <FriendList friends={friends} />
      <AddNewFriendForm
        handleName={(event) => setNewName(event.target.value)}
        newFriendName={newName}
        handleImage={(event) => setNewImgURL(event.target.value)}
        newFriendImage={newImgURL}
        handleNewFriend={() => addNewFriend(newName, newImgURL)}
      />
    </>
  );
}
