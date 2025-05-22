import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import About from "./pages/About"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import NavBar from "./components/NavBar"
import Cart from "./pages/Cart"
import { useState } from "react"

function App() {
  const [cart,setCart] = useState([]);

  let sum = cart.reduce((sum,item)=>item.quantity+sum,0)
  return (
    <>
      <NavBar cartItemCount={sum} />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart}/>}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
        </Routes>

      </Container>
    </>
  )
}

export default App;




