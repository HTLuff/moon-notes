// EXTERNAL
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// COMPONENTS
import NavBar from "./components/Navbar";
// ROUTING
import Routing from "./routing/Routes";

function App() {
  return (
    <>
      <NavBar />
      <Container className="my-4">
        <Routing />
      </Container>
    </>
  );
}

export default App;
