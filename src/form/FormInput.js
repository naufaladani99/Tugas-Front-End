import React from "react";

export default function FormInput(props) {
  const { onSubmitForm, handleOnChange } = props;
  return (
    <div>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <div>
          <label>FULL NAME: </label>
          <input
            type="text"
            name="fullname"
            placeholder="isi nama"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <div>
            <label>Salary: </label>
            <input
              type="text"
              name="salary"
              placeholder="gaji"
              onChange={(e) => handleOnChange(e)}
            ></input>
          </div>
        </div>
        <button type="submit">Tambah Employee</button>
      </form>
    </div>
  );
}
