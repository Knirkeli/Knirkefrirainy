const searchDisplayTempelate = document.querySelector(
  "[search-display-tempelate]"
);
const productSearchContainer = document.querySelector(
  "[product-search-container]"
);
const searchInput = document.querySelector("[product-search-field]");

let products = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  products.forEach((product) => {
    const isVisible =
      product.name.includes(value) || product.price.includes(value);
  });
  product.element.classList.toggle("hide", !isVisible);
});

fetch("/products/products.json")
  .then((res) => res.json())
  .then((data) => {
    products = data.map((product) => {
      const searchResults =
        searchDisplayTempelate.content.cloneNode(true).children[0];
      const header = searchResults.querySelector("[search-header]");
      const img = searchResults.querySelector("[search-img]");
      const price = searchResults.querySelector("[search-price]");
      header.textContent = product.name;
      img.mediaContent = product.image;
      price.textContent = product.price;
      productSearchContainer.append(searchResults);
      return {
        name: product.name,
        price: product.price,
        element: searchResults,
      };
    });
  });
