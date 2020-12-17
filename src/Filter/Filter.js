import React from 'react';

function Filter(props) {
    return (
        <form>
            <label htmlFor="type">Print Type:</label>
            <select
            id="type"
            name="type"
            onChange={e => props.updatePrintType(e.target.value)}>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>

            </select>
            <label htmlFor="cost">Free ebook?:</label>
            <select
            id="cost"
            name="cost"
            onChange={e => props.updateCost(e.target.value)}>
                <option value="remove">no</option>
                <option value="free-ebooks">yes</option>
            </select>

        </form>

    )
}

export default Filter;