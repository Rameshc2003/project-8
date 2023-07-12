function add(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var x=a+b;
    document.getElementById("add").innerHTML=x;

}
function sub(){
    var a=(document.getElementById("n1").value);
    var b=(document.getElementById("n2").value);
    var x=a-b;
    document.getElementById("sub").innerHTML=x;
}
function multi(){
    var a=(document.getElementById("n1").value);
    var b=(document.getElementById("n2").value);
    var x=a*b;
    document.getElementById("multi").innerHTML=x;
}
function div(){
    var a=(document.getElementById("n1").value);
    var b=(document.getElementById("n2").value);
    var x=a/b;
    document.getElementById("div").innerHTML=x;
}