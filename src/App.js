import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Rotunda Family Blog
        </h1>
        <ul>
          <li>This site is a work in progress.</li>
          <li>Come back later to see what's new!</li>
        </ul>
        <p>
          Created by{' '}
          <a
            className="App-link"
            href="https://cjones.dev"
            target="_blank"
            rel="noopener noreferrer"
            >
              Chris Jones
          </a>
        </p>

      </header>
    </div>
  );
}

export default App;
