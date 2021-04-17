let quan = document.getElementById("Qanti");
let decrement = document.getElementById("decr");
let increment = document.getElementById("incr");
let prouduit=document.getElementById("monD");

  let decrement2 = document.getElementById("decr2");
  let increment2 = document.getElementById("incr2");
  let prouduit2 = document.getElementById("monD2");


function heart1(){
if (back.style.color == 'red'){
        back.style.color = 'black'
    }
else{
    back.style.color ='red'
}
}

function plus(){
  quan.innerHTML=+quan.innerHTML+200
  increment.innerHTML=+increment.innerHTML+200
  decrement.innerHTML=+decrement.innerHTML+1
}

function min(){
 if(increment==0){
quan.innerHTML=quan.innerHTML
increment.innerHTML=increment.innerHTML+1
decrement.innerHTML=decrement.innerHTML
}else{
quan.innerHTML=+quan.innerHTML-200
increment.innerHTML=+increment.innerHTML-200
decrement.innerHTML=+decrement.innerHTML-1
}
}

function remove(){
  monD.style.display='none'
  quan.innerHTML=+quan.innerHTML-decrement.innerHTML

}
