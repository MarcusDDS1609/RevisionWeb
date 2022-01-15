/* Side nav button */
  function toggleSideNav() {
    console.log("Button works");
    var sidenav = document.getElementById("Sidebar");
    var subjects = document.getElementById("subjects")
    if(sidenav.style.width == "25rem"){
      sidenav.style.width = "0"
    }
    else {
      sidenav.style.width="25rem"
    }


    var sidenavbutton = document.getElementById("switch");
    var subjects = document.getElementById("subjects")
    var menu = document.getElementById("Menu")
    if(sidenav.style.width == "25rem"){
      sidenavbutton.style.left = "25rem"
      menu.style.left = "20%"
      document.getElementById("form_spotify").style.display = "block";
      subjects.style.left = "22.5%"
      subjects.style.gap = "45% 5%"
      
    }
    else {
      sidenavbutton.style.left = "0";
      menu.style.left = "-20rem";
      document.getElementById("form_spotify").style.display = "none"
      subjects.style.left = "8rem"
      subjects.style.gap = "30% 10%"
    }
};

/* To do list code */

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
var num = 1;
addToDoButton.addEventListener('click', function() {
  var taskNumber = document.createElement('p');
  var paragraph = document.createElement('p');
  var checkmark = document.createElement('p');
  paragraph.setAttribute('contenteditable', 'true');
  paragraph.classList.add('paragraph-styling');
  taskNumber.classList.add('taskNumber-styling');
  checkmark.classList.add('checkmark-styling');
  taskNumber.innerText = num++;
  paragraph.innerText = "Click to edit";
  checkmark.innerText= "";
  toDoContainer.appendChild(checkmark);
  toDoContainer.appendChild(taskNumber);
  toDoContainer.appendChild(paragraph);
  paragraph.addEventListener('click', function() {
    paragraph.innerText = ""
  })
  checkmark.addEventListener('click', function() {
    paragraph.style.textDecoration = 'line-through';
  })
  checkmark.addEventListener('dblclick', function() {
    toDoContainer.removeChild(paragraph)
    toDoContainer.removeChild(checkmark)
    toDoContainer.removeChild(taskNumber)
  })
})


/* Spotify Player code */


function spotifyPageLoad() {
  console.log("THE CODE IS", $.cookie('playlist'))
  var link = $.cookie('playlist')
  code1 = link.split("playlist/")[1];
  code = code1.split("si")[0];
  var iframe = document.getElementById("spotifyFrame");
  iframe.src =`https://open.spotify.com/embed/playlist/${code}utm_source=generator width="100%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"`
  $.cookie("playlist", link)
  iframe.src = iframe.src;
}


function newSite() {
  var link = document.getElementById("code").value;
  code1 = link.split("playlist/")[1];
  code = code1.split("si")[0];
  var iframe = document.getElementById("spotifyFrame");
  iframe.src =`https://open.spotify.com/embed/playlist/${code}utm_source=generator width="100%" height="200px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"`
  $.cookie("playlist", link)
  iframe.src = iframe.src;


  console.log(iframe.src)
  console.log(code)
}
  function openSpotifyLink(link) {
    var link = document.getElementById("code").value;

    var music = document.getElementById("musicLink");

    music.href = link;
    console.log(link)
    console.log(music)
  }


/* MAKING SPOTIFY DIV MOVEABLE */
//Make the DIV element draggagle:
dragElement(document.getElementById("spotifyPlayer"));
function dragElement(elmnt) {



  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("spotifyBtn")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("spotifyBtn").onmousedown = dragMouseDown;

  
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





var input = document.getElementById("code");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  newSite()
  }
});


/* DARK MODE CODE */

function checkTheme() {
  var theme = $.cookie("theme")
  var checkBox = document.getElementById('dn');
  if(theme == "light"){
    console.log(theme)
    lightMode()
    checkBox.checked = false

  }
  else {
    console.log(theme)
    darkMode()
    checkBox.checked = true
  }
}

function changeTheme() {
  var checkBox = document.getElementById('dn')
  

  if(checkBox.checked == true){1800
    console.log("DARK MODE ON")
    darkMode()
  }
  else {1800
    console.log("DARK MODE OFF")
    lightMode()
    
  }
}

function swapStyleSheet(sheet) {
    document.getElementById('themeSheet').setAttribute("href", sheet)
  }

function darkMode() {
 
  swapStyleSheet("subjectsdarkmodemode.css");
  $.cookie("theme", "dark")
}

function lightMode() {
  swapStyleSheet("Subjects.css");
  $.cookie("theme", "light")
}

