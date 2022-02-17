import React from "react";

const SingleArticle = (props) => {
    const {image, title, date, preamble} = props.data;

    return (
        <div>
            <img src={image} />
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{preamble}</p>
        </div>
    )
}

export default SingleArticle;