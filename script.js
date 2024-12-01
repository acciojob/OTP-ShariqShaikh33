var elts = document.getElementsByClassName('code')
Array.from(elts).forEach(function(elt){
  elt.addEventListener("keydown", function(event) {
    if (event.key >= 0 && event.key <= 9) { // if the key is a number
      setTimeout(() => { // wait until the input value is updated
        if (elt.value.length === 1) { // if the input field is filled
          // Check if the next sibling exists before focusing
          if (elt.nextElementSibling) {
            elt.nextElementSibling.focus();
          }
        }
      }, 10);
    }
    if (event.key === 'Backspace' && elt.value.length === 0) { // if backspace is pressed and the input field is empty
      // Check if the previous sibling exists before focusing
      if (elt.previousElementSibling) {
        elt.previousElementSibling.focus();
      }
    }
  });
});