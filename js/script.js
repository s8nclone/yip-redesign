
$(document).ready(function() {
    AOS.init();

    let hamburger = $(".hamburger");
    let navmenu = $(".navitems");

    const openNav = () => {
        hamburger.toggleClass("active");
        navmenu.toggleClass("active");
    }

    // attach click event handlers to elements
    hamburger.click(openNav);

});


  