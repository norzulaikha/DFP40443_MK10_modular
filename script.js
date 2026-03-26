function calculateTotal() {

    let total = 0;
    let inputs = document.querySelectorAll('.qty-input');

    for (let i = 0; i < inputs.length; i++) {

        let qty = parseInt(inputs[i].value) || 0;
        let price = parseFloat(inputs[i].dataset.price);

        total += qty * price;
    }

    let displayTotal = document.getElementById('totalPrice');

    if (displayTotal !== null) {
        displayTotal.innerHTML = "RM " + total.toFixed(2);
    }
}

window.addEventListener("load", calculateTotal);