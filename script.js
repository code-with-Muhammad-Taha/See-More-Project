function toggleText() {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let btn = document.getElementById("btn");

  if (more.style.display === "none") {
    more.style.display = "inline";
    dots.style.display = "none";
    btn.innerText = "Read Less";
  } else {
    more.style.display = "none";
    dots.style.display = "inline";
    btn.innerText = "Read More";
  }
}