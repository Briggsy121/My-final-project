const header = document.querySelector("head");

window.addEventListener("scroll" , function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})