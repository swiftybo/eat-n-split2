export default function FriendIcon({ name, img, balance }) {
  let oweStatement = "";
  let oweClass = "";

  if (balance === 0) {
    oweStatement = `You and ${name} are even`;
    oweClass = "profile_statement";
  } else if (balance > 0) {
    oweStatement = `${name} owes you $${balance}`;
    oweClass = "profile_statement due";
  } else {
    oweStatement = `You owe ${name} $${Math.abs(balance)}`;
    oweClass = "profile_statement owe";
  }

  return (
    <div className="icon">
      <img className="profile_pic" src={img} alt={`${name} profile picture`} />
      <div className="profile_summary">
        <h2 className="profile_name">{name}</h2>
        <p className={oweClass}>{oweStatement}</p>
      </div>
      <button className="profile_button">Select</button>
    </div>
  );
}
