var showing = 0;
var projects = document.getElementById("projects");

function show() {
    if (showing == 1) {
      projects.style.display = "none";
      showing = 0;
    } else {
      projects.style.display = "block";
      showing = 1;
    }
}