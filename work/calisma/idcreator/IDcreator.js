function creator(n){
      out.innerHTML=null;
        for(let i=0;i<n;i++){
          let firstNine=Math.floor(Math.random()*(899999999+100000001));
          let tcId=[]
            for(let j=8;j>=0;j--){
              tcId[j]=(firstNine)%10;
              if(firstNine<10){
                firstNine=(firstNine)%10
              }
              else{
                firstNine=Math.floor((firstNine)/10);
              }
            }
          tcId.push(Math.abs(((tcId[0]+tcId[2]+tcId[4]+tcId[6]+tcId[8])*7)-(tcId[1]+tcId[3]+tcId[5]+tcId[7]))%10);
          tcId.push((tcId[0]+tcId[2]+tcId[4]+tcId[6]+tcId[8]+tcId[1]+tcId[3]+tcId[5]+tcId[7]+tcId[9])%10);
          out.innerHTML +="<li>"+tcId.join('')+"</li>"
        }
    }
    
    function validation(tc){
      outVal.innerHTML="";
      let str=tc.split("");
      if(str.lenght<11 && str.lenght>11){
        return outVal.innerHTML="false id"
      }
      else if(str[0]==0){
        return outVal.innerHTML="false id "
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
        return outVal.innerHTML="true id"
      }
      else{
        return outVal.innerHTML="false id"
      }
    }
