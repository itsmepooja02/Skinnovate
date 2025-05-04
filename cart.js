let cart = JSON.parse(localStorage.getItem("cart")) || [];

const soaps = [
  { id: 1, name: "Butter based Moisturizer", price: 300, image: "butterbasedmoisturizer.png" },
  { id: 2, name: "Dry herbal Moisturizer", price: 320, image: "dryherbalmoisturizer.png" },
  { id: 3, name: "Beetroot Lip balm", price: 250, image: "beetrootlipbalm.png" },
  {id: 4,name: "Orange Lip balm",price: 300,image: "orangelipbalm.png"  },
  { id: 5, name: "Coffee and Sugar Body Scrub", price: 300, image: "coffeeandsugarbodyscrub.png" },
  { id: 6, name: "Dry Herbal Body Scrub", price: 300, image: "dryherbalbodyscrub.png" },
  { id: 7, name: "Dry Herbal Cleanser", price: 300, image: "dryherbalfacecleanser.png" },
  { id: 8, name: "Alo Honey Face Cleanser", price: 320, image: "alohoneyfacecleanser.png" },
  { id: 9, name: "Coconut-Turmeric Foot Repair Cream", price: 290, image: "coconutturmericfootrepairbalm.png" },
  { id: 10, name: "Aloe Vaseline Foot cream", price: 260, image: "aloevaselinefootcream.png" }
];

function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalPriceSpan = document.getElementById("total-price");

  if (!cartItemsDiv || !totalPriceSpan) return;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceSpan.innerText = "0";
    return;
  }

  let total = 0;

  cartItemsDiv.innerHTML = cart.map(item => {
    const product = soaps.find(p => p.id === item.id);
    if (product) {
      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      return `
        <div class="product-card">
          <div class="card-content">
            <img src="${product.image}" alt="${product.name}" class="cart-img" />
            <div class="cart-details">
              <h4>${product.name}</h4>
              <p><strong>Quantity:</strong> ${item.quantity}</p>
              <p><strong>Price:</strong> ₹${product.price}</p>
              <p><strong>Total:</strong> ₹${itemTotal}</p>
            </div>
          </div>
        </div>
      `;
    } else {
      return '';
    }
  }).join("");

  totalPriceSpan.innerText = total;
}

function setupCheckoutButton() {
  const checkoutBtn = document.getElementById("checkout-btn");
  const loader = document.getElementById("loader");

  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      loader.style.display = "block";

      setTimeout(() => {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];

        const newOrder = {
          id: Date.now(),
          items: cart,
          createdAt: new Date().toISOString()
        };

        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.removeItem("cart");

        alert("Order placed successfully!");
        loader.style.display = "none";
        window.location.href = "orders.html";
      }, 2000);
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  setupCheckoutButton();
});
