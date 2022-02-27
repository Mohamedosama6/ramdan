
left.addEventListener("click", function(){
    if(timer <= 0){
        timer = 1200;
        teamsItem.style.transform = "translateX("+ -timer +"px)";
    }else{
        timer -=400;
        teamsItem.style.transform = "translateX("+ -timer +"px)";
    }
});

 
let homeImg = document.querySelector("#home-img");
let imgCount = 200;
window.addEventListener("scroll" , (eo) => {
   
    if(this.pageYOffset > 80){
        document.getElementsByTagName("header")[0].classList.add("sticky");
        document.querySelector("#scroll-top").classList.add("right");
    }else {
        document.getElementsByTagName("header")[0].classList.remove("sticky");
        document.querySelector("#scroll-top").classList.remove("right");
    }
    homeImg.style.transform = `rotate(${imgCount + this.pageYOffset}deg)`;
});


let darck = document.querySelector(".dark-light");
let body = document.getElementsByTagName("body")[0];
darck.addEventListener("click", (eo) => {
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        darck.src = "img/dark/moon.png";
    }else {
        darck.src = "img/dark/sun.png";
    }
});


let loading = document.querySelector(".loading");
window.onload = (eo) => {
    loading.style.display = "none";
};


let buttons = document.querySelectorAll(".nav-item");
let arrOfButtons =  Array.from(buttons);

arrOfButtons.forEach( (item) => {

    item.addEventListener("click",(eo) => {
        loading.style.display = "block";
        setTimeout((eo) => {
            loading.style.display = "none";
        },3150);
    });
   
});
let aboutImgs = document.querySelector("#about-imgs");
let i = 0;
let imges = [ "img/about2-min.jpg","img/about2-min.jpg","img/about3-min.jpg","img/about4-min.jpg"];

const aboutCursorImg = (eo) => {
    if(i > 2) {
        i=0;
    }

    aboutImgs.src = imges[i];
    i++;
};

setInterval(aboutCursorImg, 2000);

}


const menuTabs = document.querySelector(".menu-tabs");

menuTabs.addEventListener("click",(eo) => {
    if(eo.target.classList.contains("menu-tab-item") && !eo.target.classList.contains("active") ){
            const target = eo.target.getAttribute("data-target");
            menuTabs.querySelector(".active").classList.remove("active");
            eo.target.classList.add("active");
            
            const menuSection = document.querySelector(".menu-section");
            menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
            menuSection.querySelector(target).classList.add("active");
    }
});

let closePopupFoode = document.querySelector('#close-popup-foode');
let menuPopup = document.querySelector(".menu-popup"); 
let imgPopup = document.querySelector("#img-popup");
let allImg = document.querySelectorAll("#imging");  

allImg.forEach((item) => {
    item.addEventListener("click",(eo) => {
        menuPopup.style.display = "flex";
        imgPopup.src = eo.target.src;
    });
});

let left = document.querySelector('#lefting');
let right = document.querySelector('#righting');
let teamsItem = document.querySelector('#teams');
let timer = 0;

right.addEventListener("click" ,(eo) => {
    if(timer >= 1200){
        timer = 0;
        teamsItem.style.transform = "translateX("+ -timer +"px)";
    }else{
        timer +=400;
        teamsItem.style.transform = "translateX("+ -timer +"px)";
    }
});


window.addEventListener("load",(eo) => {
    AOS.init();
});

let openList = document.querySelector("#open");
let closeList = document.querySelector("#close-bar");
openList.addEventListener("click" , (eo) => {
    document.querySelector("#navbar").classList.add("open");
});
closeList.addEventListener("click" , toggleNav);
function toggleNav(){
    document.querySelector("#navbar").classList.remove("open");
}


closePopupFoode.addEventListener("click",(eo) => {
    menuPopup.style.display = "none";
});




document.addEventListener("click", (eo) => {
    if( eo.target.closest(".nav-item") ){
        toggleNav();
      
    }
});



