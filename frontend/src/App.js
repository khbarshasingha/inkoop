import "./App.css";
import { Header } from "./Components/Header";
import { Container } from "react-bootstrap";
import { Products } from "./Components/Products.jsx";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        <Products />
      </Container>
      <Footer />
    </>
  );
}

export default App;
