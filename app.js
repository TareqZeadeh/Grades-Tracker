'use strict';



let Students = [];
function Student(name, course) {
  this.studentName = name;
  this.Course = course;
  this.StudentGrade;
  //   this.minGrade=0;
  //   this.maxGrade=100;
  Students.push(this);

}






// Students.prototype.randomgrade= function (min, max) {

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };


let table = document.getElementById('table');



Student.prototype.render = function () {



  let studentrow = document.createElement('tr');
  table.appendChild(studentrow);

  let stname=document.createElement('td');
  studentrow.appendChild(stname);
  stname.textContent=this.name;

  let stgrade=document.createElement('td');
  studentrow.appendChild(stgrade);
  stgrade.textContent=this.StudentGrade;

  let coursetd=document.createElement('td');
  studentrow.appendChild(coursetd);
  coursetd.textContent=this.Course;




  console.log(coursetd);


};




let container = document.getElementById('Student-Name-and-course');
container.addEventListener('submit', submitter);


function submitter(event) {
  event.preventDefault();
  console.log(event);
  let StudentName = event.target.name.value;
  let selectedcourse= document.getElementById('course');
  let Course = selectedcourse.value;
  new Student(StudentName,Course);

}
for(let i=0; i<Students.length; i++)
{
  Students[i].randomgrade();
  Students[i].render();


}
console.log(Students);
