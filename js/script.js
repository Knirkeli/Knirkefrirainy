const searchDisplayTempelate = document.querySelector(
  "[search-display-tempelate]"
);
const productSearchContainer = document.querySelector(
  "[product-search-container]"
);
const searchInput = document.querySelector("[product-search-field]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});

fetch("/products/products.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const searchResults =
        searchDisplayTempelate.content.cloneNode(true).children[0];
      const header = searchResults.querySelector("[search-header]");
      const img = searchResults.querySelector("[search-img]");
      const price = searchResults.querySelector("[search-price]");
      header.textContent = product.name;
      img.mediaContent = product.image;
      price.textContent = product.price;
      productSearchContainer.append(searchResults);
      console.log(product);
    });
  });
