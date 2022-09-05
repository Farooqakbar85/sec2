const mobile_nav = document.querySelector(".btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () =>{
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click" , () =>toggleNavbar());