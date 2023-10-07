const date = new Date().getFullYear();
document.querySelector(".current").innerHTML = "&copy " + date + " ifesico ";
const bar1 = document.getElementById("navbar");
const bar2 = document.querySelector(".second");
const bar = document.querySelector(".nav-button");
bar.addEventListener("click", () => {
  bar1.classList.remove("navbar2");
  bar.style = "display:none";
  bar2.classList.remove("bar");
});
bar2.addEventListener("click", () => {
  bar2.classList.add("bar");
  bar1.classList.add("navbar2");
  bar.style = "display:inherit";
});
