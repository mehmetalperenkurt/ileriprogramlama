class foundations {
    constructor(foundationname,holderArc,total){
        this.foundationname=foundationname;
        this.holderArc=holderArc;
        this.total=total;
    }
}
class Holder {
    constructor(tcId,foundations){
        this.tcId=tcId;
        this.foundations=foundations;
    }
}
class database {
    constructor(holderList){
        this.foundations=new Map();
        this.holderList=new Map();
        this.addHolder(db);
        document.getElementById("search").style.visibility = "visible";
        document.getElementById("searchList").style.visibility = "visible";
    }
    addHolder(db){
        for(let file of db){
            let a=file.data.split("\n")
            for(let student of a){
                student=student.slice(0,11);
                let a1=[];
                let k=file.name;
                let k1=k.replace(".txt","");
                if(this.holderList.has(student)){
                    let std=this.holderList.get(student)
                    std.foundations.push(k1);
                    const holder=new Holder (student,std.foundations)
                    this.holderList.set(student,holder);
                    //list.innerHTML +="<li>"+student+"</li>"
                }
                else{
                    a1.push(k1);
                    const holder=new Holder(student,a1);
                    this.holderList.set(student,holder);
                    } 
            } 
        }
        this.addFoundation(db);
        return console.log(this.holderList) 
    }
    addFoundation(db){
        for(let file of db){
            let a=file.data.split("\n")
            let c=a.length;
            let k=file.name;
            let k1=k.replace(".txt","");
            const foundation=new foundations (k1,a,c);
            this.foundations.set(k1,foundation);
        } return console.log(this.foundations)
    }
    singleSearch(searchById){
        if(validation(searchById)==true){
        if((this.holderList.has(searchById))==true){
            let b= this.holderList.get(searchById)
            let text=" "+b.tcId+"&emsp;"+b.foundations.join("\t");
            document.getElementById("searchResult").innerHTML=text;
        }else{
            document.getElementById("searchResult").innerHTML="not found";
        }
    }
    else{
        document.getElementById("searchResult").innerHTML="false id";
    }
    }
    bulkSearch(searchByList){
        document.getElementById("searchListResult").innerHTML="";
        document.getElementById("searchListNotResult").innerHTML="";
        let db=searchByList.split("\n");
        for(let id of db){
            id=id.slice(0,11);
        if(validation(id)==true){
        if((this.holderList.has(id))==true){
            let b= this.holderList.get(id)
            let text=" "+b.tcId+"&#8195;"+b.foundations.join("&#8195;");
            document.getElementById("searchListResult").innerHTML+=text+"<br>";
        }else{
            document.getElementById("searchListResult").innerHTML+=id+"&#8195;not found"+"<br>";
        }
    }
    else{
        document.getElementById("searchListResult").innerHTML+=id+"&#8195;false id"+"<br>";
    }
    }
    }
    bulkSearchNot(searchByList){
        document.getElementById("searchListResult").innerHTML="";
        document.getElementById("searchListNotResult").innerHTML="";
        let count=0;
        let db=searchByList.split("\n");
        for(let id of db){
            id=id.slice(0,11);
        if(validation(id)==true){
        if((this.holderList.has(id))==false){
            document.getElementById("searchListResult").innerHTML+=id+"&#8195;not found"+"<br>";
        }else{
            count++;
            document.getElementById("searchListNotResult").innerHTML=count+"&#8195; holder &#8195; found in list"+"<br>";
        }
    }
    else{
        document.getElementById("searchListResult").innerHTML+=id+"&#8195;false id"+"<br>";
    }
    
    }
    }
}
function fileSelect(evt) {
        db = []
        var files = evt.files;
        for (let file of files) {
            let reader = new FileReader();
            reader.onload = function () {
               db.push({ data: reader.result, name: file.name, lastModifiedDate: file.lastModifiedDate, size: file.size, type: file.type  });
            }
            reader.readAsText(file);
        }
    }
function validation(tc){
      let str=tc.split("");
      if(str.lenght<11 && str.lenght>11){
        return false
      }
      else if(str[0]==0){
        return false
      }
      let tcId=[]
      for(let i=10;i>=0;i--){
         tcId[i]=(tc)%10;
          if(tc<10){
            tc=(tc)%10
          }
          else{
            tc=Math.floor((tc)/10);
          }
      }
      if((Math.abs(((tcId[0]+tcId[2]+tcId[4]+tcId[6]+tcId[8])*7)-(tcId[1]+tcId[3]+tcId[5]+tcId[7]))%10)==tcId[9] && ((tcId[0]+tcId[2]+tcId[4]+tcId[6]+tcId[8]+tcId[1]+tcId[3]+tcId[5]+tcId[7]+tcId[9])%10)==tcId[10] ){
        return true
      }
      else{
        return false
      }
    }
