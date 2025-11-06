export default function BillForm() {
  return (
    <form className="bill_form">
      <h3 className="bill_title">SPLIT A BILL WITH X</h3>
      <div className="form_field">
        <label className="bill_label">💰 Bill Value</label>
        <input
          className="bill_input"
          type="text"
          // value={billDetails.value}
          // onChange={handleValue}
        ></input>
      </div>
      <div className="form_field">
        <label className="bill_label">👦 Your expense</label>
        <input
          className="bill_input"
          type="text"
          // value={billDetails.selfExpense}
          // onChange={handleSelfExpense}
        ></input>
      </div>
      <div className="form_field">
        <label className="bill_label">🫂 {name}'s expense</label>
        <input
          className="bill_input"
          type="text"
          // value={friendExpenseRef.current}
          disabled
        ></input>
      </div>
      <div className="form_field">
        <label className="bill_label">🤑 Who is paying the bill</label>
        <select
          className="bill_input"
          // value={targetedPayee}
          // onChange={handleTargetPayee}
        >
          <option value="You">You</option>
          <option value="Friend">Friend Name</option>
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
        // onClick={handleClick}
      >
        Split Bill
      </button>
    </form>
  );
}
