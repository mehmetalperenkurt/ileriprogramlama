class Course {
constructor(coursename,examtime,examdate,room){
this.coursename=coursename
this.examtime=examtime
this.examdate=examdate
this.room=room
}
toString () {
    return this.coursename + " " + this.examdate
}
}
class Student {
constructor(id,name,gpa,courses){
this.id=id
this.name=name
this.gpa=gpa
this.courses= courses
}
toString () {
    return this.id +" "+ this.name
}
}
class Database {
    constructor(){
        this.urlS = "https://maeyler.github.io/JS/data/Students.txt";
        this.urlC = "https://maeyler.github.io/JS/data/Courses.txt";
        this.keys1=[]
        this.keys2=[]
        this.vals1=[]
        this.vals2=[]
        this.Students = new Map();
        this.Courses = new Map();
        this.readStudents();
        this.readCourses();
    }
readStudents() {
    console.log("readStudents "+this.urlS);
    fetch(this.urlS)
    .then(r => r.text())
    .then(r => this.addStudent(r))   

}
readCourses() {
    console.log("readCourses "+this.urlC);
    fetch(this.urlC)
    .then(r => r.text())
    .then(r => this.addCourse(r))  
    
}
addStudent(txt){
   let msg = txt.length+" chars, ";
   let a = txt.split("\n");
   msg += a.length+" lines, ";
   console.log(msg);
   for (let s of a) {
     let student = this.parseStudent(s);
     this.Students.set(student.id,student);
     this.keys1.push(student.id);
     this.vals1.push(student);
    // console.table(student);
   }
   //console.table(this.keys1);
   //console.table(this.vals1);
   //console.table(student);
   this.report(msg + this.keys1.length+" students");
}
parseStudent(line){
	let s = line.split("\t");
    let courses = [];
    for (let i=3; i<s.length; i++) 
    courses.push(this.Courses.get(s[i]));
    // courses.push(s[i]);
    const student = new Student(s[0],s[1],s[2],courses)

    return student
}
addCourse(txt){
	let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
    console.log(msg);
    for (let s of a) {
      let course = this.parseCourse(s);
      this.Courses.set(course.coursename,course);
      this.keys2.push(course.coursename);
      this.vals2.push(course);
      
      //console.table(course);
      }
      
    //console.table(this.keys2);
    //console.table(this.vals2);
    //console.table(course);
    this.report(msg + this.keys2.length+" courses");
}
parseCourse(line){
    let c = line.split("\t");
    let rooms = [];
    for (let i=3; i<c.length; i++) rooms.push(c[i]);
    const course = new Course(c[0],c[1],c[2],rooms)
   // var rooms = [];
   // let i=3;
   // if(i<c.lenght){
    //    rooms.push(c[i]);
    //    i++;
   // }
   // else { const course = new Course(c[0],c[1],c[2],rooms) 
  //      return course }
    /* for (let i=3; i<c.length; i++) 
        rooms.push(c[i]);
        if(i)
    const course = new Course(c[0],c[1],c[2],rooms) */
    return course
}
randomStudent(){        //* A random student
    let i = Math.trunc(this.keys1.length * Math.random());
    let b = this.vals1[i];
    //console.log(b.name,b.id)
    this.report(b.name,b.id);
}
randomCourse(){
    let i = Math.trunc(this.keys2.length * Math.random());
    let b = this.vals2[i];
    this.report(b.coursename);
}
aboveGpa(gpa){          //* Number of students above a given GPA
    let numberOfAbove = 0;
    let numberOfBelow = 0;
    for (let std of this.vals1) 
        if (std.gpa > gpa) numberOfAbove++;
        else numberOfBelow++;
    //console.log(numberOfAbove)
    this.report("Number of students above a "+gpa+" GPA : "+numberOfAbove+"\n")
    this.report("Number of students below a "+gpa+" GPA : "+numberOfBelow)
    
}
/*belowGpa(gpa){          //* Number of students above a given GPA
    let numberOfAbove = 0;
    for (let std of this.vals1) 
        if (std.gpa < gpa) numberOfAbove++;
    //console.log(numberOfAbove)
    report("Number of students above a "+gpa+" GPA :"+numberOfAbove)
}*/ 
bestGpa(){
    let b = this.vals1[0];
    for (let student of this.vals1) 
        if (student.gpa > b.gpa) b = student;
    console.log("Best: "+b.name, b.id, b.gpa);
    this.report("Best: "+b.name, b.id);
}
findID(id) {
    let i = this.keys1.indexOf(id);
    if (i < 0) return null;
    return this.vals1[i];
}
showStudent(id){            //* Courses taken by a given student
    let t = id+" ";
    let std = this.findID(id);
    if (!std) {
        console.log(t+"not found"); return;
    }
    t += std.name+" "+std.gpa;
    //console.log(t, std.courses.length+" courses", std.courses);
    this.report(t, std.courses.length+" courses", std.courses);
    return std
}
examScheduleGivenStu(id){             //* Exam schedule for a given student
    let std = this.Students.get(id);
    /*let std = this.showStudent(id);*/
    let examSchedule = []
    for(let course of std.courses)
    examSchedule.push(course.coursename+" "+course.examdate+" "+course.examtime)
        console.table(examSchedule)
        this.report(std.name,": Exam List",examSchedule)
}
studentListGivenCourse(scode){
    scode = scode.toUpperCase();
    let a = [];
    for (let [id,std] of this.Students){
    for(let crs of std.courses){
        if (crs.coursename == scode) 
            a.push(std.id+" "+std.name);
            }
        }
        if (a.length > 0) this.report(scode+": ", a.length+" students", a);
        else this.report("No students in "+scode);
}
courseListGivenRoom(rcode){             //* Course list for a given exam room
    rcode = rcode.toUpperCase();
    let a = [];
    for (let crs of this.vals2) 
        if (crs.room.includes(rcode)) 
            a.push(crs.coursename+" ");
    if (a.length > 0) this.report(rcode+": ", a.length+" courses given in a "+rcode, a);
    else this.report("no courses were found in this class.")
}
totalNumberOfCourseGivenRoom(rcode){            //* Total number of courses in a given room
    this.courseListGivenRoom(rcode).a.length;
    if (a.length > 0)
        this.report(rcode+": ", a.length+" courses given in a "+rcode, a);
        else this.report("no courses were found in this class.")
}
report(msg, id, list) {
    out.innerHTML += "<br>"; msg += " ";
    out.appendChild(document.createTextNode(msg));
    let n1;
    if (id) {
        n1 = document.createElement("span");
        n1.appendChild(document.createTextNode(id));
        n1.classList.add("link");
        out.appendChild(n1); msg += id;
        //n1.addEventListener("click", doClick);
    }
    if (list) {
        let n2 = document.createElement("span");
        n2.appendChild(document.createTextNode(""));
        n2.innerHTML += list.join("<br>");
        n2.classList.add("course");
        if (n1) n1.appendChild(n2);
    }
    console.log(msg);
}
doClick(evt) {
    //console.log(evt);
    let t = evt.target;
    //document.elementFromPoint(evt.clientX, evt.clientY);
    let s = t.innerText;
    if (/^\d+$/.test(s)) this.showStudent(s); //s contains digits
    else if (t = t.firstElementChild) {
        t.style.visibility = "";
        let hide = function () {
            t.style.visibility = "hidden";
        };
        setTimeout(hide, 500);
    }
}

}
