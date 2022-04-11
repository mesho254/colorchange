const buttonBcg = document.querySelector("button");
const button = document.querySelector("button");

button.addEventListener("click",function(){
    var color = ["green","Purple","Pink","brown","aqua","aquamarine","grey","red","white","maroon"];

    let random = Math.floor(Math.random()*color.length);

    buttonBcg.style.backgroundColor = color[random];
});