let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".nav-menu");

menu.onclick = () => {
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-times");
  // navmenu.classList.toggle("open");
};
