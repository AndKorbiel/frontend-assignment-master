import React from 'react';

const SortingButton = props => {
    return (
        <div>
            <p>Sort by date</p>
            <button onClick={props.action}>Set sorting</button>
        </div>
    )
}

export default SortingButton;