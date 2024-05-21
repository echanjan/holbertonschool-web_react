import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email:</label>
        <input id='email' type='email' name='email'></input>

        <label htmlFor="password">Password:</label>
        <input id='password' type='password' name='password'></input>
        
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <hr></hr>
        <div className="Copyright">
          <i>{getFullYear()} - {getFooterCopy(true)}</i>
        </div>
      </footer>
    </div>
  );
}

export default App;
