// fetch cart product data from local storage
const cartProduct = JSON.parse(localStorage.getItem('cart'));

const cartItems = document.getElementsByClassName("cart-item")[0];
// display cart product data
for (let product of cartProduct) {
    let cartCard = document.createElement('div');
    cartCard.setAttribute('class', 'cartCard');

    let cartImg = document.createElement('img');
    cartImg.setAttribute('src', product.imgUrl);
    cartImg.setAttribute('id', "cartimg");
    let h4 = document.createElement('h4');
    h4.textContent = product.productName;

    let price = document.createElement('p');
    price.textContent = "$" + product.price;

    let quantity = document.createElement('p');
    quantity.textContent = product.quantity;

    // action buttons
    let decreaseBtn = document.createElement('button');
    decreaseBtn.textContent = '-';
    decreaseBtn.setAttribute('class', "actionbtn");
    decreaseBtn.addEventListener('click', (event) => decreaseProduct(event));

    let addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.setAttribute('class', "actionbtn");
    addBtn.addEventListener('click', (event) => addProduct(event));

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.setAttribute('id', product.id);
    deleteBtn.addEventListener('click', (event) => deleteProduct(event));

    let actionDiv = document.createElement('div');
    actionDiv.setAttribute('class', 'actionDiv');
    actionDiv.appendChild(addBtn);
    actionDiv.appendChild(quantity);
    actionDiv.appendChild(decreaseBtn);

    // add all elements to cart card
    cartCard.appendChild(cartImg);
    cartCard.appendChild(h4);
    cartCard.appendChild(price);
    cartCard.appendChild(actionDiv);
    cartCard.appendChild(deleteBtn);

    // add cart card to cart container
    cartItems.appendChild(cartCard);

}

// delete cart product
function deleteProduct(e) {
    let id = e.target.id;
    id = Number(id);
    let cart = JSON.parse(localStorage.getItem('cart'));
    let newCart = cart.filter((item) => item.id !== id);
    console.log(newCart)

    localStorage.setItem('cart', JSON.stringify(newCart));
    location.reload();
}