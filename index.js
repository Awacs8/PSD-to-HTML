const toggleMenu = () => {
  var menu = document.getElementById("menu");
  var btn = document.querySelector(".menu-btn");
  menu.style.height === "0px"
    ? (menu.style.height = "350px")
    : (menu.style.height = "0px");
  btn.classList.toggle("menu-btn-close");
};

const toggleSubmenu = () => {
  var submenu = document.querySelector(".submenu-hidden");
  var arrowIcon = document.querySelector(".bottom");
  var submenuHeader = document.querySelector(".menu-list");
  submenu.classList.toggle("submenu");
  arrowIcon.classList.toggle("top");
  submenuHeader.childNodes[5].classList.toggle("submenu-header");
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};
