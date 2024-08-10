var x = 0;
var y =0;
var z =0;

function inc(val,a){
    if(a==="1")
        document.getElementById(val).innerHTML=x++;
    else if(a==="2")
        document.getElementById(val).innerHTML=y++;
   

}
function des(val,a){
    
    document.getElementById(val).innerHTML=--a;
}