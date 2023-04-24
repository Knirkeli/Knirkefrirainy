// const apiBase = "http://localhost/rainydays";
// const woocommerceBase = "/wp-json/wc/store";
// const productBase = "/products";

// const pagesBase = "/wp-json/wp/v2/pages";

// const fullPagesURL = apiBase + pagesBase;

// const fullProductURL = apiBase + woocommerceBase + productBase;

// async function getProducts() {
//   const response = await fetch(fullProductURL);

//   const products = await response.json();

//   return products;
// }

// function createProductHTML(product) {
//   const container = document.querySelector(".new-container");

//   const productContainer = document.createElement("div");
//   productContainer.classList.add("product");
//   productContainer.id = product.id;

//   const title = document.createElement("h2");
//   title.innerText = product.name;
//   productContainer.append(title);

//   for (let i = 0; i < product.images.length; i++) {
//     const imgData = product.images[i];
//     const img = document.createElement("img");
//     img.src = imgData.src;
//     img.alt = imgData.alt;
//     productContainer.append(img);
//   }

//   productContainer.addEventListener("click", () => {
//       displayProductDetails(product.id);
//     });

//   container.append(productContainer);
// }

// function createProductsHTML(products) {
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     createProductHTML(product);
//   }
// }

// async function ProductPage() {
//   const products = await getProducts();

//   console.log(products);

//   createProductsHTML(products);
// }

// ProductPage();
