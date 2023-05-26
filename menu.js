const menuHeading = document.getElementById('menuHeadText');

menuHeading.innerHTML = menuHeadText;

const menuItems = document.getElementById('menuItems');

for (i = 0; i < menu.length; i++) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
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

  menuItems.appendChild(menuItem);
}
