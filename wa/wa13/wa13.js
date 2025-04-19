let company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false
    },
  ]
};


// PROBLEM 1
console.log("PROBLEM 1: Three employees");
console.log(company.employees[0], company.employees[1], company.employees[2]);


// PROBLEM 2
console.log("\nPROBLEM 2: Company info");
console.log(company);


// PROBLEM 3
console.log("\nPROBLEM 3: New employee, Anna");
company.employees.push({
  firstName: "Anna",
  department: "Tech",
  designation: "Executive",
  salary: 25600,
  raiseEligible: false
});
console.log(company);
// console.log(company.employees.length);
console.log(company.employees[3]);


// PROBLEM 4
console.log("\n--PROBLEM 4: Total salary of four employees");
let totalSalary = 0;
for (employee of company.employees) {
  totalSalary += employee.salary;
  console.log(employee.firstName, employee.salary, employee);
};
console.log(totalSalary);


// PROBLEM 5
console.log("\n--PROBLEM 5: Raising salary");
function raiseSalary(employee) {
  if (employee.raiseEligible) {
    employee.salary *= 1.1;
    employee.raiseEligible = false;
  }
}
for (employee of company.employees) {
  console.log(employee);
  if (employee.raiseEligible) {
    // let empStr = employee.firstName + " " + employee.salary + " " + employee.raiseEligible + " --> ";
    // raiseSalary(employee);
    // empStr += employee.salary + " " + employee.raiseEligible;
    // console.log(empStr);
    raiseSalary(employee);
    console.log("Raised", employee);
  }
  // else {
  //   console.log(employee.firstName, employee.salary, employee.raiseEligible);
  // }
  // console.log(employee.firstName, employee.salary, employee.raiseEligible);
  // raiseSalary(employee);
  // console.log(employee.firstName, employee.salary, employee.raiseEligible);
}
// console.log(company.employees);


// PROBLEM 6
console.log("\n--PROBLEM 6: Work from home (wfh) employees");
for (employee of company.employees) {
  employee.firstName === "Anna" || employee.firstName === "Sam" ? employee.wfh = true : employee.wfh = false;
  // if ((employee.firstName === "Anna") || (employee.firstName === "Sam")) {
  //   employee.wfh = true;
  // }
  // else {
  //   employee.wfh = false;
  // }
  console.log(employee.firstName, employee.wfh, employee);
}
// console.log(company.employees);