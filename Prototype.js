function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "nitya");
employee.prototype.email = "naresh@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
