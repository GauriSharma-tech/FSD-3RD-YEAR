import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>
        <center>Book Store</center>
      </h1>
      <div className="booklist">
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

function Book() {
  return (
    <div>
      <img src="" width="200" height="200" alt="Book Image" />
      <h3>Title : Physics</h3>
      <h4>Price : 385/-</h4>
      <button>Add to Cart</button>
    </div>
  );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
 