import {
  get_employee,
  add_employee,
  add_salary,
  reduce_salary,
} from "../constant/employeeConstant";

const listEmployee = [
  {
    empId: 1,
    fullName: "NaufalA",
    salary: 1000,
  },
  {
    empId: 2,
    fullName: "adams",
    salary: 2000,
  },
  {
    empId: 3,
    fullName: "Jats",
    salary: 5000,
  },
];

//kondisi awal
const initState = {
  employees: [...listEmployee],
  totalSalary: 0,
};
const emReducer = (state = initState, action) => {
  switch (action.type) {
    case get_employee:
      return { ...state };
    case add_employee:
      return tambahEmployee(state, action);
    case add_salary:
      return tambahGaji(state, action);
    case reduce_salary:
      return kurangGaji(state, action);
    default:
      return state;
  }
};
//payload untuk request
const tambahEmployee = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    employees: [...state.employees, payload],
    totalSalary: state.employees.reduce((sum, acc) => sum + acc.salary, 0),
  };
};
const tambahGaji = (state, action) => {
  const { payload } = action;
  state.employees = state.employees.map((employee) => {
    if (employee.empId !== payload.id) return employee;
    employee.salary += 500;
    return employee;
  });
  return { ...state };
};

const kurangGaji = (state, action) => {
  const { payload } = action;
  state.employees = state.employees.map((employee) => {
    if (employee.empId !== payload.id) {
      return employee;
    } else {
      employee.salary -= 500;
      return employee;
    }
  });
  return { ...state };
};
export default emReducer;
