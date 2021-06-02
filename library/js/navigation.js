let NavIsOpen = false;

function OpenNavigation() {

    let nav = document.getElementById("large-nav-container");
    let openedButton = document.getElementById("opened-button");
    let closedButton = document.getElementById("closed-button");


    if (NavIsOpen == false) {
        NavIsOpen = true

        nav.style.display = "block";
        openedButton.style.display = "none";
        closedButton.style.display = "block";

    } else if (NavIsOpen == true) {
        NavIsOpen = false

        nav.style.display = "none";
        openedButton.style.display = "block";
        closedButton.style.display = "none";
    }
}