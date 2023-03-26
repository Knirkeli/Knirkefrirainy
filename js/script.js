const searchDisplayTempelate = document.querySelector(
  "[search-display-tempelate]"
);
const productSearchContainer = document.querySelector(
  "[product-search-container]"
);
const searchInput = document.querySelector("[product-search-field]");

let products = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  if (value === "") {
    products.forEach((product) => {
      product.element.classList.add("hide");
    });
  } else {
    products.forEach((product) => {
      const isVisible =
        product.name.toLowerCase().includes(value) ||
        product.price.toLowerCase().includes(value);
      product.element.classList.toggle("hide", !isVisible);
    });
  }
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
      img.src = product.image;
      price.textContent = product.price;
      searchResults.classList.add("hide");
      productSearchContainer.append(searchResults);
      return {
        name: product.name,
        price: product.price,
        element: searchResults,
      };
    });
  });
