const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close the menu when a menu item is clicked (optional)
const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Show/hide the burger menu button based on screen width (optional)
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    menuToggle.style.display = "block";
    menu.classList.remove("active");
  } else {
    menuToggle.style.display = "none";
    menu.classList.add("active");
  }
});

// Initialize the menu display based on screen width
if (window.innerWidth < 768) {
  menuToggle.style.display = "block";
} else {
  menuToggle.style.display = "none";
  menu.classList.add("active");
}
