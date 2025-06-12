const menuIcon=document.querySelector(".menu-icon");
const navLinks=document.querySelector("#navLinks");


menuIcon.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});

window.addEventListener("load",()=>{
    window.location.hash="#"
})

