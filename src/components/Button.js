import React from 'react';


function Button({text, disabled}) {

    let buttonDisabled = disabled ?? false;
    return (
        <button className="button" disabled={buttonDisabled}> {text} </button>
    );
}

export default Button