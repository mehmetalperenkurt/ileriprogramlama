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
        this.student = new Map();
        this.course = new Map();
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
   for (let s of a) {
     let student = this.parseStudent(s);
     //this.keys1.push(student.id);
     //this.vals1.push(student);
    // console.table(student);
   }
   //console.table(this.keys1);
   //console.table(this.vals1);
   //console.table(student);
}

parseStudent(line){
	let s = line.split("\t");
    let courses = [];
    for (let i=3; i<s.length; i++) courses.push(s[i]);
    const student = new Student(s[0],s[1],s[2],courses)
    return student
}
addCourse(txt){
	let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
    for (let s of a) {
      let course = this.parseCourse(s);
      //this.keys2.push(course.coursename);
      //this.vals2.push(course);
      console.table(course);
      }
      
    //console.table(this.keys2);
    //console.table(this.vals2);
    //console.table(course);
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
randomStudent(){

}
aboveGpa(){
	
}
bestGpa(){

}
coursesTakenByGivenStu(){

}
examScheduleGivenStu(){

}
studentListGivenCourse(){

}
courseListGivenRoom(){

}
totalNumberCourseGivenRoom(){

}
}
