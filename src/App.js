import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import axios from 'axios';
import Popup from './components/Popup';


function App()
{
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiUrl = "http://www.omdbapi.com/?apikey=72ff8aa9";



  const search = (e) =>
  {
    if (e.key === "Enter")
    {
      axios(apiUrl + "&s=" + state.s).then(({ data }) =>
      {
        let results = data.Search;
        //console.log(data);
        setState(prevState =>
        {
          return { ...prevState, results: results }
        });
      });
    }
  }



  const handleInput = (e) =>
  {
    let s = e.target.value;
    setState(prevState =>
    {
      return { ...prevState, s: s }
    });
  }

  //Variable pour la popup quand on clique sur l'image du film
  let openPopup = id =>
  {
    axios(apiUrl + "&i=" + id).then(({ data }) =>
    {
      let result = data;
      //console.log(result);
      setState(prevState =>
      {
        return { ...prevState, selected: result }
      });
    });
  }

  //fin de la variable

  const closePopup = () =>
  {
    setState(prevState =>
    {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}

      </main>
    </div>
  );
}

export default App;
