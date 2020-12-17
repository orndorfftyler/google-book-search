import React from 'react';

function Result(props) {

    const details = (props.detailsDisplayed !== 'no') //default value is no
                    ? <p>{props.description}</p> 
                    : "";

    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <img src={props.src} width="200" />
                <div className="result">
                    <p>Author: {props.author}</p>
                    <p>Publisher: {props.details}</p>
                    {details}
                    <p onClick={() => props.detailsHandler(props.title)}>Show/Hide Details (click me)</p> {/*change state*/}
                </div>
            </div>
        </div>
    )
}

export default Result;