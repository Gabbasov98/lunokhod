let calcMinus = document.querySelectorAll(".cartcalc .ccalc-minus")
let calcPlus = document.querySelectorAll(".cartcalc .ccalc-plus")


function cartCalc() {

    calcMinus.forEach(el => {
        el.onclick = function() {
            let input = el.closest('.cartcalc').childNodes[3]
            let a = input.value;
            console.log(input.value);
            if (a > 1) {
                let b = +a - 1;
                input.value = b;
            } else {
                input.value = a;
            }
        }
    });

    calcPlus.forEach(el => {
        el.onclick = function() {
            let input = el.closest('.cartcalc').childNodes[3]
            let a = input.value;
            let b = +a + 1;
            input.value = b;
        }
    });




    // $('.cartcalc .ccalc-minus').click(function() {
    //     let a = $(this).closest('.cartcalc').find('input').val();
    //     if (a > 1) {
    //         let b = +a - 1;
    //         $(this).closest('.cartcalc').find('input').val(b);
    //     } else {
    //         $(this).closest('.cartcalc').find('input').val(a);
    //     }
    // });
    // $('.cartcalc .ccalc-plus').click(function() {
    //     let a = $(this).closest('.cartcalc').find('input').val();
    //     let b = +a + 1;
    //     $(this).closest('.cartcalc').find('input').val(b);
    // });
}

cartCalc()