import CodySlackPicture from './logo.png';
import './App.css';
import FileUploadDesktop from './FileUploadDesktop'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={CodySlackPicture} className="App-logo" alt="logo" />
        <FileUploadDesktop />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
