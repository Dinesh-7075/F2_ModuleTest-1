/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    arr.map(function(employee) {
      if(employee.profession === "developer") {
          console.log(employee);
      }
    });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
    arr.forEach(function(employee) {
      if(employee.profession === "developer") {
        console.log(employee);
        // console.log("Employee id=" + employee.id, " Name=" + employee.name, " Age=" + employee.age, " Profession=" + employee.profession );
      }
    });
}

function addData() {
  //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
    let filtered_arr = arr.filter( function(val) {
      if(val.profession != "admin") {
        return val;
      }
    })
    console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here, just console.log
    let arr2 = [
      ...arr,
      { id: 4, name: "Virat", age: "34", profession: "Professional Cricter" },
      { id: 5, name: "Dinesh", age: "23", profession: "SDE" },
      { id: 6, name: "Venkat", age: "25", profession: "Accountant" },
    ];
    console.log(arr2);
}
