document.addEventListener("DOMContentLoaded", () => {
  const ordersContainer = document.getElementById("orders-container");

  const products = [
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
      price: 320,
      image: "dryherbalmoisturizer.png"
    },
    {
      id: 3,
      name: "Beetroot Lip balm",
      description: "Tinted lip balm with beetroot extract for natural color and lasting hydration",
      price: 250,
      image: "beetrootlipbalm.png"
    },
    {
      id: 4,
      name: "Coffee Lip balm",
      description: "Energizing coffee-infused balm that soothes and plumps your lips",
      price: 300,
      image: "coffeelipbalm.png"
    },
    {
      id: 5,
      name: "Coffee and Sugar Body Scrub",
      description: "Energizing scrub that exfoliates and smooths skin with a blend of coffee and sugar and removes dead skin cells",
      price: 300,
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
      price: 300,
      image: "dryherbalfacecleanser.png"
    },
    {
      id: 8,
      name: "Alo Honey Face Cleanser",
      description: "A soothing gel cleanser used to hydrate, calm, and deeply cleanse the skin while maintaining its natural glow",
      price: 320,
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
    },
  ];

  function getProductDetails(id) {
    return products.find(p => p.id === id);
  }

  const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";

    if (savedOrders.length === 0) {
      ordersContainer.innerHTML = "<p>No orders found.</p>";
      return;
    }

    savedOrders.forEach((order, index) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.style.animationDelay = `${index * 0.2}s`;

      let itemsHTML = "";
      let totalPrice = 0;

      order.items.forEach((item) => {
        const product = getProductDetails(item.id);
        const itemTotal = product.price * item.quantity;
        totalPrice += itemTotal;

        itemsHTML += `
          <div style="margin-bottom: 10px; display: flex; align-items: center;">
            <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; border-radius: 5px; margin-right: 10px;" />
            <div>
              <strong>${product.name}</strong><br>
              Quantity: ${item.quantity}<br>
              Price: ₹${product.price} each
            </div>
          </div>
        `;
      });

      card.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
        <p><strong>Status:</strong> <span class="badge ${order.status === "Delivered" ? "delivered" : "pending"}">${order.status}</span></p>
        <div style="margin-top: 10px;">${itemsHTML}</div>
        <p style="font-size: 1.1em; font-weight: bold; color: #2f855a;">Total: ₹${totalPrice}</p>
      `;

      ordersContainer.appendChild(card);
    });

  }, 600);
});
