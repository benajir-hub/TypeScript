/**In TypeScript, inline type annotations allow us to declare an object for each of the properties of the object */

let student : {
    id: number;
    name: string;
}

//Above we declare an object student with two properties 'id' and 'name' with the data type number and string

student = {
    id : 101,
    name : 'Sam'
}

//Assigning value to the properties of student
student = {
    id : 102,
    name : 'Dom'
}

//printing latest student object
console.log(student)

//printing the latest values of student object
console.log('Student ID: ' + student.id + '\n' + 'Student Name:' + student.name);