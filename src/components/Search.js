import React from 'react';

function Search({ handleInput })
{
  return (
    <section className="searchbox-wrap">
      <input 
      type="text"
      placeholder="Find whatever you want" 
      className="searchbox" 
      onChange={handleInput} 
      />
    </section>
  )
}

export default Search
