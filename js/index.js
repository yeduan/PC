
var aSign=document.querySelectorAll('.sign');
var btnL=document.querySelector('.left');
var btnR=document.querySelector('.right');
var aI=document.querySelectorAll('.change i');
var oBox=document.querySelector('#hideBox');
var oIcon=document.querySelector('#wxIcon');
console.log(aI);
var _index=0;
var timer1=null;
var timer2=null;
clearInterval(timer1);
timer1=setInterval(autoMove,7000);
function autoMove(){
    if(_index>=aSign.length-1){
      _index=-1;
    }
    _index++;//1 0
    setBanner();
}
function setBanner(){
    for(var k= 0;k<aSign.length;k++){
        aSign[k].style.display='none';
        aSign[k].classList.remove('signCur');
    }
    for(var i= 0,len=aSign.length;i<len;i++){
        if(_index==i){
            var cur=aSign[i];
            if(!(/signCur/.test(cur.className))){
                cur.style.display='block';
                var siblings=utils.siblings(cur);
                for(var j=0;j<siblings.length;j++){
                    siblings[j].style.display='none';
                }
                clearInterval(timer2);
                timer2=setTimeout(function(){
                    cur.classList.add('signCur');
                },100)
            }
        }
    }
    bannerTip();
}
function bannerTip(){
    for(var i=0;i<aI.length;i++){
        aI[i].className=i===_index?'bg1':null;
    }
}
handleChange();
function  handleChange(){
    for(var i=0;i<aI.length;i++){
        (function(i){
            aI[i].onclick=function(){
                _index=i;
                //clearInterval(timer1);
                setBanner();
            }
        })(i)
    }
}
btnChange();
function btnChange(){
    btnL.onclick=function(){
        clearInterval(timer1);
        _index--;
        if(_index===-1){
            _index=aSign.length-1;
        }
        setBanner();
        timer1=setInterval(autoMove,7000);
    };
    btnR.onclick=function(){
        clearInterval(timer1);
        autoMove();
        timer1=setInterval(autoMove,7000);
    }
}
