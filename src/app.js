const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger-menu");
const hamburgerClose = document.querySelector(".hamburger-close");
const navOverlay = document.querySelector(".nav-overlay");
const body = document.querySelector(".body");




menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburgerClose.classList.toggle("active");
    navOverlay.classList.toggle("active");
    body.classList.toggle("active");
    })


const question = document.querySelectorAll(".title-li");

question.forEach(function(e){
    const btn = e.querySelector(".drop-btn")
    
    btn.addEventListener("click", function(){
        question.forEach(function(item){
            if(item !== e){
                item.classList.remove("active-btn");
            }
        })

        e.classList.toggle("active-btn");
    })
})