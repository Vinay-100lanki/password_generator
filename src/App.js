import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="passwordBox">
      <h2>Password generaotor</h2>
      <div className='passwordbox'>
        <input type='text' readOnly></input><button>Copy</button>
      </div>
      <div className='passLength'>
          <label>Password Length</label>
          <input type='number' max={20} min={6}></input>
      </div>
    </div>
  );
}

export default App;
 