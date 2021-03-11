import "../../styles/App.css";
import Navbar from "../Navbar";
import Generator from "../Generator";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="App p-0" fluid>
      <Navbar />
      <Generator />
    </Container>
  );
}

export default App;
