const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;

  const filteredProducts = products.filter((product) => {
    return product.name.includes(searchTerm);
  });
});
