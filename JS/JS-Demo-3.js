function closeMe(){
    // Find the element 
         document.getElementById("demo").style.display="none";
     //Option 1: Change the style attribute directly
        // (I updated the above to see if I didn't need a variable!)

    //Option 2: Change the class
          // x.className="closed";
  }

function openMe(){
    // Find the element
         x=document.getElementById("demo");
    //Option 1: Change the style attribute directly
          x.style.display="block";
    
    //Option 2: Change the class which calls the CSS therefore, doing the same as above
          // x.className="open";
  }