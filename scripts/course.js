"use strict";

(function () {
    // // check fields and hide the submit button
    // document.addEventListener('DOMContentLoaded', function(){
    //  const display = new Display();
    //     display.checkFields();
    //     display.hideSubmit();
    // });
    const submitBtn = document.querySelector(`.submit`);
    const myForm = document.getElementById("course-form");
    console.log(myForm);
    // const studentName = document.querySelector('.name');
    // const courseTitle = document.querySelector('.course');
    // const authorName = document.querySelector('.author');
    // console.log(studentName);
    // let students = []
    // const students = document.querySelector('.student-list');
    // console.log(students)
    const loading = document.querySelector('.loading');
    const feedback = document.querySelector(`.feedback`);
    console.log(feedback);

    //add student on submit
    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = this.querySelector('.name');
        const course = this.querySelector('.course');
        const author = this.querySelector('.author');
        // console.log(name);
        const student = new Student(name.value, course.value, author.value);
        const display = new Display();
        if (this.name.value === '' || this.course.value === '' || this.author.value === '') {
            feedback.classList.add('showItem');
            feedback.style.backgroundColor = "pink"; 
            feedback.innerHTML = "please enter the field";
            return false;
        } else {
          feedback.innerHTML = '';
            loading.classList.add('showItem');
            display.addStudent(student);
            display.clearFields();
            setTimeout(function () {
                loading.classList.remove('showItem');
                feedback.classList.remove('showItem');
            }, 3000);
            
          }
          
        });



    //display
    function Display() {
        this.name = document.getElementById('name');
        this.course = document.getElementById('course');
        this.author = document.getElementById('author');
        this.students = document.querySelector('.student-list');
        console.log(this.students);
    }


    //     feedback.classList.add('showItem');

    //     const self = this;
    //     // self.hideSubmit();

    //     // setTimeout(function(){
    //     //     feedback.classList.remove('showItem')

    Display.prototype.addStudent = function (student) {
        let random = Math.floor(Math.random() * 5 + 1);
        const div = document.createElement('div');
        div.innerHTML = `<div id="img-container"> 
    <img src="./imgs/cust-${random}.jpg" class="cust-img">
    <span class="card-body" style="line-height: 1px;">
        <h4 class="students"><span class="label" id="namelabel">Name:</span><span id="student-name"> ${student.name}</span></h4>
   
        <h4 class="courses"><span class="label">Course:</span><span id="course-offer"> ${student.course}</span></h4>
   
        <h4 class="authors"><span class="label" id="authorlabel">Author:</span><span id="author-name"> ${student.author}</span></h4>
    </span>
    </div>`

        this.students.appendChild(div);
    };


    Display.prototype.clearFields = function () {
        this.name.value = '';
        this.course.value = '';
        this.author.value = '';

        // this.name.classList.remove('complete', 'fail');
        // this.course.classList.remove('complete', 'fail');
        // this.author.classList.remove('complete', 'fail');
    };

    function Student(name, course, author) {
        this.name = name;
        this.course = course;
        this.author = author;
    };

})();