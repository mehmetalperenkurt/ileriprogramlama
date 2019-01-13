"use strict";
function formReset() {
    document.getElementById("form1").reset();
 }

function Rnd() {

    var rx = Math.floor((Math.random() * 100) + 1);
    document.getElementById("midterm").value = rx;
    var ry = Math.floor((Math.random() * 100) + 1);
    document.getElementById("final").value = ry;
    var rz = Math.random().toString(32).substring(8).toUpperCase();
    document.getElementById("cname").value = rz;

}

function avg() {
    var tablo = "<table border=0 ><tbody>";
    var ort=0;
    tablo +="<tr><td><b>Name</b></td><td><b>Average</b></td></tr>";

for(var m=0; m< Arr.length; m++) 
{
    tablo +="<tr>";
    tablo += "<td>" + Arr[m][0] + "</td>";
    ort= (Arr[m][1]+Arr[m][2])/2;
    tablo += "<td>" + ort + "</td>";
    tablo += "</tr>";
    console.log(ort);
}

tablo+= "</tbody></table>";
outAvg.innerHTML = tablo;
}

function maks() {
	
    var ort=0;
    var max=0; 
    var maxindex=0;
    var tablo = "<table border=0 ><tbody>";
    tablo +="<tr><td><b>Name</b></td><td><b>Max</b></td></tr>";

 for(var m=0; m< Arr.length; m++) 
{
    ort=(Arr[m][1]+Arr[m][2])/2;
    aMax.push(ort);

        if(ort>max) { 
            max=ort ; 
            maxindex=m;
        }
    
} 
  /**   while (m < Arr.length)
     {
        ort=(Arr[m][1]+Arr[m][2])/2;
        aMax.push(ort);
        if(ort>max){
            max=ort;
            maxindex=m;
        }

        m++; 
     } ***/
      
    tablo +="<tr>";
    tablo += "<td>" + Arr[maxindex][0] + "</td>";
    tablo += "<td>" + Math.max(...aMax); + "</td>";
    tablo += "</tr>";
    tablo += "</tbody></table>";
    outMax.innerHTML = tablo; 
    console.log("MAX AVG..: "+Math.max(...aMax));
    for( var i = aMax.length-1; i--;){
    aMax.splice(i, 1);
    }
    


}

function push() {
    let courseName = cname.value;
	let midtermScore = Number(midterm.value);
    let finalScore = Number(final.value);
    Arr.push([courseName,midtermScore,finalScore])
      formReset();
//   printHtml();
    console.log(Arr);
}
function printHtml(str) {
 
        //console.log(str);
    
	var tablo = "<table border=0 ><tbody>";
    tablo +="<tr><td><b>Name</b></td><td><b>Midterm</b></td><td><b>Final</b></td></tr>";

for(var m=0; m< Arr.length; m++) 
{
    tablo +="<tr>";
	
    for(var n= 0; n < Arr[m].length; n++){
		   //if (m==0){tablo += "<td>" + Arr[m][n] + "</td>";}
           // else {tablo += "<td>" + Arr[m][n] + "</td>";}
           tablo += "<td>" + Arr[m][n] + "</td>";
						}
	tablo += "</tr>";

}

tablo+= "</tbody></table>";
outPrint.innerHTML = tablo;
console.log("Print()");
}
