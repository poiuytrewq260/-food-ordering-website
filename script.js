let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage
    alert(item + " added to cart!");
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");

    if (!cartList) return;

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(food => {
        let li = document.createElement("li");
        li.textContent = `${food.item} - $${food.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += food.price;
    });

    totalElement.textContent = total.toFixed(2);
}

// Call updateCart() when loading the cart page to display the saved cart
if (document.getElementById("cart-items")) {
    updateCart();
}
