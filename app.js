// PRODUCTS
const products = [
  { id: 1, name: "Shoes", price: 50, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Watch", price: 80, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Bag", price: 40, img: "https://via.placeholder.com/150" }
];

// LOAD PRODUCTS
const productList = document.getElementById("product-list");

if (productList) {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3">
          <img src="${p.img}" class="card-img-top">
          <h5>${p.name}</h5>
          <p>$${p.price}</p>
          <button onclick="addToCart(${p.id})" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products.find(p => p.id === id));
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// SHOW CART
const cartItems = document.getElementById("cart-items");

if (cartItems) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="card p-2 mt-2">
        ${item.name} - $${item.price}
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

// CHECKOUT
function checkout() {
  alert("Order placed!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("user", user);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Enter details!");
  }
}