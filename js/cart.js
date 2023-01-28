// const { stringify } = require("querystring");

const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    // localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity);
    addProductsToDisplay(product, quantity);

}
const getShoppingCartFromLS = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLS();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addProductsToDisplay = (product, quantity) => {
    const productsContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productsContainer.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLS();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        addProductsToDisplay(product, quantity);
    }
}

displayStoredProducts();