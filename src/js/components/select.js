document.querySelectorAll(".custom-select").forEach(el => {
    el.onclick = function() {
        el.classList.toggle("custom-select--active")
    }

    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(el);
        if (!withinBoundaries) {
            el.classList.remove("custom-select--active")
        }
    });
})

function unselectOption(dropdown) {
    for (let elem of dropdown.getElementsByTagName('div')) {
        elem.classList.remove("custom-select__dropdown-item--selected")
    }
}

document.querySelectorAll(".custom-select__dropdown-item").forEach(el => {
    el.onclick = function() {
        unselectOption(el.closest(".custom-select__dropdown"))
        el.classList.add("custom-select__dropdown-item--selected")
        for (let elem of el.closest(".custom-select").getElementsByTagName('input')) {
            elem.setAttribute("value", el.innerHTML)
        }
    }
})




let selected = document.querySelectorAll(".custom-select__dropdown-item--selected")

selected.forEach(el => {
    let val = el.innerHTML
    for (let elem of el.closest(".custom-select").getElementsByTagName('input')) {
        elem.setAttribute("value", val)
    }
})
