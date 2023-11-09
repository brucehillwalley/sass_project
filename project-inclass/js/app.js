//? JS
const hamburgerBtn=document.querySelector(".fa-bars")
const navbarMenu=document.querySelector("#navbarMenu");
hamburgerBtn.addEventListener("click",()=>{

    const headerLinks=document.querySelector(".header__links")
headerLinks.classList.toggle("show")

})
