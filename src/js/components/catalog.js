const rangeSlider = document.getElementById("range")
const rangeInput0 = document.getElementById("range-input1")
const rangeInput1 = document.getElementById("range-input2")
const rangePrice1 = document.getElementById("range-price1")
const rangePrice2 = document.getElementById("range-price2")
const rangePrices = [rangePrice1, rangePrice2]
const rangeInputs = [rangeInput0, rangeInput1]
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, rangeInput1.getAttribute("max")],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': +rangeInput1.getAttribute("max")
        }
    });
}
if (rangeSlider) {
    rangeSlider.noUiSlider.on('update', function(values, handle) {
        rangeInputs[handle].value = Math.round(values[handle])
        rangePrices[handle].innerHTML = Math.round(values[handle])
    })
    rangeInputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
            rangePrices[index].innerHTML = e.currentTarget.value
        })
    })
}


const setRangeSlider = (i, value) => {
    let array = [null, null];
    array[i] = value;

    rangeSlider.noUiSlider.set(array);
};


let filterToggleBtn = document.querySelector(".catalog__filter-btn")
let filterClose = document.querySelectorAll(".close-filter")
let filter = document.querySelector(".filter")

filterToggleBtn.onclick = function() {
    filter.classList.add("filter--active")
    document.querySelector("body").classList.add("fixed-body")
}

filterClose.forEach(el => {
    el.onclick = function() {
        filter.classList.remove("filter--active")
        document.querySelector("body").classList.remove("fixed-body")
    }
})