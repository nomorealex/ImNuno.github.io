window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function getElementById(ids) {
  var elements = [];
  let count = 0
  ids.forEach(element => {
    elements[count++] = document.getElementById(element);  
  });
  return elements;
}

function setComponentsVariables(htmlElement) {
  var ids = ["topicwd", "topicvcs", "topicsd", "topicrd", "topicba", "topictf", "topicwm", "topic3m"];
  var elements = getElementById(ids);
  let count = 0;
  elements.forEach(element => {
    let rect = element.getBoundingClientRect();
    let absoluteY = rect.top;
    htmlElement.style.setProperty(
      `--${ids[count++]}`,
      absoluteY
    )
  })
  console.log(elements)
}

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  
  console.log("scrolled:"+percentOfScreenHeightScrolled*100)
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty(
    "--scrollTotalHeight",
    percentOfScreenHeightScrolled*100
  )
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )

 setComponentsVariables(htmlElement);
}

setScrollVar()