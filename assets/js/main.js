function mobileNav() {
  var x = document.getElementById("nav");
  if (x.className === "hidden") {
    x.className = "show";
  } else {
    x.className = "hidden";
  }
}

window.onclick = (event) => {
  if (!event.target.matches("i.fa.fa-bars")) {
    var x = document.getElementById("nav");

    if (x.classList.contains("show")) {
      x.classList.remove("show");
      x.classList.add("hidden");
    }
  }
};
