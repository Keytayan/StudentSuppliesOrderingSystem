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

// Temporary placeholder for the Add to Cart function (To be built in Step 3)
function addToCart(index) {
    alert("Selected: " + products[index].name + " (₱" + products[index].price.toFixed(2) + ")");
}

// Run the function immediately when the page loads
displayProducts();