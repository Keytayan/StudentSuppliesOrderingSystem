// Hard-coded product information
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
    
    // Create a container for our grid
    let htmlContent = '<h2>Product List</h2><div class="products-grid">';
    
    // Loop through each product and create a card
    products.forEach((product, index) => {
        htmlContent += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>₱${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
    
    htmlContent += '</div>';
    
    // Insert the HTML into the page
    productListSection.innerHTML = htmlContent;
}

// Placeholder for the Add to Cart function (We will build this in Step 3)
function addToCart(index) {
    alert("Selected: " + products[index].name + ". Cart functionality coming in Step 3!");
}

// Run the function when the script loads
displayProducts();