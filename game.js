var randone = document.querySelector("#powerball1");
var randtwo = document.querySelector("#powerball2");
var randthree = document.querySelector("#powerball3");
var randfour = document.querySelector("#powerball4");
var randfive = document.querySelector("#powerball5");
var randsix =  document.querySelector("#pick6");

var generate = document.querySelector("#getRandom")
    generate.addEventListener("click", function() {
    pb1();
    pb2();
    pb3();
    pb4();
    pb5();
    mp6();

})


const pb1 = ()=> {
    randone.value = Math.floor(Math.random() * 70)
}

const pb2 = ()=> {
    randtwo.value = Math.floor(Math.random() *70)
}

const pb3=()=>{
    randthree.value = Math.floor(Math.random() *70)
 }

 const pb4=()=>{
    randfour.value = Math.floor(Math.random() *70)
 }

 const pb5=()=>{
    randfive.value = Math.floor(Math.random() *70)
 }

const mp6=()=> {
    randsix.value = Math.floor(Math.random() *27)
}
