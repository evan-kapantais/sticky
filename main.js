var small = document.getElementById("small");
var sticky = small.offsetTop;

window.onscroll = function stickit() {
  if (window.scrollY >= sticky) {
    small.classList.add("sticky");
  } else {
    small.classList.remove("sticky");
  }
}