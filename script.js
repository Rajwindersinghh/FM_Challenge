const menuIcon = document.getElementById("menu");
const mobileNavBar = document.querySelector(".navigation-container");
const linksContainer = document.querySelectorAll(".product , .company , .connect");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("open");
    mobileNavBar.classList.toggle("open");
});

linksContainer.forEach(container=>{
    container.addEventListener("click",()=>{
        const optionsList = container.parentElement.querySelector(".options-list");
        optionsList.classList.toggle("open");
    })
});

