import { useState, useRef } from "react";

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
  const [billInputs, setBillInputs] = useState({
    value: 0,
    selfExpense: 0,
    billPayer: "You",
  });
  const [selectedFriend, setSelectedFriend] = useState("");

  let friendExpense = useRef("NaN");

  function handleNewValue(event) {
    setBillInputs({ ...billInputs, value: +event.target.value });
    friendExpense.current = calculateFriendExpense(
      +event.target.value,
      billInputs.selfExpense
    );
  }

  function handleNewSelfExpense(event) {
    setBillInputs({ ...billInputs, selfExpense: +event.target.value });
    friendExpense.current = calculateFriendExpense(
      billInputs.value,
      +event.target.value
    );
  }

  function calculateFriendExpense(totalBill, ownExpense) {
    const remainingExpense = totalBill - ownExpense;
    if (remainingExpense <= 0) return NaN;
    else return remainingExpense;
  }

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

  function openFriend(event) {
    setSelectedFriend(event.target.value);
  }

  return (
    <div className="content">
      <section id="left">
        <FriendList friends={friends} selectFriend={openFriend} />
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
        {selectedFriend && (
          <BillForm
            billDetails={billInputs}
            handleValue={handleNewValue}
            handleSelfExpense={handleNewSelfExpense}
            friendExpenseRef={friendExpense}
            handlePayer={(event) => {
              return setBillInputs({
                ...billInputs,
                billPayer: event.target.value,
              });
            }}
            currentFriend={selectedFriend}
          />
        )}
      </section>
    </div>
  );
}
