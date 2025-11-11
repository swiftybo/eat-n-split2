export default function BillForm({
  billDetails,
  handleValue,
  handleSelfExpense,
  friendExpenseRef,
  handlePayer,
  currentFriend,
  handleBill,
}) {
  return (
    <form className="bill_form">
      <h3 className="bill_title">
        SPLIT A BILL WITH {currentFriend.toUpperCase()}
      </h3>
      <div className="form_field">
        <label className="bill_label">💰 Bill Value</label>
        <input
          className="bill_input"
          type="text"
          value={billDetails.value}
          onChange={handleValue}
        ></input>
      </div>
      <div className="form_field">
        <label className="bill_label">👦 Your expense</label>
        <input
          className="bill_input"
          type="text"
          value={billDetails.selfExpense}
          onChange={handleSelfExpense}
        ></input>
      </div>
      <div className="form_field">
        <label className="bill_label">🫂 {currentFriend}'s expense</label>
        <input
          className="bill_input"
          type="text"
          value={friendExpenseRef.current.toString()}
          disabled
        ></input>
      </div>
      <div className="form_field">
        <label className="bill_label">🤑 Who is paying the bill</label>
        <select
          className="bill_input"
          value={billDetails.billPayer}
          onChange={handlePayer}
        >
          <option value="You">You</option>
          <option value={currentFriend}>{currentFriend}</option>
        </select>
      </div>
      <button
        type="submit"
        className="profile_button"
        style={{
          position: "relative",
          left: "23rem",
          width: "30%",
          marginBottom: "2rem",
        }}
        onClick={handleBill}
      >
        Split Bill
      </button>
    </form>
  );
}
