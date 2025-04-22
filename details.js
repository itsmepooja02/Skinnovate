document.addEventListener("DOMContentLoaded", () => {
    const detailsDiv = document.getElementById("details");
    const soapId = localStorage.getItem("selectedSoapId");
  
    if (!soapId) {
      detailsDiv.innerHTML = "<p>No product selected.</p>";
      return;
    }
  
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
      },
    ];
  
    const soap = soaps.find(s => s.id === parseInt(soapId));
    if (!soap) {
      detailsDiv.innerHTML = "<p>Soap not found.</p>";
      return;
    }
  
    detailsDiv.innerHTML = `
      <div class="product-card">
        <img src="${soap.image}" alt="${soap.name}" />
        <h3>${soap.name}</h3>
        <p>${soap.description}</p>
        <p><strong>₹${soap.price}</strong></p>
        <button onclick="addToCart(${soap.id})">Add to Cart</button>
      </div>
    `;
  });
  
  function addToCart(id) {
    alert(`Product ${id} added to cart!`);
  }
  