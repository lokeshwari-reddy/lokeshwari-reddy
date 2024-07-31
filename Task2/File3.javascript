const products = {
    1: { name: 'Apple', price: 1.00 },
    2: { name: 'Banana', price: 0.50 },
    3: { name: 'Carrot', price: 0.75 }
};

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productButtons = document.querySelectorAll('.add-to-cart');
    productButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.closest('.product').getAttribute('data-id');
            addToCart(productId);
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        document.getElementById('checkout-form').classList.remove('hidden');
    });

    document.getElementById('cancel').addEventListener('click', () => {
        document.getElementById('checkout-form').classList.add('hidden');
    });

    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order submitted! Thank you for shopping with us.');
        cart = [];
        updateCart();
        document.getElementById('checkout-form').classList.add('hidden');
    });
});

function addToCart(productId) {
    const product = products[productId];
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });
    
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}
