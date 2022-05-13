const cartHeading = document.getElementById('cartHeadText');

cartHeading.innerHTML = cartHeadText;

if (localStorage.getItem("Item Quantity")) {
    const cartValue = document.getElementById('cart');
    cartValue.innerHTML = localStorage.getItem("Item Quantity")
}
