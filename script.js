window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

var here = document.getElementById('here');

here.addEventListener('click', function() {
    alert('You find it! It's number 2');
});

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  
    console.log("scrolled:"+percentOfScreenHeightScrolled*100)
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()
