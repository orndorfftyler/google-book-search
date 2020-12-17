import React from 'react';

function Searchbar(props) {
    return (
        <form className="wrapper">
            <label htmlFor="book">Search:</label>
            <input onChange={event => props.updateTerm(event.target.value)} name="book" type="text" id="book" required />
            <p onClick={props.searchHandler} >Submit</p>
        </form>

    );
}

export default Searchbar;