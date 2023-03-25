fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
            // legg til html her for å vise produkter
        `;
    }
  });
