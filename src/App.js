import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList';

/**
 * App function kicks off componenet rendering
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * App -> BoxList
 */

function App() {
  return (
    <div className="App">
      < BoxList />
    </div>
  );
}

export default App;
