import { useState } from "react";

import FriendList from "./components/FriendList.jsx";
import AddNewFriendForm from "./components/AddNewFriendForm.jsx";
import BillForm from "./components/BillForm.jsx";

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
  const [newImgURL, setNewImgURL] = useState(
    "https://i.pravatar.cc/60?{img=48}"
  );

  // TODO: Can probably improve this with a useReducer() function
  const [billDetails, setBillDetails] = useState({
    value: 0,
    selfExpense: 0,
    billPayer: "You",
  });

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
    <div className="content">
      <section id="left">
        <FriendList friends={friends} />
        <AddNewFriendForm
          // function to display new friend name in input field
          handleName={(event) => setNewName(event.target.value)}
          // link to state which saves the current new friend name
          newFriendName={newName}
          // function to display new friend image in input field
          handleImage={(event) => setNewImgURL(event.target.value)}
          // link to state which saves the current new friend image
          newFriendImage={newImgURL}
          // function to add the new friend details to the friend list state
          handleNewFriend={() => addNewFriend(newName, newImgURL)}
        />
      </section>
      <section id="right">
        <BillForm />
      </section>
    </div>
  );
}
