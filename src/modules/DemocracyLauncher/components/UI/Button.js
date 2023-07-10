import React from 'react';

const Button = (props) => {
    return (
        <button
            className="btn btn-primary text-xl font-bold capitalize disabled:bg-gray-700" {...props}>{props.children}
        </button>
    );
};

export default Button;
