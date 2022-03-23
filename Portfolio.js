const toggle = document.querySelector(".menu")
console.log(toggle)
const hide = document.querySelector(".hide-links")
console.log(hide)

toggle.addEventListener("click", function(){
    
    hide.classList.toggle("show-links")
})
