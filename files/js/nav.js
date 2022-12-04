function changedOnClick(){
    var checked = document.getElementById('check').checked;
    var search = document.getElementById('srch');
    var menu = document.getElementById('openMenu');
    var main = document.getElementById('main');

        if (checked) {
            search.style.left = '3em';
            menu.style.left = '0em';
            main.style.height = 'auto';
        }
        else {
            search.style.left = '-200vw';
            menu.style.left = '-300vw';
            main.style.height = '90%';
        } 
}

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       main.style.height = '90%';
//     } else {
//       main.style.height = 'auto';
//     }
//   }
  
//   var x = window.matchMedia("(min-width: 1130px)")
//   myFunction(x) // Call listener function at run time


