const pageHeadingText = 'Tuesday Activity';
const menuHeadText = 'Menu';
const orderHeadText = 'Order';
const cartHeadText = 'Cart';
const buttonText = 'Add to Cart';

const pagePaths = [
  { path: 'home.html', pathName: 'Home' },
  { path: 'menu.html', pathName: menuHeadText },
  { path: 'order.html', pathName: orderHeadText },
];
const menu = [
  {
    name: 'Product A',
    price: 5,
    description: 'Product A can solve problems',
    imageUrl: 'https://images.unsplash.com/photo-1630283922235-a97c7bef05f4',
  },
  {
    name: 'Product B',
    price: 10,
    description: 'Product B can bypass problems',
    imageUrl: 'https://images.unsplash.com/photo-1600692761669-37d5d12dd879',
  },
  {
    name: 'Product C',
    price: 22,
    description: 'Product C can eliminate problems',
    imageUrl: 'https://images.unsplash.com/photo-1599927260303-ea937f6a1beb',
  },
];

const itemQuantity = [];

for (i = 0; i < 11; i++) {
  itemQuantity.push(i);
}
