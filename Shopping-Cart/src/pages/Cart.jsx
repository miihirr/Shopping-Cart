function Cart({ cart }) {
  return (
    <>
        <div className="parent-flex">
        {cart.map((item) => (
        <div key={item.id} className="flex cartContainer">
          <img src={item.image} alt="" className="item-img"/>
          <p>{item.title}</p>
          <p>quantity : {item.quantity}</p>
          <button>Remove From Cart </button>
        </div>
      ))}
        </div>
    </>
  );
}
export default Cart;
