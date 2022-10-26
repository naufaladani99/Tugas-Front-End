import React, { useState } from "react"; // untuk menampung data dari data statis

export default function Employee() {
  const employeeList = [
    {
      id: 1,
      name: "naufal",
      address: "Tangerang",
      salary: 1000,
    },
    {
      id: 2,
      name: "kipli",
      address: "Sulteng",
      salary: 50,
    },
    {
      id: 3,
      name: "adamsskuy",
      address: "batam",
      salary: 1,
    },
  ];

  const [employees, setEmployee] = useState([...employeeList]); //di dalam const bebas nama var nya wajib 2
  // id untuk membedakan id mana yg mau di tambah gajinya
  // map untuk memanggil this.id
  const addSalary = (id) => {
    const employeeMap = employees.map((employee) => {
      if (id !== employee.id) {
        return employee;
      } else {
        employee.salary += 500;
        return employee;
      }
    });
    setEmployee(employeeMap); // memanggil fungsi set employee
  };

  const reduceSalary = (id) => {
    const employeeMap = employees.map((employee) => {
      if (id !== employee.id) {
        return employee;
      } else {
        employee.salary -= 500;
        return employee;
      }
    });
    setEmployee(employeeMap); // memanggil fungsi set employee
  };
  return (
    <div>
      {employees.map((employee) => {
        return (
          /*untuk primary key*/
          <div key={employee.id}>
            <p>No.{employee.id}</p>
            <p>Nama:{employee.name}</p>
            <p>Alamat:{employee.address}</p>
            <p>Gaji:{employee.salary}</p>
            <button onClick={() => addSalary(employee.id)}>➕GAJI</button>
            <button onClick={() => reduceSalary(employee.id)}>➖GAJI</button>
          </div>
        );
      })}
    </div>
  );
}
