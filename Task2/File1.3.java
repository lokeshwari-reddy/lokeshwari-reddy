document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const items = formData.getAll('items');
    const name = formData.get('name');
    const address = formData.get('address');
    const phone = formData.get('phone');

    if (items.length === 0) {
        alert('Please select at least one item.');
        return;
    }

    const orderDetails = {
        items: items.join(', '),
        name: name,
        address: address,
        phone: phone
    };

    // You can handle the form data here (e.g., send it to a server)
    console.log('Order Submitted:', orderDetails);
    
    alert('Order submitted successfully!');
});
