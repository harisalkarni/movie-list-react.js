import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';


function App()
{
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=72ff8aa9";

  const search = (e) =>
  {
    if (e.key === "Enter")
    {
      axios(apiUrl + "&s=" + state.s).then((data) =>
      {
        let results = data.Search;

        setState(prevState) => {
    return { ...prevState, results: results }
  }
});
    }
  }


const handleInput = (e) =>
{
  let s = e.target.value;
  setState(prevState =>
  {
    return { ...prevState, s: s }
  })
  console.log(state.s);
}
return (
  <div className="App">
    <header>
      <h1>Movie database</h1>
    </header>
    <main>
      <Search handleInput={handleInput} search={search} />
    </main>
  </div>
);
}

export default App;
