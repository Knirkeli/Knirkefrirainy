const apiBase = "https://knirkefridesign.no/";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const pagesBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pagesBase;

const fullProductURL = apiBase + woocommerceBase + productBase;

async function getProducts(featuredOnly) {
  let url = fullProductURL;
  if (featuredOnly) {
    url += "?featured=true";
  }

  const response = await fetch(url);

  const products = await response.json();

  return products;
}

function createProductHTML(product) {
  const container = document.querySelector(".new-container");

  const productContainer = document.createElement("div");
  productContainer.classList.add("product");
  productContainer.id = product.id;

  const title = document.createElement("h2");
  title.innerText = product.name;
  productContainer.append(title);

  console.log(product.images);

  for (let i = 0; i < product.images.length; i++) {
    const imgData = product.images[i];
    console.log(imgData);
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    productContainer.append(img);
  }

  container.append(productContainer);
  productContainer.addEventListener("click", () => {
    displayProductDetails(product);
  });
}

function createProductsHTML(products, featuredOnly) {
  document.querySelector(".new-container").innerHTML = "";

  if (featuredOnly) {
    const product = products[0];
    createProductHTML(product);
  } else {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      createProductHTML(product);
    }
  }
}

function displayProductDetails(product) {
  const container = document.querySelector(".new-container");
  container.innerHTML = "";

  const title = document.createElement("h2");
  title.innerText = product.name;
  container.append(title);

  const img = document.createElement("img");
  img.src = product.images[0].src;
  img.alt = product.name;
  container.append(img);

  const price = document.createElement("p");
  price.innerHTML = product.price_html;
  container.append(price);

  const description = document.createElement("p");
  description.innerHTML = product.description;
  container.append(description);
}

async function logProducts() {
  const products = await getProducts();
  console.log(products);
}

logProducts();

async function ProductPage() {
  const featuredOnlyCheckbox = document.querySelector("#featured-only");
  const featuredOnly = featuredOnlyCheckbox.checked;

  const products = await getProducts(featuredOnly);
  createProductsHTML(products, featuredOnly);

  featuredOnlyCheckbox.addEventListener("change", () => {
    ProductPage();
  });
}

ProductPage();
