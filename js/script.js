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
  console.log(`Search value: ${value}`);
  if (value === "") {
    products.forEach((product) => {
      product.element.classList.add("hide");
    });
  } else {
    products.forEach((product) => {
      const isVisible =
        product.name.toLowerCase().includes(value) ||
        product.price.toString().includes(value) ||
        product.color.toLowerCase().includes(value);
      console.log(`Product: ${product.name}, Is visible: ${isVisible}`);
      product.element.classList.toggle("hide", !isVisible);
    });
  }
});

/* api */

const apiBase = "https://noroffcors.onrender.com/https://knirkefridesign.no/";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const pagesBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pagesBase;

const fullProductURL = apiBase + woocommerceBase + productBase;

fetch(fullProductURL)
  .then((res) => res.json())
  .then((data) => {
    products = data.map((product) => {
      const searchResults =
        searchDisplayTempelate.content.cloneNode(true).children[0];
      const header = searchResults.querySelector("[search-header]");
      const img = searchResults.querySelector("img[search-img]");
      const link = searchResults.querySelector(".search_link");
      console.log(img);
      const price = searchResults.querySelector("[search-price]");
      header.textContent = product.name;
      img.src = product.images[0].src;
      price.innerHTML = product.price_html;
      link.setAttribute("href", product.permalink);
      searchResults.classList.add("hide");
      productSearchContainer.append(searchResults);

      const productColor = product.attributes.find(
        (attribute) => attribute.name === "Color"
      );
      const color = productColor ? productColor.terms[0].name : "";

      return {
        name: product.name,
        price: product.prices.price,
        color: color,
        image: product.images[0].src,
        element: searchResults,
      };
    });
  });
