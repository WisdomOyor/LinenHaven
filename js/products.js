//** SHOP CODE **//
// Render the products using the template
const template = document.getElementById("product-template").innerHTML;
const container = document.getElementById("product-container");

// Sample product data
const products = [
    {
      imageURL: "../images/styles-male-1.png",
      name: "Tiger Don",
      price: "$299.99",
      rating: "5",
    },
    {
      imageURL: "../images/styles-male-2.png",
      name: "Elegant Classics Collection",
      price: "$150",
      rating: "4.8",
    },
    {
        imageURL: "../images/styles-male-3.png",
        name: "Bold & Brash Agbada",
        price: "$200",
        rating: "4.9",
      },
      {
        imageURL: "../images/styles-female-4.png",
        name: "Adire Queen",
        price: "$100",
        rating: "4.8",
      },
      {
        imageURL: "../images/styles-female-5.png",
        name: "Afro Belle",
        price: "$150",
        rating: "4.8",
      },
      {
        imageURL: "../images/styles-female-6.png",
        name: "Senator Slay",
        price: "$170",
        rating: "4.8",
      },
      {
        imageURL: "../images/styles-male-4.png",
        name: "Sleek Street Style",
        price: "$100",
        rating: "4.7",
      },
      {
        imageURL: "../images/styles-male-5.png",
        name: "Igbo Gents",
        price: "$170",
        rating: "5",
      },
      {
        imageURL: "../images/styles-male-6.png",
        name: "Ankara King",
        price: "$120",
        rating: "4.4",
      }

    // Add more product objects as needed
];

products.forEach((product) => {
  const html = template
    .replace(/{{imageURL}}/g, product.imageURL)
    .replace(/{{name}}/g, product.name)
    .replace(/{{price}}/g, product.price)
    .replace(/{{rating}}/g, product.rating);
  container.innerHTML += html;
});


