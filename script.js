let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector("#search-bar-container");

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle("fa-items");
    searchBar.classList.toggle("active");
});