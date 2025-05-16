import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import About from "./pages/About"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import NavBar from "./components/NavBar"
import Cart from "./pages/Cart"

function App() {

  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>

      </Container>
    </>
  )
}

export default App

