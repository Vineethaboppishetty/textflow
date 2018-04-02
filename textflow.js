var left = document.getElementById("left"),
    right = document.getElementById("right"),
    clr;
document.getElementById("shiftRight").addEventListener("click",moveRight);

function moveRight(){
    clearInterval(clr);
    var left1 = left.value
     clr=setInterval(function(){
        document.getElementById("right").value += left.value.substring(0,1);
        left.value = left.value.substring(1);
    },1000)
}


document.getElementById("shiftLeft").addEventListener("click",moveLeft);

function moveLeft(){
    clearInterval(clr);
    var right1 = right.value;
     clr = (setInterval(function(){
        left.value = right.value.substring(right.value.length-1) + left.value;
        right.value = right.value.substring(0,right.value.length-1);
    },1000));
}

document.getElementById("pause").addEventListener("click",function (){
    clearInterval(clr);
});

