import React from "react";

const Filters = props => {
    return (
        <div>
            <p>Data sources</p>
            {props.options && props.options.map(option => (
                <div key={option.label}>
                    <input type="checkbox" id={option.label} name={option.label} checked={option.checked} onChange={() => props.action(option)} />
                    <label htmlFor={option.label}>{option.label}</label>
                </div>
            ))}
        </div>
    )
}

export default Filters;