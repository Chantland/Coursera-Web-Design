// ============ Javascript for HTML ============

//========================= ways of displaying text (print) =========================/////


alert("Hello world");
prompt("enter your name") // ask for input from user
document.write("Time to learn Javascript") // more permanent, wrote directly to the page (not usually reccommeded)
console.log('Leave a secret message') // write a message that might not be seen by everyone.

// inner html
// API that seeks an element
element.innerHTML = "Time to learn Javascript"

// document is the document then within that document the getElementID('output') searches for the id = "output"
// .inneHTML will refer to the contents of the tag (like <div> APPLE </div> outputs apple. I think this is the case but I should double check)
function message(msg)
	{
  		document.getElementById('output').innerHTML = msg + " event";
	}

// ========================= Events =========================
// (there are more than these)
// onclick        -   event upon click
// onmouseover    -   event upon hovering
// onresize       -   event upon resizing the browser window
// onload         -   event upon finishing loading a page (this is commonly used)