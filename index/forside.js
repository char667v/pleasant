//Burger Menu
document.getElementById("burgerIcon").addEventListener("click", function () {
  var navbar = document.getElementById("myNavbar");
  navbar.classList.toggle("show");
});

//Search section
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("search", function () {
  if (!this.value) {
    this.style.width = "70px"; // Set the width back to the initial size
  }
});
