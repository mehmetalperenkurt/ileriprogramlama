"use strict";
class classyazar{
    constructor(isim,dogumT,kitaplar){
    this.isim = isim
    this.dogumT= dogumT
    this.kitaplar= kitaplar
    }
}
class classkitap{
    constructor(kitapIsim,kitapYil,yayinEvi,sayfa){
        this.kitapIsim=kitapIsim
        this.kitapYil=kitapYil
        this.yayinEvi=yayinEvi
        this.sayfa=sayfa
    }
}
class database{
    constructor(){
        this.urlKitap="https://mehmetalperenkurt.github.io/ileriprogramlama/work/calisma/kitap.txt"
        this.urlYazar="https://mehmetalperenkurt.github.io/ileriprogramlama/work/calisma/yazar.txt"
        this.kitapMap=new Map();
        this.yazarMap=new Map();
        this.kitapOku();
        this.yazarOku();
    }
    kitapOku(){
        fetch(this.urlKitap)
        .then(r => r.text())
        .then(r => this.kitapEkle(r));
    
}
    yazarOku(){
        fetch(this.urlYazar)
        .then(r=> r.text())
        .then(r => this.yazarEkle(r));
}
    kitapEkle(txt){
        let a=txt.split("\n")
        for (let k of a){
        let kitap = this.kitapBol(k);
        this.kitapMap.set(kitap.kitapIsim,kitap) 
        }
    }
    kitapBol(line){
    let k= line.split("\t")
    for(let i=0; i<k.length;i++);
    const kitap= new classkitap(k[0],k[1],k[2],k[3])
    return kitap
}
    yazarEkle(txt){
        let a=txt.split("\n")
        for (let k of a){
        let yazar = this.yazarBol(k);
        this.yazarMap.set(yazar.isim,yazar) 
        }
}
    yazarBol(line){
        let y= line.split("\t")
        let kitaplar=[];
        for(let i=2; i<y.length;i++)
        kitaplar.push(this.kitapMap.get(y[i]))
        const yazar= new classyazar(y[0],y[1],kitaplar);
        return yazar
    
    }
    above1950(){
        let m = new Set();
       
        for(let yil of this.kitapMap.values())
        if(yil.kitapYil>1950) m.add(yil.kitapIsim)
        return m
        //console.log(yil.kitapIsim+"\n"+m); 
        //console.log(a)
    }
    randomYazar(){
        let keys=Array.from(this.yazarMap.keys())
        let j=this.yazarMap.get(keys[Math.trunc(this.yazarMap.size*Math.random())]);
        console.log(j.isim);
    }
    ayniyayineviset(){
    let n = new Set();
    let k = new Map();
    let kitaplar = [];
    for(let yevi of this.kitapMap.values()){
    n.add(yevi.yayinEvi)
    for(let ktp of this.kitapMap.values())
     if(n.has(ktp.yayinEvi)){ kitaplar.push(ktp.kitapIsim) 
     }this.k.set(n,kitaplar)
     return k   
    
}
}
}