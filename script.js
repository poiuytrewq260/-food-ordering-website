let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
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
