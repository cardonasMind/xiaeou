import React from "react";

const HeroSection = () => {
    return (
        <div className="bg-blue-300 py-16 px-4">
            <button className="absolute top-4 right-0 bg-white py-1 px-4">Experiencias Naturales</button>
            <h1 className="text-6xl py-8">Xiaeou</h1>
            <div>
                <button className="bg-purple-400 hover:bg-purple-500 py-2 px-4 text-white">Comprar</button>
                <button className="bg-gray-100 hover:bg-gray-200 py-2 px-4">Rentar</button>
                <div className="bg-white p-4 grid grid-cols-3 gap-4">
                    <div>
                        <p>Ubicación</p>
                        <p>Barrio Belén</p>
                    </div>
                    <div>
                        <p>Inmueble</p>
                        <p>Casa</p>
                    </div>
                    <div>
                        <p>Precio</p>
                        <p>$10.000.000 - $40.000.000 COP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;