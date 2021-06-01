// Fetch the items from the JSON file
import data from "./data.js";

const shirt = document.querySelector(".btn1");
const pants = document.querySelector(".btn2");
const skirt = document.querySelector(".btn3");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");

shirt.addEventListener("click", () => {
  const data2 = data.filter((c) => {
    if (c.type == "tshirt") return c;
  });
  displayIitems(data2);
});

pants.addEventListener("click", () => {
  const data2 = data.filter((p) => {
    if (p.type == "pants") return p;
  });
  displayIitems(data2);
});


skirt.addEventListener("click", () => {
  const data2 = data.filter((k) => {
    if (k.type == "skirt") return k;
  });
  displayIitems(data2);
});
console.log(data);

blue.addEventListener("click", () => {
  const data2 = data.filter((b) => {
    if (b.color == "blue") return b;
  });
  displayIitems(data2);
});
console.log(data);

pink.addEventListener("click", () => {
  const data2 = data.filter((n) => {
    if (n.color == "pink") return n;
  });
  displayIitems(data2);
});
console.log(data);

yellow.addEventListener("click", () => {
  const data2 = data.filter((y) => {
    if (y.color == "yellow") return y;
  });
  displayIitems(data2);
});
console.log(data);

const obj = {
  type: "tshirt",
  gender: "female",
  size: "large",
  color: "pink",
  image: ".././pink_t.png",
};

/*
  {
    type: "tshirt",
    gender: "female",
    size: "large",
    color: "pink",
    image: ".././pink_t.png",
  },
   */
// function loadItems() {
//   return fetch("data/data.json")
//     .then((response) => response.json())
//     .then((json) => json.items);
// }

function displayIitems(items) {
  const container = document.querySelector(".items");
  const html = items.map((item) => createHTMLString(item));
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
    <li class="item">
        <div src="${item.image}" alt="${item.type}" class="item__thumbnail" style="background-color:${item.color}"/>
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}
// main
// loadItems()
//   .then((items) => {
//     displayIitems(items);
//     //  setEventListeners(items)
//   })
//   .catch(console.log);
displayIitems(data);
