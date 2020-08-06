import React from 'react';
import Search from './components/Search';


function App()
{
  return (
    <div className="App">
      <header>
        <h1>Movie database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;