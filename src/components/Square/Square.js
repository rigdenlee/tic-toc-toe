import React from 'react';

const Square = (props) => {
    return (
        <button onClick={props.click}>
            {props.value}
        </button>
    );
}

export default Square;