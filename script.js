let totalAmount = 0;

function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cartItems');
    const newItem = document.createElement('li');
    newItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItems.appendChild(newItem);

    totalAmount += productPrice;
    updateTotalAmount();
}

function updateTotalAmount() {
    let totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const productImages = document.querySelectorAll('.product-img');
    productImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
