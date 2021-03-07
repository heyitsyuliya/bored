import '../../styles/App.css';
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container className="App" fluid >
      <Navbar/>
    </Container>
  );
}

export default App;
