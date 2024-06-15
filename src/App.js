import './App.css';
import Button from 'react-bootstrap/Button'


function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      <div style={{border: '1px solid black'}}>
        <h2>Hello World</h2>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
}

export default App;
