//your JS code here. If required.
var elts = document.getElementsByClassName('code')
Array.from(elts).forEach(function(elt){
  elt.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (elt.value.length == 3) {
      // Focus on the next sibling
      elt.nextElementSibling.focus()
    }
  });
})