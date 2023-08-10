import './styles/App.css';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Timer 
        time = {60000}
        step = {1000}
        autostart = {false}
      />
    </div>
  );
}

export default App;
