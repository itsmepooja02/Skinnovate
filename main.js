// Wait for the page to load and hide the loader (if any)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Array of soap products
const soaps = [
  {
    id: 1,
    name: "Butter based Moisturizer",
    description: "Deeply nourishing moisturizer with rich, creamy butter for soft, supple skin",
    price: 300,
    image: "butterbasedmoisturizer.png"
  },
  {
    id: 2,
    name: "Dry herbal Moisturizer",
    description: "A powder-form herbal blend that hydrates when mixed, perfect for natural skincare",
    price: 250,
    image: "dryherbalmoisturizer.png"
  },
  {
    id: 3,
    name: "Beetroot Lip balm",
    description: "Tinted lip balm with beetroot extract for natural color and lasting hydration",
    price: 200,
    image: "beetrootlipbalm.png"
  },
  {
    id: 4,
    name: "Coffee Lip balm",
    description: "Energizing coffee-infused balm that soothes and plumps your lips",
    price: 170,
    image: "coffeelipbalm.png"
  },
  {
    id: 5,
    name: "Coffee and Sugar Body Scrub",
    description: "Energizing scrub that exfoliates and smooths skin with a blend of coffee and sugar and removes dead skin cells",
    price: 290,
    image: "coffeeandsugarbodyscrub.png"
  },
  {
    id: 6,
    name: "Dry Herbal Body Scrub",
    description: "Used to naturally cleanse, detoxify, and brighten the skin while gently removing impurities",
    price: 300,
    image: "dryherbalbodyscrub.png"
  },
  {
    id: 7,
    name: "Dry Herbal Cleanser",
    description: "A powdered blend used to gently cleanse, detox, and refresh the skin without stripping natural oils",
    price: 259,
    image: "dryherbalfacecleanser.png"
  },
  {
    id: 8,
    name: "Alo Honey Face Cleanser",
    description: "A soothing gel cleanser used to hydrate, calm, and deeply cleanse the skin while maintaining its natural glow",
    price: 200,
    image: "alohoneyfacecleanser.png"
  },
  {
    id: 9,
    name: "Coconut-Turmeric Foot Repair Cream",
    description: "Repairs rough feet and soothes skin with coconut and turmeric",
    price: 290,
    image: "coconutturmericfootrepairbalm.png"
  },
  {
    id: 10,
    name: "Aloe Vaseline Foot cream",
    description: "Heals cracks and softens feet with aloe and Vaseline.",
    price: 260,
    image: "aloevaselinefootcream.png"
  }
];

// Render the soap products on the page
function renderProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear the container before adding new products

  soaps.forEach((soap, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${index * 100}ms`;

    card.innerHTML = `
      <img src="${soap.image}" alt="${soap.name}" />
      <h3>${soap.name}</h3>
      <p>${soap.description}</p>
      <p><strong>₹${soap.price}</strong></p>
      <button onclick="addToCart(${soap.id})">Add to Cart</button>
      <button class="view-btn" onclick="viewDetails(${soap.id})">View More</button>
    `;

    container.appendChild(card);
  });
}

// Add soap to cart (store in localStorage)
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart from localStorage or create a new one

  const existingItem = cart.find(item => item.id === id); // Check if the product is already in the cart
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if already in the cart
  } else {
    const soap = soaps.find(s => s.id === id); // Find the soap by its ID
    cart.push({ id: soap.id, quantity: 1 }); // Add new soap to the cart
  }

  // Update the cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Added "${soaps.find(s => s.id === id).name}" to cart!`);
}

// Navigate to the soap details page
function viewDetails(id) {
  localStorage.setItem("selectedSoapId", id); // Store the selected soap id
  window.location.href = "details.html"; // Navigate to details page
}

// Toggle the FAQ answer visibility (Read More / Read Less)
function toggleAnswer(element) {
  const answer = element.previousElementSibling; // Get the <p> tag of the answer
  answer.classList.toggle('show'); // Toggle the "show" class

  // Change the text of the Read More / Read Less link
  if (answer.classList.contains('show')) {
    element.innerText = "Read Less";
  } else {
    element.innerText = "Read More";
  }
}

// Run the product rendering when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderProducts);
