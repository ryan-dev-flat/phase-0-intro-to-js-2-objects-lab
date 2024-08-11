// Define the 'employee' object
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

// Define the 'updateEmployeeWithKeyAndValue()' function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = { ...employee }
    newEmployee[key] = value;
    return newEmployee
}

// Define the 'destructivelyUpdateEmployeeWithKeyAndValue()' function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

// Define the 'deleteFromEmployeeByKey()' function
function deleteFromEmployeeByKey(employee, key) {
    let newObj = { ...employee };
    delete newObj[key];
    return newObj;
}

// Define the 'destructivelyDeleteFromEmployeeByKey()' function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

