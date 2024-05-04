const menuItems = [
    { name: 'Pancakes', image: '/IMAGES/pancakes.webp', description: 'Fluffy Buttermilk Pancakes', category: 'breakfast' },
    { name: 'Breakfast Tacos', image: '/IMAGES/breakfast tacos.jpg', description: 'Savory Breakfast Tacos', category: 'breakfast' },
    { name: 'Oatmeal', image: '/IMAGES/oatmeal.jpg', description: 'Sweet Oats', category: 'breakfast' },
    { name: 'Sandwich', image: '/IMAGES/sandwich.jpg', description: 'Grilled Chicken Sandwich', category: 'lunch' },
    { name: 'Garden Salad', image: '/IMAGES/salad.jpg', description: 'Fresh Garden Salad', category: 'lunch' },
    { name: 'Pizza', image: '/IMAGES/pizza.jpg', description: 'Pepperoni Pizza', category: 'lunch' },
    { name: 'Pasta', image: '/IMAGES/pasta.jpg', description: 'Tomato Cream Pasta', category: 'dinner' },
    { name: 'Fried Rice', image: '/IMAGES/fried_rice.jpg', description: 'Tasty Fried Rice', category: 'dinner' },
    { name: 'Steak', image: '/IMAGES/steak.jpg', description: 'Tender Steak and Fresh Broccoli', category: 'dinner' }
];

function renderMenuItems() {
    const breakfastMenu = document.getElementById('breakfastMenu');
    const lunchMenu = document.getElementById('lunchMenu');
    const dinnerMenu = document.getElementById('dinnerMenu');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement('span');
        itemDescription.textContent = item.description;
        itemDescription.classList.add('menu-item-description');
        menuItem.appendChild(itemDescription);

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        menuItem.appendChild(itemImage);

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.classList.add('quantity');
        quantityInput.min = '0'; // Allow zero quantity
        quantityInput.max = '10'; // Limit maximum quantity to 10
        menuItem.appendChild(quantityInput);

        if (item.category === 'breakfast') {
            breakfastMenu.appendChild(menuItem);
        } else if (item.category === 'lunch') {
            lunchMenu.appendChild(menuItem);
        } else if (item.category === 'dinner') {
            dinnerMenu.appendChild(menuItem);
        }
    });
}

renderMenuItems();

function submitOrder() {
    console.log("Submit button clicked");

    const items = document.querySelectorAll('.menu-item');
    const order = [];
    let isValid = true;

    items.forEach(item => {
        const itemName = item.querySelector('.menu-item-description').textContent;
        const quantityInput = item.querySelector('.quantity');
        const quantity = parseInt(quantityInput.value);

        if (quantity > 0) { // Only include items with non-zero quantity
            if (isNaN(quantity) || quantity < 0 || quantity > 10) {
                alert(`Please enter a valid quantity between 0 and 10 for ${itemName}`);
                quantityInput.classList.add('invalid');
                isValid = false;
                return;
            }
            order.push({ name: itemName, quantity: quantity });
        }
    });

    if (isValid) {
        if (order.length > 0) {
            console.log("Order:", order);
            alert('Order has been successfully submitted!');
        } else {
            alert('No items selected.');
        }
    } else {
        alert('Order has not yet been submitted.');
    }
}
