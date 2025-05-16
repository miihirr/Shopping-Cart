import { useEffect, useState } from "react";


function Shop() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setArr(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {arr.map((obj) => (
          <div className="col-md-4 col-lg-3" key={obj.id}>
            <div className="card h-100 shadow-sm p-3">
              <img
                src={obj.image}
                className="card-img-top"
                alt={obj.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title">{obj.title}</h5>
                <p className="card-text text-muted">
                  {obj.description.slice(0, 100)}...
                </p>
                <div className="mt-auto d-flex gap-3 justify-content-between">
                  <p className="fw-bold mb-2">${obj.price.toFixed(2)}</p>
                  <button className="addCartBtn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
