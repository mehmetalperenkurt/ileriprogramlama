"use strict";
class Course {
  constructor(name, time, date) {
    this.name = name
    this.time = time
    this.date = date
    this.rooms = []
  }
  addRooms(...room) {
    for (let r of room) this.rooms.push(r)
    return this
  }
  toString() {
    return this.name;
  }
}

class Student {
  constructor(id, name, gpa) {
    this.id = id
    this.name = name
    this.gpa = gpa
    this.courses = []
  }
  addCourses(...course) {
    for (let c of course) this.courses.push(c)
    return this
  }
  toString() {
    return this.name +": "+this.gpa;
  }
}
function readData(file) {
    console.log("readData "+file);
    fetch(url+file)
        .then(r => r.text(), console.log)
        .then(addStudents, console.log);
}
function parseStudent(line) {
    let b = line.split("\t");
    let id = b[0], name = b[1], gpa = b[2];
    let std = new Student(id, name, gpa);
    let list = [];
    for (let i=3; i<b.length; i++) 
        list.push(b[i]);
    std.courses = list
    return std
}
function addStudents(txt) { 
    let msg = "\nData contains ";
    msg += txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines , ";
    for (let s of a) {
      let std = parseStudent(s);
      array.push(std.id); 
      makeAmap.set(std.id,std);      
    }
    msg += array.length+" students \n"
    //msg += set.size+" distinct names"
    out.innerText += msg
    // console.log(makeAmap)
    //console.log(array);
}
function mapRandomSearch(makeAmap) {     
    countMap=0;
    for(let i=0; i<10000;i++){
        //let firstNine=Math.floor(Math.random()*(116700070-116690070+1)+116690070).toString(); //wide range
        let firstNine=Math.floor(Math.random()*(116690916-116690070+1)+116690070).toString(); //for more results
        if (makeAmap.has(firstNine)==true) {
                countMap++
            } 
        } 
        return countMap
}
function arrayRandomSearch(array){
    countArray=0;
    for(let i=0; i<10000;i++){
        let firstNine=Math.floor(Math.random()*(116700070-116690070+1)+116690070).toString();
        if(array.includes(firstNine)==true){
            countArray++
        }
    }
        return countArray
}
function maptiming(f) {
    let t = performance.now()
    let x = f(makeAmap)  //calculate intersection by itself
    t = performance.now() - t
    let s = "Map timing"+":"+countMap+"result founded in "+t.toPrecision(3)+" miliseconds"
    out.innerText += "\n"+s; console.log(s)
}
function arraytiming(f){
    let t = performance.now()
    let x = f(array)  //calculate intersection by itself
    t = performance.now() - t
    let s = "Array timing"+":"+countArray+"result founded in "+t.toPrecision(3)+" miliseconds \n"
    out.innerText += "\n"+s; console.log(s)
}
function timing(){
    countMap=0;
    countArray=0;
    let maptime=0;
    let arraytime=0;
    for(let i=0; i<10000;i++){
        let firstNine=Math.floor(Math.random()*(116700070-116690070+1)+116690070).toString();
        let atime=performance.now();
        if(array.includes(firstNine)==true){
            countArray++
        }
        arraytime=arraytime+performance.now()-atime; 
        let mtime=performance.now();
        if (makeAmap.has(firstNine)==true) {
            countMap++
        }
        maptime=maptime+performance.now()-mtime;
    }
    let s = "Map timing"+":"+countMap+"result founded in "+maptime.toPrecision(3)+" miliseconds \n"+"Array timing"+":"+countArray+"result founded in "+arraytime.toPrecision(3)+" miliseconds \n"
    out.innerText += "\n"+s; 
    console.log(s)
}
