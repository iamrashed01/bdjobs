import logo from "../../assets/images/logo.svg";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} width={150} className="App-logo" alt="logo" />
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
