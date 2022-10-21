function pn(){
    console.log(1);
    setTimeout(function() {console.log(2); }, 1001);
    setTimeout(function() {console.log(3); }, 1000);
    console.log(4);
}
pn();