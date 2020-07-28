function myFunction(){
    var navbar=document.getElementById("navbar");
    var y=navbar.scrollTop;
    document.getElementById("demo").innerHTML = "Vertically: " + y + "px";
    if(y>=20){
        navbar.style.opacity='100';
    }
}