const menuHeading = document.getElementById('menuHeadText');

menuHeading.innerHTML = menuHeadText;

const menuItem = document.getElementById('menuItem');

for (i = 0; i < menu.length; i++) {
  const menuImgTag = document.createElement('img');
  const menuItemName = document.createElement('h4');
  const menuItemPrice = document.createElement('h5');
  const menuItemDesc = document.createElement('p');
  menuImgTag.src = menu[i].imageUrl;
  menuImgTag.style.height = '60px';
  menuItem.appendChild(menuImgTag);
  menuItemName.innerHTML = menu[i].name;
  menuItem.appendChild(menuItemName);
  menuItemPrice.innerHTML = `$${menu[i].price}`;
  menuItemPrice.style.color = 'green';
  menuItem.appendChild(menuItemPrice);
  menuItemDesc.innerHTML = menu[i].description;
  menuItem.appendChild(menuItemDesc);
}
