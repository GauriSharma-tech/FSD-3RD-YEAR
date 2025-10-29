function Book(props) {
  const image = React.createElement(
    "img",
    {
      src: props.image,
      width: 200,
      height: 200,
      alt: "Book Image",
    },
    null
  );
  const h3 = React.createElement("h3", {}, props.title);
  const h4 = React.createElement("h4", {}, props.price);
  const btn = React.createElement("button", {}, "Add To Cart");
  const child = React.createElement(
    "div",
    { className: "card" },
    image,
    h3,
    h4,
    btn
  );
  return child;
}
const book = [
  { image: "image.png", title: "Physics", price: 350 },
  { image: "image.png", title: "Physics", price: 350 },
  { image: "image.png", title: "Physics", price: 350 },
];

const bookele = book.map((b) =>
  React.createElement(
    Book,
    {
      image: b.image,
      title: b.title,
      price: b.price,
    },
    null
  )
);

const booklist = React.createElement(
  "div",
  { className: "book-list" },
  bookele
);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(booklist);
