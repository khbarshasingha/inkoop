import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Container } from "react-bootstrap";
import { Productlist } from "./Components/Productlist";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        <Productlist />
      </Container>
    </>
  );
}

export default App;
