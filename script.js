window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav');
    var scrolled = window.scrollY > 0;

   
    if (scrolled) {
        navbar.classList.add('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-transparent');
    }
});



function showDropdown() {
    var dropdownContent = document.getElementById("aboutDropdown");
    dropdownContent.style.display = "block";
}

function hideDropdown() {
    var dropdownContent = document.getElementById("aboutDropdown");
    dropdownContent.style.display = "none";
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("aboutDropdown");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}


function toggleMenu() {
    var navLinks = document.querySelector('.navlinks');
    var hamburgerIcon = document.querySelector('.hamburger-icon');

    
    hamburgerIcon.classList.toggle('active');

    
    navLinks.classList.toggle('active');

  
    var dropdownContent = document.querySelector('.dropdown-content');
    if (navLinks.classList.contains('active')) {
        dropdownContent.style.display = 'none';
    }
}


document.addEventListener('click', function (event) {
    var navLinks = document.querySelector('.navlinks');
    var hamburgerIcon = document.querySelector('.hamburger-icon');

    if (!navLinks.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        navLinks.classList.remove('active');
        hamburgerIcon.classList.remove('active'); 
    }
});


