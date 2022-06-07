let menuItems = document.querySelectorAll(".menu__item")

initMenuToggles()

window.onresize = function() {
    initMenuToggles()
}

function initMenuToggles() {
    menuItems.forEach(el => {
        if (window.innerWidth < 992) {
            nst.init(el);
        } else {
            nst.init();
        }
    });
}