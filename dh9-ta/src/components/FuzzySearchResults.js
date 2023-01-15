import React from "react";

const FuzzySearchResults = ({ allText }) => {
    const currentWords = [allText];

    return (
        <>
            <h3>{currentWords}</h3>
        </>
    );
}

export default FuzzySearchResults;