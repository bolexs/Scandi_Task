import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost/beginner_php/Scandi_web_Task/display.php")
      .then((res) => {
        
        setProducts(res.data.productResult);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [toggle]);

  function select(checked, id) {
    if (checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((s) => s !== id));
    }
  }

  function massDelete() {
    axios
      .post("http://localhost/beginner_php/Scandi_web_Task/delete.php", {
        checkBox: selected,
      })
      .then((res) => {
        
        setToggle(!toggle);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main style={{ width: "100vw" }}>
      <div className="container">
        <div className="header">
          <div>
            <h1>Product List</h1>
            <div className="button-container">
              <button className="button">
                <Link to="/add-product">Add</Link>
              </button>
              <button className="button" onClick={massDelete}>
                Mass delete
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            margin: "10px",
          }}
        >
          {products.map((p, ind) => (
            <Product
              data={p}
              key={ind}
              selected={selected.some((v) => v === p.sku)}
              select={select}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function Product({ data, select, selected }) {
  return (
    <article
      style={{
        width: "min(100%,350px)",
        border: "1px solid black",
        padding: "30px 20px",
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        position: "relative",
      }}
    >
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => {
          select(e.target.checked, data.sku);
        }}
      />
      <div>
        <p>{data.sku}</p>
        <p>{data.name}</p>
        <p>{data.price}</p>
        {data.type === "dvd" && <p>Size: {data.size}</p>}
        {data.type === "book" && <p>Weight: {data.weight}</p>}
        {data.type === "furniture" && (
          <p>Dimensions: {`${data.height} x ${data.width} x ${data.length}`}</p>
        )}
      </div>
    </article>
  );
}
