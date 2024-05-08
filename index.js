// Define the 'employee' object
let employee = {
    name: "Employee Name",
    streetAddress: "123 Main St"
};

// Define the 'updateEmployeeWithKeyAndValue()' function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Define the 'destructivelyUpdateEmployeeWithKeyAndValue()' function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
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

