import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Filter from '../Filter/Filter';


function SearchSection(props) {
    return(
        <div>
            <Searchbar
                updateTerm={props.updateTerm}
                searchHandler={props.searchHandler}
            />
            <Filter 
                updatePrintType={props.updatePrintType}
                updateCost={props.updateCost}
            />
        </div>
    );
}

export default SearchSection;