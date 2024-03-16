// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  var employees = [];

  var choice = true;

  while (choice) {
    const firstName = prompt("Employee's first name"); 
    const lastName = prompt("Employee's last name");
    const salary = prompt("Employee's salary");

    var parsedSalary = parseFloat(salary);

    if (isNaN(parsedSalary)) {
      parsedSalary = 0;
    }

    const employee = {
      firstName: firstName, 
      lastName: lastName,
      salary: parsedSalary
    };

    employees.push(employee);

    choice = confirm("Do you want to continue?");
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  var total = 0;
  for(const employee of employeesArray){
    total += employee.salary;
  }
  
  const average = total / employeesArray.length;

  console.log(`number of employees ${employeesArray.length}`);
  console.log(`average salary of employees ${average}`);
} 

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
  const random = employeesArray.length*Math.random();
  const randomIndex = Math.floor(random); 
  const randomEmployee = employeesArray[randomIndex];

  console.log(`random employee ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
