import FriendIcon from "./FriendIcon.jsx";

export default function FriendList({ friends, selectFriend, chosenFriend }) {
  return (
    <>
      {friends.map((friend) => (
        <FriendIcon
          key={friend.id}
          name={friend.name}
          img={friend.img}
          balance={friend.balance}
          handleClick={selectFriend}
          currentFriend={friend.name === chosenFriend}
        />
      ))}
    </>
  );
}
