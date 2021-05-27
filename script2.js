const collapsible = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    this.classList.toggle('active');
    let project = this.nextElementSibling;
    if (project.style.maxHeight){
      project.style.maxHeight = null;
    } else {
      project.style.maxHeight = project.scrollHeight + "px";
    }
  });
}