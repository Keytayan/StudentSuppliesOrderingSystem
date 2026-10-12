// Hard-coded product information (Exam Step 2.4)
const products = [
    { name: "Ballpen", price: 12.00 },
    { name: "Pencil", price: 10.00 },
    { name: "Notebook", price: 35.00 },
    { name: "Yellow Pad", price: 45.00 },
    { name: "Eraser", price: 8.00 },
    { name: "Ruler", price: 15.00 }
];

// Function to display products on the page
function displayProducts() {
    const productListSection = document.getElementById('product-list');
    
    let htmlContent = '<h2>Product List</h2><div class="products-grid">';
    
    // Loop through each product and create a card with an Add to Cart button
    products.forEach((product, index) => {
        htmlContent += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p class="price">₱${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
    
    htmlContent += '</div>';
    
    // Insert the HTML into the section
    productListSection.innerHTML = htmlContent;
}

// Run the function immediately when the page loads
displayProducts();

// ==========================================
// CART LOGIC (Exam Step 3)
// ==========================================

// Array to hold cart items
let cart = [];

// 1. Add item to cart
function addToCart(index) {
    const product = products[index];
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
    } else {
        // Add new item with starting quantity of 1
        cart.push({ name: product.name, price: product.price, quantity: 1 });
    }
    updateCartDisplay();
}

// 2. Change quantity
function changeQuantity(cartIndex, changeAmount) {
    cart[cartIndex].quantity += changeAmount;
    
    // Prevent zero or negative quantity by removing the item automatically
    if (cart[cartIndex].quantity <= 0) {
        removeItem(cartIndex);
    } else {
        updateCartDisplay();
    }
}

// 3. Remove item completely
function removeItem(cartIndex) {
    cart.splice(cartIndex, 1);
    updateCartDisplay();
}

// 4. Update the UI and calculate totals
function updateCartDisplay() {
    const cartSection = document.getElementById('shopping-cart');
    const summarySection = document.getElementById('order-summary');
    
    // If cart is empty, show default messages
    if (cart.length === 0) {
        cartSection.innerHTML = '<h2>Shopping Cart</h2><p>Cart is empty.</p>';
        summarySection.innerHTML = '<h2>Order Summary</h2><p id="total-amount-display" data-total="0">Total Amount: ₱0.00</p>';
        return;
    }

    // Build the cart table layout
    let cartHTML = `
        <h2>Shopping Cart</h2>
        <table width="100%" style="text-align: left; border-collapse: collapse;">
            <tr style="border-bottom: 2px solid #ddd;">
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
            </tr>
    `;
    
    let totalAmount = 0;

    // Loop through cart to display items and compute totals
    cart.forEach((item, index) => {
        let subtotal = item.price * item.quantity; // Formula: Unit Price × Quantity
        totalAmount += subtotal; // Formula: Sum of All Item Subtotals

        cartHTML += `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0;">${item.name}</td>
                <td>₱${item.price.toFixed(2)}</td>
                <td>
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span style="margin: 0 10px;">${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </td>
                <td>₱${subtotal.toFixed(2)}</td>
                <td><button onclick="removeItem(${index})" style="background-color: #dc3545;">Remove</button></td>
            </tr>
        `;
    });
    
    cartHTML += '</table>';
    cartSection.innerHTML = cartHTML;
    
    // Update the Order Summary section
    summarySection.innerHTML = `
        <h2>Order Summary</h2>
        <h3 id="total-amount-display" data-total="${totalAmount}">Total Amount: ₱${totalAmount.toFixed(2)}</h3>
    `;
}

// Initialize an empty display on load
updateCartDisplay();