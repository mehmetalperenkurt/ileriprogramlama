"use strict";
let db = []
let fetchremote;
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
function readText() {
    fetch(url.value)
        .then(r => r.text())
        .then(t => fetchremote = t).then(Compare);
}
function Compare() {
    let text = [];
    let output=[];
    db.forEach(file => {
        output.push('<li><strong>', escape(file.name), '</strong> (', file.type || 'n/a', ') - ',
              file.size, ' bytes, last modified: ',
              file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a',
              '</li>');
})
document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    
    db.forEach(file => { 
       if(file.data == fetchremote){
            text.push(((db.indexOf(file))+1)+". file checked. "+file.name+" has the same content \n")
        }
        else {
        text.push(((db.indexOf(file))+1)+". file checked. No matches found in files \n");
        }
    out.innerText = text.join("");
    
    }
   )}