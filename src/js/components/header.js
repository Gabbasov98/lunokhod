let socialsToggler = document.querySelector(".header__contacts-toggler")
let body = document.querySelector("body")
let headerContacts = document.querySelector(".header__contacts")
let header = document.querySelector(".header")
let headerMenu = document.querySelector(".header .menu")
let headerMenuBtn = document.querySelector(".header__btn")
let headerMenuBackdrop = document.querySelector(".header .menu__backdrop")
let headerNav = document.querySelector(".header-nav")
let headerBurger = document.querySelector(".header__burger")


if (socialsToggler) {
    socialsToggler.onclick = function() {
        this.classList.toggle("header__contacts-toggler--active")
    }

    document.addEventListener('click', (e) => {
        const withinContacts = e.composedPath().includes(headerContacts);

        if (!withinContacts && socialsToggler.classList.contains("header__contacts-toggler--active")) {
            socialsToggler.classList.remove("header__contacts-toggler--active")
        }

    })
}


if (headerMenuBtn) {
    headerMenuBtn.onclick = function() {
        if (this.classList.contains('header__btn--link')) {
            return
        }
        header.classList.toggle("header--menu-show")
        if (window.innerWidth < 992) {
            body.classList.toggle("fixed-body")
        }
    }
}


if (headerMenuBackdrop) {
    headerMenuBackdrop.onclick = function() {
        header.classList.remove("header--menu-show")
        body.classList.remove("fixed-body")
    }
}

if (header) {
    fixHeader()
    window.onscroll = function() {
        fixHeader()
        if (window.innerWidth < 992) {
            fixMobHeader()
        }
    }
}


function fixHeader() {
    if (window.innerWidth < 992) {

    } else {
        if (window.scrollY > 150) {
            header.classList.add("header--fix")
        } else {
            header.classList.remove("header--fix")
        }
    }

}

var scrollPos = 0;

function fixMobHeader() {
    if (window.scrollY > scrollPos) {
        header.classList.add("header--fix")
        headerNav.classList.add("header-nav--fix")
    } else {
        header.classList.remove("header--fix")
        headerNav.classList.remove("header-nav--fix")
    }
    scrollPos = window.scrollY
}

let catalogToggler = document.querySelector(".header__catalog-toggler")

if (headerBurger) {
    headerBurger.onclick = function() {
        header.classList.toggle("header--menu-show")

        if (headerNav.classList.contains("header-nav--active")) {
            body.classList.add("fixed-body")
            headerNav.classList.remove("header-nav--active")
        } else {
            body.classList.toggle("fixed-body")
        }


    }
}

if (catalogToggler) {
    catalogToggler.onclick = function() {
        headerNav.classList.toggle("header-nav--active")
        if (header.classList.contains("header--menu-show")) {
            body.classList.add("fixed-body")
            header.classList.remove("header--menu-show")
        } else {
            body.classList.toggle("fixed-body")
        }
    }
}