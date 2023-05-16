import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AddProduct.css";
export default function AddProduct() {
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

  function addProduct() {
    const data = { name, sku, price, type: switcher };
    if (switcher === "book") {
      data.weight = Number(bookOption);
    } else if (switcher === "dvd") {
      data.size = Number(dvdOption);
    } else if (switcher === "furniture") {
      data.height = Number(furniture.height);
      data.width = Number(furniture.width);
      data.length = Number(furniture.length);
    }
    const url = "https://bolex-scandi-task.000webhostapp.com/insert.php";
    axios
      .post(url, data)
      .then((res) => {
        window.location = window.location.origin;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <main style={{ width: "100vw" }}>
      <div className="container">
        <div className="header">
          <div>
            <h1>Product Add</h1>
            <div className="button-container">
              <button onClick={addProduct} className="button">
                Save
              </button>
              <Link to="/" className="button">
                Cancel
              </Link>
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
          <div className="switch-container">
            <select
              id="productType"
              value={switcher}
              onChange={(e) => setSwitcher(e.target.value)}
            >
              <option value="">Type</option>
              <option value="dvd">DVD</option>
              <option value="furniture">Furniture</option>
              <option value="book">Book</option>
            </select>
            {switcher === "dvd" && (
              <DVDOptions val={dvdOption} update={setDVDOption} />
            )}
            {switcher === "furniture" && (
              <FurnitureOptions
                val={furniture}
                update={(v) => {
                  setFurniture(v);
                }}
              />
            )}
            {switcher === "book" && (
              <BooksOptions val={bookOption} update={setBookOption} />
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

function DVDOptions({ val, update }) {
  return (
    <div className="option-container">
      <label>Size (MB):</label>
      <div>
        <input
          id="size"
          type="number"
          value={val}
          onChange={(e) => update(e.target.value)}
        />
        <div>Please provide the size in MB</div>
      </div>
    </div>
  );
}

function FurnitureOptions({ val, update }) {
  return (
    <div>
      <div className="option-container">
        <label>Height (cm):</label>

        <div>
          <input
            id="height"
            type="number"
            value={val.height}
            onChange={(e) => update({ ...val, height: e.target.value })}
          />
          <p>Please provide the height in cm</p>
        </div>
      </div>
      <div className="option-container">
        <label>Width (cm):</label>

        <div>
          <input
            id="width"
            type="number"
            value={val.width}
            onChange={(e) => update({ ...val, width: e.target.value })}
          />
          <p>Please provide the width in cm</p>
        </div>
      </div>
      <div className="option-container">
        <label>Length (cm):</label>
        <div className="">
          <input
            id="length"
            type="number"
            value={val.length}
            onChange={(e) => update({ ...val, length: e.target.value })}
          />
          <p>Please provide the length in cm</p>
        </div>
      </div>
    </div>
  );
}

function BooksOptions({ val, update }) {
  return (
    <div className="option-container">
      <label>Weight (KG):</label>
      <div>
        <input
          id="weight"
          type="number"
          value={val}
          onChange={(e) => update(e.target.value)}
        />
        <p>Please provide the weight in KG</p>
      </div>
    </div>
  );
}
