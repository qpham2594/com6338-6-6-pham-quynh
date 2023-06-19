// create variables for the main menu, the hamburger button, and the hamburger menu

var mainMenu  = document.getElementById('main-menu')
var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

// when user clicks on hamburger button...

hamburgerBtn.addEventListener("click", function() {
    //var showMenu = hamburgerMenu.classList.contains('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', true);   //aria-expanded with hamburger button
    hamburgerBtn.classList.toggle("active");        //toggle is active with the button so it shows the menu
    hamburgerMenu.classList.toggle("show-menu")     //the toggle triggers menu from "show-menu"
})

// set a function to close menu to make it efficient

function closeMenu () {
    hamburgerBtn.removeAttribute('aria-expanded');  // aria-expanded = false when menu is closed
    hamburgerBtn.classList.toggle("inactive");          // toggle is inactive
    hamburgerMenu.classList.remove("show-menu");            //hamburger menu removes the menu 
    hamburgerBtn.focus()                            // hamburger button focus
}

// when pressing Escape, the menu will close with closeMenu function
document.onkeyup = function(e) {        
    if (e.key === 'Escape') {
       closeMenu ()
    }
}

// when the user clicks anywhere on the document that's not the burger button, the menu, and the burger menu shows 'show-menu' then the menu will close
document.addEventListener("click", function(){
    if (hamburgerMenu.classList.contains('show-menu') && !hamburgerBtn.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        closeMenu()
    }
})