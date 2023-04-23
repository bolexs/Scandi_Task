import { useState } from "react";
import "./AddProduct.css";
export default function AddProduct() {
  const [selected, setSelected] = useState("");
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [switcher, setSwitcher] = useState("");
  const [furniture, setFurniture] = useState({
    height: "",
    width: "",
    length: "",
  });
  const [bookOption, setBookOption] = useState("");
  const [dvdOption, setDVDOption] = useState("");

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>Product Add</h1>
          <div className="button-container">
            <button
              onClick={() => {
                console.log("sku: ", sku);
                console.log("name: ", name);
                console.log("price: ", price);
                console.log("switcher:", switcher);
                if (switcher === "Books") {
                  console.log("BookOption:", bookOption);
                } else if (switcher === "DVD") {
                  console.log("dvdOption:", dvdOption);
                } else {
                  console.log("furniture: ", furniture);
                }
              }}
              className="button"
            >
              Save
            </button>
            <button className="button">Cancel</button>
          </div>
        </div>
      </div>
      <form className="form" id="product_form">
        <div className="input-container">
          <label>SKU</label>
          <input
            id="sku"
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Price ($)</label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-container">
          <select
            id="productType"
            value={switcher}
            onChange={(e) => setSwitcher(e.target.value)}
          >
            <option value="">Type switcher</option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
          </select>
          {switcher === "DVD" && (
            <DVDOptions val={dvdOption} update={setDVDOption} />
          )}
          {switcher === "Furniture" && (
            <FurnitureOptions
              val={furniture}
              update={(v) => {
                setFurniture(v);
              }}
            />
          )}
          {switcher === "Books" && (
            <BooksOptions val={bookOption} update={setBookOption} />
          )}
        </div>
      </form>
    </div>
  );
}

function DVDOptions({ val, update }) {
  return (
    <div>
      <div className="input-container">
        <label>Size (MB):</label>
        <input
          id="size"
          type="number"
          value={val}
          onChange={(e) => update(e.target.value)}
        />
        <span>Please provide the size in MB</span>
      </div>
    </div>
  );
}

function FurnitureOptions({ val, update }) {
  return (
    <div>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          id="height"
          type="number"
          value={val.height}
          onChange={(e) => update({ ...val, height: e.target.value })}
        />
        <span>Please provide the height in cm</span>
      </div>
      <div className="input-container">
        <label>Width (cm):</label>
        <input
          id="size"
          type="number"
          value={val.width}
          onChange={(e) => update({ ...val, width: e.target.value })}
        />
        <span>Please provide the width in cm</span>
      </div>
      <div className="input-container">
        <label>Length (cm):</label>
        <input
          id="length"
          type="number"
          value={val.length}
          onChange={(e) => update({ ...val, length: e.target.value })}
        />
        <span>Please provide the length in cm</span>
      </div>
    </div>
  );
}

function BooksOptions({ val, update }) {
  return (
    <div>
      <div className="input-container">
        <label>Weight (KG):</label>
        <input
          id="weight"
          type="number"
          value={val}
          onChange={(e) => update(e.target.value)}
        />
        <span>Please provide the weight in KG</span>
      </div>
    </div>
  );
}
