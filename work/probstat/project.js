var ctx,h,w,box

var inset = 20

function rect(x1,y1,x2,y2){
	this.x1=x1
	this.x2=x2
	this.y1=y1
	this.y2=y2
}

function linTran(x0,xf,y0,yf) {
	// finds b and a for transforming from x to y
	r = new Array(2)
	r[1]=(yf-y0)/(xf-x0);
	r[0] = (yf+y0)/2- r[1] * (xf+x0)/2;
	return r
	
}
function init() {
	canvas = document.getElementById('normal'); 
	ctx = canvas.getContext('2d');
	ctx.fillStyle = "white";
	h = canvas.height 
	w = canvas.width
	var x1 = inset
	var x2 = x1+w - 2*inset
	
	var y1 = inset
	var y2 = y1+ h - 2*inset
	box = new rect(x1,y1,x2,y2)

	
}

function inverse() {
	var ll, ul, x1,x2
	var M = parseFloat(document.getElementById("sMean").value)
	var sd = parseFloat(document.getElementById("stdDev").value)
	ctx.clearRect(0,0,w,h)
	tail = false
	var e=document.getElementById('conf');
    var p=parseFloat(e.options[e.selectedIndex].getAttribute("pDeger"))
	var x1 = zinv(p)
	x1=M+sd*x1


var p2=p/2
		x1=zinv(.5-p2)
		ll=x1
		ul=-x1
		ll=Math.round((M+sd*ll)*1000)/1000
		ul=Math.round((M+sd*ul)*1000)/1000
		drawNormal(ctx,box,M,sd,ll,ul,tail)
		//document.getElementById("betweenX").value=ll + " and " + ul

}

function drawNormal(ctx,box,M,sd,lFill,hFill, tail) {
	ctx.beginPath()
	
	var w = box.x2-box.x1
	var h = box.y2-box.y1
	
	
	//ctx.fillRect(b.x1,b.y1,w,h)
	
	var v = sd*sd
	var constant = 1/Math.sqrt(2*Math.PI*v)
	var x=M
	
	var maxDensity = constant
	
	var r = linTran(0,1.1*maxDensity,h,box.y1)
	
  	var Ay=r[0]
  	var by=r[1]

	
	var lowX = M - 3.5*sd
	var highX = M + 3.5*sd

	var r = linTran(lowX,highX,box.x1,box.x2)
	
   	var Ax=r[0]; var bx=r[1]


   	var x0 = lowX*bx+Ax
	var xf=highX*bx+Ax
	
   ctx.moveTo(xf,Ay)
   ctx.lineTo(x0,Ay)
   
	var inc = 1/bx

   var dmax = 0
   ctx.strokeStyle = "black";


   for (var i=lowX;i<=highX;i+=inc*.5){
  		xp=bx*i +Ax
		d =  constant*Math.exp(-Math.pow((i-M),2)/(2*v))
		dmax = Math.max(dmax,d)
	
		dp= by*d+Ay
		
		
		//height in pixels
		
		ctx.lineTo(xp,dp) 
		
		
		if (tail) {
			
			if(i>=hFill || i <= lFill) {
			
			ctx.moveTo(xp,Ay)	
			ctx.lineTo(xp,dp+1)
			
		}
			
			
			
		}
		
		else 
		  if(i<=hFill && i >=lFill) {
			  ctx.moveTo(xp,Ay)	
			  ctx.lineTo(xp,dp+1)
		  }
	}
	
	ctx.textAlign = "center";
	ctx.font = "12px Courier sans-serif";
	
	y = Ay+ 15
	ctx.fillStyle = "black";
	for (var i = M - 3*sd;i<=M+3*sd;i+=sd) {
		x=bx*i+Ax
		ctx.moveTo(x,Ay)
		ctx.lineTo(x,Ay+4)
		var xlab = Math.round(1000*i)
		xlab=xlab/1000
		ctx.fillText(xlab, x, y);
	}
	ctx.stroke();
	//ctx.closePath()
	
	
}
function zinv(p) {

    const a1 = -39.6968302866538, a2 = 220.946098424521, a3 = -275.928510446969;
    const a4 = 138.357751867269, a5 = -30.6647980661472, a6 = 2.50662827745924;
    const b1 = -54.4760987982241, b2 = 161.585836858041, b3 = -155.698979859887;
    const b4 = 66.8013118877197, b5 = -13.2806815528857, c1 = -7.78489400243029E-03;
    const c2 = -0.322396458041136, c3 = -2.40075827716184, c4 = -2.54973253934373;
    const c5 = 4.37466414146497, c6 = 2.93816398269878, d1 = 7.78469570904146E-03;
    const d2 = 0.32246712907004, d3 = 2.445134137143, d4 = 3.75440866190742;
    const p_low = 0.02425, p_high = 1 - p_low;
    let q, r;
    let retVal;
    
    if ((p < 0) || (p > 1)) {
        alert("p out of range.");
        retVal = 0;
    }
    else if (p < p_low) {
        q = Math.sqrt(-2 * Math.log(p));
        retVal = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    else if (p <= p_high) {
        q = p - 0.5;
        r = q * q;
        retVal = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    else {
        q = Math.sqrt(-2 * Math.log(1 - p));
        retVal = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    
    return retVal;
    
    }
    
    function zProb(z) {
    
    
    if (z < -7) {
        return 0.0;
    }
    if (z > 7) {
        return 1.0;
    }
    
    
    if (z < 0.0) {
        flag = true;
    }
    else {
        flag = false;
    }
    
    z = Math.abs(z);
    b = 0.0;
    s = Math.sqrt(2) / 3 * z;
    HH = .5;
    for (let i = 0; i < 12; i++) {
        a = Math.exp(-HH * HH / 9) * Math.sin(HH * s) / HH;
        b = b + a;
        HH = HH + 1.0;
    }
    p = .5 - b / Math.PI;
    //p=b/Math.PI;
    if (!flag) {
        p = 1.0 - p;
    }
    return p;
    }