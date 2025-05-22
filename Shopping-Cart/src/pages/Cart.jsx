function Cart({ cart, setCart }) {
  const handlePlus=(id)=>{
    let updatedCart=cart.map(item=>{
      if(item.id==id && item.id>1){
        return {...item, quantity:item.quantity+1}
      }
      else{
        return item
      }
    })
    setCart(updatedCart)
  }
  const handleMinus=(id)=>{
    let updatedCart=cart.map(item=>{
      if(item.id==id && item.id>1){
        return {...item, quantity:item.quantity-1}
      }
      else{
        return item
      }
    })
    setCart(updatedCart)
  }
  const handleRemove=(id)=>{
    const updatedCart=cart.filter(item=>item.id!=id)
    setCart(updatedCart)
  }

  return (
    <>
        <div className="parent-flex">
        {cart.map((item) => (
        <div key={item.id} className="flex cartContainer">
          <img src={item.image} alt="" className="item-img"/>
          <p>{item.title}</p>
          <button onClick={()=>handlePlus(item.id)}>+</button>
          <p>quantity : {item.quantity}</p>
          <button onClick={()=>handleMinus(item.id)}>-</button>
          <button onClick={()=>handleRemove(item.id)}>Remove From Cart </button>
        </div>
      ))}
        </div>
    </>
  );
}
export default Cart;
