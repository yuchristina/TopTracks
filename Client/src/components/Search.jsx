import React from 'react';

const Search = (props) => (
  <div className="wrap">
     <div className="search">
      <form>
        <input onChange={props.onChange} type="text" className ="searchTerm" placeholder="Enter key words"></input>
        <button onClick={props.onSubmit} type="submit" className ="searchButton"> Search </button>
      </form> 
    </div>
  </div>
)

export default Search;