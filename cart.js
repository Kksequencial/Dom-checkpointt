const products = [
    {
      id: 1,
      productName: 'Dell XPS 13',
      price: 1299.99,
      imgUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/5541121/1.jpg?1126'
    },

    {
      id: 2,
      productName:'Media Converter',
      price: 858,
      imgUrl: 'https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5jb20/36099919_ODAwLTgwMC0wNDI2OWU4ZTZj.webp'
        
    },
    
    {
        id: 3,
        productName:'Logitech Mk290',
        price: 1254,
        imgUrl: 'https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5jb20/19895014_MTYwMC05MDAtNzc5Yjc1ZmVlOC0x.webp'
          
    },
    
    {
        id: 4,
        productName:'Universal Wifi',
        price: 673,
        imgUrl: 'https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5jb20/27539378_NjA3LTEwODAtYmU0ZjJiNjE4Ny0x.webp'
          
    },
    
    {
        id: 5,
        productName:'Brand New Universal Laptop Charger',
        price: 1547,
        imgUrl: 'https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5jb20/32271497_MTA1MS04ODktZjljMTBmMTE5Mg.webp'
          
    },

    {
        id: 6,
        productName:'Series 9 Ultra',
        price: 785,
        imgUrl: 'https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5jb20/37049448_MTA4MC0xMzUwLThmMWJjZTIxNTY.webp'
          
    },
    
]
localStorage.setItem('productData', 'products');
const productsDatabase = localStorage.getItem('productData');

if (productsDatabase !== null) {
    // Set the updated value in localStorage
    localStorage.setItem('productData', JSON.stringify(products));
    console.log(productsDatabase);
    
}
// Retrieve and log the updated value
    const productDataString = localStorage.getItem('productData');

    // Parse the JSON-formatted string into a JavaScript object
    const productList = JSON.parse(productDataString);

    productArrangement = document.getElementById('grid');

    // loop through productList and display each product
for (let product of productList) {
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'card');
    // productCard.addEventListener('mouseclick', (event) => addToCart(event));

    // image element
    const productImg = document.createElement('img');
    productImg.setAttribute('class', 'card-img-top');
    productImg.setAttribute('src', product.imgUrl);
    productImg.setAttribute('id', product.id);

    //card body element
    const productCardBody = document.createElement('div');
    productCardBody.setAttribute('class', 'card-body');
    
   // product name
    const productName = document.createElement('h5');
    productName.setAttribute('class', 'card-title');
    productName.textContent = product.productName;

    // product price
    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', 'card-price');
    productPrice.textContent = `$${product.price}`;

    // assemble productcard body content
    productCardBody.appendChild(productName);
    productCardBody.appendChild(productPrice);

    // assemble productcard element
    productCard.appendChild(productImg);
    productCard.appendChild(productCardBody);

 // Add event listener for hover effect
 productCard.addEventListener('mouseenter', () => {
    // Create the button if it doesn't exist
    if (!productCardBody.querySelector('.cart-button')) {
        const cartButton = document.createElement('button');
        cartButton.setAttribute('class', 'cart-button');
        cartButton.textContent = 'Add to Cart';

        // Add the button to the product card
        productCardBody.appendChild(cartButton);

        

     // Add click event listener to the "Add to Cart" button
     cartButton.addEventListener('click', () => addToCart(product));
    }
});

// Add event listener for mouseleave to hide the button
productCard.addEventListener('mouseleave', () => {
    // Remove the button if it exists
    const cartButton = productCardBody.querySelector('.cart-button');
    if (cartButton) {
        cartButton.remove();
    }
});

// append productCard to the grid
productArrangement.appendChild(productCard);
};

/**
 * Adds a product to the cart.
 * 
 * @param {Object} product - The product to be added to the cart.
 */
/**
 * Adds a product to the cart.
 * 
 * @param {Object} product - The product to be added to the cart.
 */
function addToCart(product) {
    console.log('Adding to cart:', product);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({
            quantity: 1,
            ...product
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.productName} added to cart`);
}
// Assuming you have a DOM element for the cart icon
const cartIcon = document.getElementById('cart-icon');

function updateCartItemCount() {
  // Retrieve the cart from local storage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

  // Display the number of items on the cart icon
  cartIcon.innerText = parseInt(totalItems);
}
