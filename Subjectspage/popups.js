



function openPopup(sbj) {
  var subjdiv = document.getElementById("subjects")
  var subject = document.getElementById(`${sbj}`);
  subject.style.top = "40%";
  console.log(sbj);

}

function closePopup(sbj) {
  var subjdiv = document.getElementById("subjects")
  var subject = document.getElementById(`${sbj}`);
  subject.style.top = "1000%";
  console.log(subject.textContent);
}




var el = document.getElementById('englang');
var sp = document.getElementById('spanish')
var phy = document.getElementById('phys')
var elit = document.getElementById('englit')
var cs = document.getElementById('compsci')
var bio = document.getElementById('biology')
var his = document.getElementById('hist')
var math = document.getElementById('maths')
var it = document.getElementById('ict')
var geo = document.getElementById('geog')
var chem = document.getElementById('chemistry')
var fr = document.getElementById('french')
el.addEventListener('click', function() {
  openPopup("el")
})
sp.addEventListener('click', function() {
  openPopup("sp")
})
phy.addEventListener('click', function() {
  openPopup("phy")
})
elit.addEventListener('click', function() {
  openPopup("elit")
})
cs.addEventListener('click', function() {
  openPopup("cs")
})
bio.addEventListener('click', function() {
  openPopup("bio")
})
his.addEventListener('click', function() {
  openPopup("his")
})
math.addEventListener('click', function() {
  openPopup("math")
})
it.addEventListener('click', function() {
  openPopup("IT")
})
chem.addEventListener('click', function() {
  openPopup("chem")
})
geo.addEventListener('click', function() {
  openPopup("geo")
})
fr.addEventListener('click', function() {
  openPopup("fr")
})






/* MAKING POPUPS DRAGGABLE */
dragElement(document.getElementById("el"));
dragElement(document.getElementById("sp"));
dragElement(document.getElementById("phy"));
dragElement(document.getElementById("elit"));
dragElement(document.getElementById("cs"));
dragElement(document.getElementById("bio"));
dragElement(document.getElementById("his"));
dragElement(document.getElementById("math"));
dragElement(document.getElementById("IT"));
dragElement(document.getElementById("chem"));
dragElement(document.getElementById("geo"));
dragElement(document.getElementById("fr"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {

  
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}  

jQuery(function($){
    $(".popup").resizable({
      helper: "ui-resizable-helper",
      handles: "se",
      grid: [10, 10]
    });
});