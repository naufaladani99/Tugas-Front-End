import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../form/FormInput";
import {
  getEmployee,
  addEmployee,
  addSalary,
  reduceSalary,
} from "../redux/action/employeeAction";

//useState untuk set nilai awal dari suatu form
export default function EmployeeRedux() {
  const dispatch = useDispatch(); // memanggil action pada redux
  const emp = useSelector((state) => state.employees);
  const total = useSelector((state) => state.totalSalary);
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState({
    fullName: undefined,
    salary: 0,
  });

  const onSubmit = (event) => {
    console.log("submit");
    event.preventDefault(); // agar browser tidak terReload
    const payload = {
      empId: Math.round(Math.random() * 10),
      fullName: value.fullName,
      salary: Number(value.salary),
    };
    dispatch(addEmployee(payload));
    setDisplay(false);
  };

  console.log(emp);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    if (e.target.name === "fullname") {
      value.fullName = e.target.value;
      setValue(value);
    }

    if (e.target.name === "salary") {
      value.salary = e.target.value;
      setValue(value);
    }
  };
  return (
    <div>
      <button onClick={() => setDisplay(true)}>Add Employee</button>

      {display ? (
        <FormInput onSubmitForm={onSubmit} handleOnChange={handleChange} />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>EMPLOYEE ID</th>
                <th>FULL NAME</th>
                <th>SALARY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {(emp || []).map((emp) => {
                return (
                  <tr key={emp.empId}>
                    <td>EMP ID: {emp.empId}</td>
                    <td>FULL NAME: {emp?.fullName}</td>
                    <td>SALARY: {emp.salary}</td>
                    <td>
                      <button
                        onClick={() => dispatch(addSalary({ id: emp.empId }))}
                      >
                        ➕GAJI
                      </button>
                      <button
                        onClick={() =>
                          dispatch(reduceSalary({ id: emp.empId }))
                        }
                      >
                        ➖GAJI
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>TOTAL SALARY:{total}</h3>
        </>
      )}
    </div>
  );
}
