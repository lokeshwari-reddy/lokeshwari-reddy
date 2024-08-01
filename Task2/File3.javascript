let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert(`Thank you for your purchase! Total amount: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCartUI();
}
