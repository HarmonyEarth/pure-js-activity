const orderHeading = document.getElementById('orderHeadText');

orderHeading.innerHTML = orderHeadText;

const orderItemName = ['Please Select A Product'];

for (i = 0; i < menu.length; i++) {
  orderItemName.push(menu[i].name);
}

const orderItemNameSelect = document.getElementById('orderItem');
if (orderItemName.length > 1) {
  for (i = 0; i < orderItemName.length; i++) {
    const option = document.createElement('option');
    option.text = option.value = orderItemName[i];
    orderItemNameSelect.appendChild(option);
  }
}

const orderItemQuantitySelect = document.getElementById('orderItemQuantity');

for (i = 0; i < itemQuantity.length; i++) {
  const option = document.createElement('option');
  option.text = option.value = itemQuantity[i];
  orderItemQuantitySelect.appendChild(option);
}


const orderButton = document.getElementById('orderButton');
orderButton.innerHTML = buttonText  
orderButton.addEventListener('click', () => {
  if (orderItemNameSelect.value !== orderItemNameSelect[0] && orderItemQuantitySelect.value !== orderItemQuantitySelect[0]) {
    localStorage.setItem('Item Name', orderItemNameSelect.value);
    localStorage.setItem('Item Quantity', orderItemQuantitySelect.value);
  }

})