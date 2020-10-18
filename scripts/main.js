"use strict";

(function(){
    const submitBtn = document.querySelector(`.submit`);
    // console.log(submitBtn);
    const myForm = document.getElementById("course-form");
    // console.log(myForm);
   
    const containerImg = document.getElementById("img-container");
    const studentName = document.querySelector("#customer-name");
    const courseTitle = document.querySelector("#course-offer");
    const authorName = document.querySelector("#author-name");
console.log(studentName);
console.log(courseTitle);
console.log(authorName);

    let students = []

function student(img, name, course, author){
    this.img = img
    this.name = name
    this.course = course
    this.author = author
}

function createStudent(img, name, course, author){
    let fullImg = `./imgs/cust-${img}.jpg`
    let  student = new student(fullImg, name, course, author);
    students.push(student)
};

const nameValue = studentName.value;
const courseValue = courseTitle.value;
const authorValue = authorName.value;



console.log("containerImg");

const studentList = document.getElementById(`student-list`);
const loading = document.getElementById("loading");
console.log(loading);

function createStudent(nameValue, courseValue, authorValue){
    // let random = math.floor(math.random()*5+1)
let div = document.createElement("div")
 div.innerHTML = `<div id="img-container" 
 <img src="./imgs/cust-${img}.jpg" class="cust-img">
 <span class="card-body" style="line-height: 2px;">
<div id="student-list">
     <h4 class="custt-name"><span class="label">Name:</span><span id="customer-name"> ${nameValue}</span></h4>

     <h4 class="course-offer"><span class="label">Course:</span><span id="course-title"> ${courseValue}</span></h4>

     <h4 class="author-name"><span class="label">Author:</span><span id="author"> ${authorValue}</span></h4>
 </div>
 </div>`

students.appendChild(div);
};

submitBtn.addEventListener(`click`, function(e){
e.preventDefault()
if(button.classList.contains(`submit`)){
e.target.classList.toggle("loading");
createStudent(nameValue, courseValue, authorValue);
}


})


})()