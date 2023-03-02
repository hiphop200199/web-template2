window.addEventListener("load",function(){
let container=document.querySelector(".container");
let hue=182;
let topBtn=document.querySelector(".top");
let playBtn=document.querySelectorAll(".play");
let energetic=new Audio("energetic.mp3");
let stay=new Audio("stay.mp3");
let freedom=new Audio("freedom.mp3");
let nature=new Audio("nature.mp3");
let musicBars=document.querySelectorAll(".music-bar");
window.addEventListener("scroll",function(){
    hue++;
    if(hue==360)hue=0;
  container.style.backgroundColor=`hsl(${hue},94%,67%)`;
});
topBtn.addEventListener("click",function(){
location.href="#";
});
playBtn[0].addEventListener("click",function(){
energetic.loop=true;
energetic.volume=0.3;
stay.pause();
freedom.pause();
nature.pause();
if(energetic.paused){
    energetic.play();
    for(let i=0;i<musicBars.length;i++){
        musicBars[i].style.animationPlayState="running";
    }
}else{
    energetic.pause();
    for(let i=0;i<musicBars.length;i++){
        musicBars[i].style.animationPlayState="paused";
    }
}

});
playBtn[1].addEventListener("click",function(){
    stay.loop=true;
    stay.volume=0.4;
    energetic.pause();
freedom.pause();
nature.pause();
    if(stay.paused){
        stay.play();
        for(let i=0;i<musicBars.length;i++){
            musicBars[i].style.animationPlayState="running";
        }
    }else{
        stay.pause();
        for(let i=0;i<musicBars.length;i++){
            musicBars[i].style.animationPlayState="paused";
        }
    }
    
 });
playBtn[2].addEventListener("click",function(){
        freedom.loop=true;
        freedom.volume=0.4;
        stay.pause();
energetic.pause();
nature.pause();
        if(freedom.paused){
            freedom.play();
            for(let i=0;i<musicBars.length;i++){
                musicBars[i].style.animationPlayState="running";
            }
        }else{
            freedom.pause();
            for(let i=0;i<musicBars.length;i++){
                musicBars[i].style.animationPlayState="paused";
            }
        }
        
});
playBtn[3].addEventListener("click",function(){
            nature.loop=true;
            nature.volume=0.4;
            stay.pause();
freedom.pause();
energetic.pause();
            if(nature.paused){
                nature.play();
                for(let i=0;i<musicBars.length;i++){
                    musicBars[i].style.animationPlayState="running";
                }
            }else{
                nature.pause();
                for(let i=0;i<musicBars.length;i++){
                    musicBars[i].style.animationPlayState="paused";
                }
            }
            
});
});