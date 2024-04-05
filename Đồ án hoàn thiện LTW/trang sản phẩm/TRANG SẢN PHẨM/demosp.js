var products = [
    { id: 1, image: 'path_to_image1.jpg', name: 'Sản phẩm 1', price: 10.00 },
    { id: 2, image: 'path_to_image2.jpg', name: 'Sản phẩm 2', price: 15.00 }
];

var cart = [];

function addToCart(productId) {
    var product = products.find(function(item) {
        return item.id === productId;
    });

    if (product) {
        var cartItem = cart.find(function(item) {
            return item.id === productId;
        });

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        updateCart();
    }
}

function updateCart() {
var cartItemsContainer = document.getElementById('cart-items');
var totalRow = document.getElementById('total-row');

cartItemsContainer.innerHTML = '';
totalRow.innerText = '';

var total = 0;

cart.forEach(function(item, index) {
var cartItem = document.createElement('div');
cartItem.classList.add('cart-item');

var image = document.createElement('img');
image.src = item.image;
cartItem.appendChild(image);

var details = document.createElement('div');
details.classList.add('cart-item-details');

var name = document.createElement('div');
name.classList.add('cart-item-name');
name.innerText = item.name;
details.appendChild(name);

var quantity = document.createElement('div');
quantity.classList.add('cart-item-quantity');
var quantityInput = document.createElement('input');
quantityInput.type = 'number';
quantityInput.value = item.quantity;
quantityInput.addEventListener('change', function() {
    item.quantity = parseInt(quantityInput.value);
    updateCart();
});
quantity.appendChild(quantityInput);
details.appendChild(quantity);

var price = document.createElement('div');
price.classList.add('cart-item-price');
price.innerText = '$' + (item.price * item.quantity).toFixed(2);
details.appendChild(price);

var removeButton = document.createElement('button');
removeButton.classList.add('cart-item-remove');
removeButton.innerText = 'Xóa';
removeButton.addEventListener('click', function() {
    cart.splice(index, 1);
    updateCart();
});
details.appendChild(removeButton);

cartItem.appendChild(details);

cartItemsContainer.appendChild(cartItem);

total += item.price * item.quantity;
});

totalRow.innerText = 'Tổng tiền: $' + total.toFixed(2);
}
function processPayment() {
    // Xử lý thanh toán, chẳng hạn thông qua API hoặc chuyển hướng đến trang thanh toán
    alert('Đã thanh toán thành công');
    cart = [];
    updateCart();
}

function toggleCart() {
    var cartContainer = document.getElementById('cart-container');
    if (cartContainer.style.display === 'none') {
        cartContainer.style.display = 'block';
    } else {
        cartContainer.style.display = 'none';
    }
}