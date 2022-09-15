// imgbb.com

const app = document.getElementById("app");
const products = document.getElementById("products");

const menus = [{ name: "All" }, { name: "Drink" }, { name: "Foods" }];
const product = [
  { name: "Pepsi", Category: "Drink" },
  { name: "CocaCola", Category: "Drink" },
  { name: "Mojo", Category: "Drink" },
  { name: "Burger", Category: "Foods" },
  { name: "Pizza", Category: "Foods" },
  { name: "Chicken", Category: "Foods" },
];

const sortByCategory = (category) => {
  products.innerHTML = "";
  let filteredProducts = null;
  if (category === "All") {
    filteredProducts = product;
  } else {
    filteredProducts = product.filter(
      (item) => item.Category.toLowerCase() === category.toLowerCase()
    );
  }
  filteredProducts.forEach((data) => {
    const div = document.createElement("div");
    div.style.margin = "20px";
    div.innerText = `${data.name} - ${data.Category}`;
    products.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  app.innerHTML = "";
  products.innerHTML = "";
  menus.forEach((data) => {
    const span = document.createElement("span");
    span.style.margin = "20px";
    span.innerHTML = `<button onclick="sortByCategory('${data.name}')">${data.name}</button>`;
    app.appendChild(span);
  });

  product.forEach((data) => {
    const div = document.createElement("div");
    div.style.margin = "20px";
    div.innerText = `${data.name} - ${data.Category}`;
    products.appendChild(div);
  });
});
