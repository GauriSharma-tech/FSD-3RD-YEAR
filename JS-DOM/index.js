const image = document.createElement("img");
image.src = "physics.jpg";
image.width = 200;
image.height = 200;
image.alt = "Book Image";

const h3 = document.createElement("h3");
h3.innerText = "Title : Physics";

const h4 = document.createElement("h4");
h4.innerText = "Price : 400";

const btn = document.createElement("button");
btn.innerText = "Add To Cart";

const child = document.createElement("div");
child.className = "card";
child.appendChild(image);
child.appendChild(h3);
child.appendChild(h4);
child.appendChild(btn);

const parent = document.getElementById("root");
parent.appendChild(child);
