export default function BillForm() {
  return (
    <div className="bill_form">
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
    </div>
  );
}
