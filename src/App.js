import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <a href={ link }>Google Site</a>
      </header>
    </div>
  );
}

export default App;
