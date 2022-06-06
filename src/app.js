// const btns = document.querySelectorAll(".drop-btn");
// const ul = document.querySelectorAll(".ul");



// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle("active-btn");
//     })
// })

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