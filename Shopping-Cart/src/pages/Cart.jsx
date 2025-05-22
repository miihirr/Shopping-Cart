function Cart({ cart, setCart }) {
  const handlePlus = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleMinus = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Your Cart</h3>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="card mb-3 shadow-sm"
            style={{ maxWidth: '100%' }}
          >
            <div className="fDiv">
              <div className="col-md-2">
                <img
                  src={item.image}
                  className="img-fluid rounded-start item-img"
                  alt={item.title}
                  style={{ objectFit: 'cover'}}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body d-flex justify-content-between align-items-center h-100">
                  <h5 className="card-title">{item.title}</h5>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleMinus(item.id)}
                    >
                      -
                    </button>
                    <span className="fw-bold">Quantity: {item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handlePlus(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger w-20 px-2"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
