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
       // this.Students = new Map();
       // this.Courses = new Map();
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
     this.keys1.push(student.id);
     this.vals1.push(student);
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
      this.keys2.push(course.coursename);
      this.vals2.push(course);
      //console.table(course);
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
    let i = Math.trunc(this.keys1.length * Math.random());
    let b = this.vals1[i];
    console.log(b.name,b.id)
}
aboveGpa(gpa){
    let numberOfAbove = 0;
    for (let std of this.vals1) 
        if (std.gpa > gpa) numberOfAbove++;
    console.log(numberOfAbove)
    return numberOfAbove
}
bestGpa(){
    let b = this.vals1[0];
    for (let student of this.vals1) 
        if (student.gpa > b.gpa) b = student;
    console.log("Best: "+b.name, b.id, b.gpa);
}
findID(id) {
    let i = this.keys1.indexOf(id);
    if (i < 0) return null;
    return this.vals1[i];
}
showStudent(id){
    let t = id+" ";
    let std = this.findID(id);
    if (!std) {
        console.log(t+"not found"); return;
    }
    t += std.name+" "+std.gpa;
    console.log(t, std.courses.length+" courses", std.courses);
}
examScheduleGivenStu(){

}
studentListGivenCourse(scode){
    scode = scode.toUpperCase();
    let a = [];
    for (let std of this.vals1) 
        if (std.courses.includes(scode)) 
            a.push(std.id+" "+std.name);
    if (a.length > 0)
        console.log(scode+": ", a.length+" students", a);
}
courseListGivenRoom(rcode){
    rcode = rcode.toUpperCase();
    let a = [];
    for (let crs of this.vals2) 
        if (crs.room.includes(rcode)) 
            a.push(crs.coursename+" ");
    if (a.length > 0) console.log(rcode+": ", a.length+" courses given in a "+rcode, a);
    else console.log("no courses were found in this class.")
}
totalNumberOfCourseGivenRoom(rcode){
    this.courseListGivenRoom(rcode).a.length;
    if (a.length > 0)
        console.log(rcode+": ", a.length+" courses given in a "+rcode, a);
        else console.log("no courses were found in this class.")
}
}
