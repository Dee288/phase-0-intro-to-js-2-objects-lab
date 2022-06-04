const employee ={
    name: 'lee',
    streetAddress: '11 Broatway',
}
console.log(employee)

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee};
  employees[key] = value;
  return employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
      employee.streetAddress = "12 Broadway";
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

