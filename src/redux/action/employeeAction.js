import * as actionMethod from "../constant/employeeConstant";

export const getEmployee = () => ({
  type: actionMethod.get_employee,
});
//payload biar ada id
export const addEmployee = (payload) => ({
  type: actionMethod.add_employee,
  payload,
});

export const addSalary = (payload) => ({
  type: actionMethod.add_salary,
  payload,
});

export const reduceSalary = (payload) => ({
  type: actionMethod.reduce_salary,
  payload,
});
