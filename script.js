window.addEventListener("load",function(){
let container=document.querySelector(".container");
let hue=24;
window.addEventListener("scroll",function(){
    hue++;
    console.log(hue);
    container.style.backgroundColor=`rgb(${hue},241,248)`;
});




});