window.onload=function(){
	run();
}

function run(){
	var oSec=document.getElementById("slider");
	var oUl=oSec.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var oNext=oSec.getElementsByClassName('right')[0];
	var oPrev=oSec.getElementsByClassName('left')[0];
	var oOl=oSec.getElementsByTagName('ol')[0];
	var aOli=oOl.getElementsByTagName('li');
	var iNow=0;
	oNext.onclick=function(){
		if (iNow==aLi.length/2) {
			iNow=0;
			oUl.style.left= 0+'px';
		}
		move(oUl,-iNow*aLi[0].offsetWidth,-(iNow+1)*aLi[0].offsetWidth);
		iNow++;
		for (var i=0;i<aOli.length;i++) {
		aOli[i].classList.remove('active');
	}
	aOli[iNow%aOli.length].classList.add('active');
	}
		oPrev.onclick=function(){
		if (iNow==0) {
			iNow=aLi.length/2;
			oUl.style.left= -oUl.offsetWidth/2+'px';
		}
		move(oUl,-iNow*aLi[0].offsetWidth,-(iNow-1)*aLi[0].offsetWidth);
		iNow--;
	for (var i=0;i<aOli.length;i++) {
		aOli[i].classList.remove('active');
	}
	aOli[iNow%aOli.length].classList.add('active');
	}
		for (var i=0;i<aOli.length;i++) {
			aOli[i].index=i;
			aOli[i].onclick=function(){
		move(oUl,-iNow*aLi[0].offsetWidth,-(this.index)*aLi[0].offsetWidth);
		iNow=this.index;
				for (var i=0;i<aOli.length;i++) {
		aOli[i].classList.remove('active');
	}
	aOli[iNow%aOli.length].classList.add('active');
			}
		}
	
}
function move(obj,old,now){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iSpeed=(now-old)/10;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if (now==old) {
			clearInterval(obj.timer);
		}else{
			old+=iSpeed;
			obj.style.left=old+'px';
		}
	},30)
}
