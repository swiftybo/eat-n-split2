import FriendList from "./components/FriendList";

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
  return (
    <>
      <FriendList friends={firstFriends} />
    </>
  );
}
