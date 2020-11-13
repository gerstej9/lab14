/* global Cart */
'use strict';
var tBody = document.getElementById('cart-content-table');
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tBody.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  var tableRowEl;
  var tableDataEl;
  var tableDataButton;
  for( var i = 0; i < cart.items.items.length; i++){
    tableRowEl = document.createElement('tr');
    tBody.appendChild(tableRowEl);
    tableDataEl = document.createElement('td');
    tableDataButton = document.createElement('button');
    tableDataButton.textContent = `X ${cart.items.items[i].product} ${cart.items.items[i].quantity}` 
    tableDataEl.appendChild(tableDataButton);
    tableDataEl.setAttribute('id',`tde${i}`);
    tableRowEl.appendChild(tableDataEl);
  
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  event.preventDefault();
  console.log(event.target);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
tBody.addEventListener('click', removeItemFromCart);
