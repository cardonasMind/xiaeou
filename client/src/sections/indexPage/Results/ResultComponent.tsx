import React from "react";

const ResultComponent = () => {
    return (
        <div className="bg-gray-100 h-96 flex items-end">
            <div className="p-4">
                <p>Título más o menos largo de la publicación</p>
                
                <div className="py-4 flex gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 bg-blue-200" />
                        <p>8km²</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 bg-green-200" />
                        <p>6</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 bg-yellow-200" />
                        <p>2</p>
                    </div>
                </div>
                        
                <p className="py-1 px-2 bg-purple-500 text-sm text-white w-max transform translate-x-40">$100.000.000 COP</p>
            </div>
        </div>
    );
}

export default ResultComponent;