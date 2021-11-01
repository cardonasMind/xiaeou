import React from "react";

import ResultComponent from "./ResultComponent";

const PrintResults = () => {
    return (
        <div className="p-4 grid grid-cols-4 gap-4">
            <ResultComponent />
            <ResultComponent />
            <ResultComponent />
            <ResultComponent />
            <ResultComponent />
        </div>
    );
}

export default PrintResults;