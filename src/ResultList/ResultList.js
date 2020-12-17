import React from 'react';
import Result from '../Result/Result';


function ResultList(props) {

    const results = props.results.map((book) => {
        return (

        <Result 
            title={book.title}
            src={book.src}
            author={book.author}
            description={book.description}
            details={book.details}
            detailsDisplayed={book.detailsDisplayed}
            detailsHandler={props.detailsHandler}
        />
        )
    } )
    console.log(props.results);
    console.log(results);

    return (
        <>
        {results}
        </>
    )

}

export default ResultList;