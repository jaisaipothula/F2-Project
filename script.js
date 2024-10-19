const employees = [
    { id: 1, name: "JAI SAI", age: "18", profession: "developer" },
    { id: 2, name: "DHONI", age: "20", profession: "developer" },
    { id: 3, name: "TENDULKAR", age: "19", profession: "admin" }
];
function PrintDeveloperbyMap() {
    const developers = employees.map(employee => {
        if (employee.profession === 'developer') {
            console.log(employee);
        }
    });
}
function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === 'developer') {
            console.log(employee);
        }
    });
}
function addData() {
    const newEmployee = { id: 4, name: "NAVEEN", age: "24", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
}
function removeAdmin() {
    const filteredEmployees = employees.filter(employee => employee.profession !== 'admin');
    console.log(filteredEmployees); // Log the filtered array
}
function ConcatinateArray() {
    const newEmployees = [
        { id: 5, name: "SIVAN", age: "22", profession: "designer" },
        { id: 6, name: "SRIDHAR", age: "25", profession: "manager" },
        { id: 7, name: "MANOHAR", age: "23", profession: "analyst" }
    ];
    
    const combinedArray = employees.concat(newEmployees);
    console.log(combinedArray); 
}