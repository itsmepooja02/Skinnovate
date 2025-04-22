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
        description: "Deeply nourishing moisturizer with rich, creamy butter for soft, supple skin.Perfect for rough patches and winter dryness, leaving skin soft and glowing.Infused with natural oils to restore skin elasticity and moisture.",
        price: 300,
        image: "butterbasedmoisturizer.png"
      },
      {
        id: 2,
        name: "Dry herbal Moisturizer",
        description: "A powder-form herbal blend that hydrates when mixed, perfect for natural skincare.Lightweight and non-greasy, it helps calm irritated skin and reduce dullness.rafted with a blend of dry herbs and botanical extracts for natural hydration.",
        price: 320,
        image: "dryherbalmoisturizer.png"
      },
      {
        id: 3,
        name: "Beetroot Lip balm",
        description: "Tinted lip balm with beetroot extract for natural color and lasting hydration.Moisturizes deeply while enhancing your natural lip color and softness.Rich in antioxidants, perfect for daily nourishment and a natural glow.",
        price: 250,
        image: "beetrootlipbalm.png"
      },
      {
        id: 4,
        name: "Coffee Lip balm",
        description: "Energizing coffee-infused balm that soothes and plumps your lips.Infused with real coffee extract to energize and refresh your lips throughout the day.Perfect for daily use, especially in cold or dry weather.",
        price: 300,
        image: "coffeelipbalm.png"
      },
      {
        id: 5,
        name: "Coffee and Sugar Body Scrub",
        description: "Energizing scrub that exfoliates and smooths skin with a blend of coffee and sugar and removes dead skin cells.Soothes dryness while giving a subtle plumping effect.Perfect for daily use, especially in cold or dry weather.",
        price: 300,
        image: "coffeeandsugarbodyscrub.png"
      },
      {
        id: 6,
        name: "Dry Herbal Body Scrub",
        description: "Used to naturally cleanse, detoxify, and brighten the skin while gently removing impurities.A gentle exfoliating scrub made with finely ground herbs and natural powders.Detoxifies, cleanses, and brightens the skin without causing irritation.Ideal for regular use to maintain smooth, glowing, and healthy skin.",
        price: 300,
        image: "dryherbalbodyscrub.png"
      },
      {
        id: 7,
        name: "Dry Herbal Cleanser",
        description: "A powdered blend used to gently cleanse, detox, and refresh the skin without stripping natural oils,Cleanses without stripping natural oils, making it ideal for sensitive skin.Can be mixed with water, rose water, or milk for a custom skincare routine.",
        price: 300,
        image: "dryherbalfacecleanser.png"
      },
      {
        id: 8,
        name: "Alo Honey Face Cleanser",
        description: "A soothing gel cleanser used to hydrate, calm, and deeply cleanse the skin while maintaining its natural glow.A soothing gel face wash with aloe vera and honey to calm and hydrate the skin.Gently removes dirt and impurities while maintaining the skin’s natural moisture.Perfect for achieving a clean, soft, and radiant glow.",
        price: 320,
        image: "alohoneyfacecleanser.png"
      },
      {
        id: 9,
        name: "Coconut-Turmeric Foot Repair Cream",
        description: "Repairs rough feet and soothes skin with coconut and turmeric.A deeply healing foot cream enriched with coconut oil and turmeric.Repairs cracked heels, softens rough patches, and soothes tired feet.With regular use, feet feel healthier, smoother, and nourished.",
        price: 290,
        image: "coconutturmericfootrepairbalm.png"
      },
      {
        id: 10,
        name: "Aloe Vaseline Foot cream",
        description: "Heals cracks and softens feet with aloe and Vaseline.Combines aloe vera and petroleum jelly to heal and hydrate dry, cracked feet.Soothes irritation and locks in moisture for lasting comfort.Best used overnight for smooth, supple feet by morning.",
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
  
