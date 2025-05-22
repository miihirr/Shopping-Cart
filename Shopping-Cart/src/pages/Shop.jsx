import { useEffect, useState } from "react";

function Shop({cart, setCart}) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setArr(data))
      .catch((error)=> alert(error));
  }, []);

  const addToCart=(product)=>{
    let index= cart.findIndex(item=>item.id===product.id)

    if(index!=-1){
      setCart((prevCart) => {
        let arr = [...prevCart]
        arr[index]={...arr[index],"quantity":arr[index].quantity+1}
        return arr
      })
    }
    else{
      setCart((prevCart) => [...prevCart,{...product,"quantity":1}])
    }
    
    
  }

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
                  <button className="addCartBtn" onClick={()=>addToCart(obj)}>Add to Cart</button>
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
