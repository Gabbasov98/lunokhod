let socialsToggler = document.querySelector(".header__contacts-toggler")
let body = document.querySelector("body")
let headerContacts = document.querySelector(".header__contacts")
let header = document.querySelector(".header")
let headerMenu = document.querySelector(".header .menu")
let headerMenuBtn = document.querySelector(".header__btn")
let headerMenuBackdrop = document.querySelector(".header .menu__backdrop")


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
    }
}


function fixHeader() {
    if (window.innerWidth < 992) {
        return
    }
    if (window.scrollY > 150) {
        header.classList.add("header--fix")
    } else {
        header.classList.remove("header--fix")
    }

}


let headerSearch = document.querySelector(".header__search")
let headerSearchBtn = document.querySelector(".header__toggle-search")

if (headerSearchBtn) {
    headerSearchBtn.onclick = function() {
        headerSearchBtn.classList.toggle("header__toggle-search--active")
        headerSearch.classList.toggle("header__search--active")
    }
}