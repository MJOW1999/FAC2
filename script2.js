var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle('active');
    let project = this.nextElementSibling;
    if (project.style.maxHeight){
      project.style.maxHeight = null;
    } else {
      project.style.maxHeight = project.scrollHeight + "px";
    }
  });
}