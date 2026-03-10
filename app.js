const students = [

{
    name: "John Smith",
    id: 1234567,
    grades: [95, 85, 95, 95]
},

{
    name: "Kevin James",
    id: 7654321,
    grades: [0, 0, 0, 0]
},

{
    name: "Jason Luong",
    id: 8889507,
    grades: [100, 100, 100, 100],
}

]


///const avgGrade = (students[x]) => {

   // return true;
// }


function avgGrade(student) {
    let sum = 0;
    let avg = 0;

    for (let i = 0; i < student.grades.length; i++) {
        sum += student.grades[i];
    }

    avg = (sum / student.grades.length);
    student.avgGrade = avg;
}

for (let i = 0; i < students.length; i++) {

    avgGrade(students[i]);
    console.log(students[i]);

}








