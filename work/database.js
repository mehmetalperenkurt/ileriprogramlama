
"use strict";
const RDR2 = new FileReader();
RDR2.onload = function() { display(RDR2) };
function fileSelect(t) { 
//target t is the file selection HTMLInputElement
    let a = t.files; //display(t);
    if (a.length == 0) return;
    display(RDR2);
    if (a.length == 1) {
        let f = a[0]; display(f);
        MENU.displayFile(f)
    } else {
        display(a);
        let s = "";
        for (let f of a) 
            s += f.name+" "+f.size+" bytes "+NL;
        MENU.displayText(s)
    }
}
class ClassWork4 extends Menu {
  constructor() {
    super();
    var c1 = new Course("Phyton","09:00","Monday","B111");
    var c2 = new Course("Logic","16:00","Friday","A202");
    var c3 = new Course("NumericalA","14:00","Wednesday","D111");
    var courses = []
    courses.push(c1);
    courses.push(c2);
    courses.push(c3);
    this.Student1 = new Student(1421221, "Ahmet", 2.88, courses);
    this.Student2 = new Student(1521225, "Ali", 3.04, courses);
    this.Student1.courses.push(courses);
    this.Student2.courses.push(courses);
    this.Courses = courses;
    this.Point = new Point(9,4);
    this.Point3D = new Point3D(4,9,4);
    this.KmToMiles = new Distance(234);
    }
}
class Course  {
    constructor(name,time,date,rooms) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;
}
toString(){return this.name + "" }
}
class Student  {
    constructor(id,name,gpa,courses) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = [];

}
/*addCourse(course) {
        this.courses.push(course);
        name.author = this;
}*/
toString(){ return this.id +" "+ this.name
}
}
