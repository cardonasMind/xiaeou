import React from "react";

import PrintResults from "./PrintResults";

const ResultsSection = () => {
    return (
        <section>
            <h1 className="text-3xl">Resultados de tu busqueda</h1>

            <PrintResults />
        </section>
    );
}

export default ResultsSection;