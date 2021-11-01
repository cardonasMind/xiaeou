import React, { PureComponent, Fragment } from "react";

import { GetStaticProps } from "next";

class IndexPage extends PureComponent {
    render () {
        return (
            <Fragment>
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
                <h1 className="text-3xl">Resultados de tu busqueda</h1>
                <div className="p-4 grid grid-cols-4 gap-4">
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
                            <div className="py-1 px-2 bg-purple-500 text-sm text-white w-max transform translate-x-40"><p>$100.000.000 COP</p></div>
                        </div>
                    </div>

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
                            <div className="py-1 px-2 bg-purple-500 text-sm text-white w-max transform translate-x-40"><p>$100.000.000 COP</p></div>
                        </div>
                    </div>

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
                            <div className="py-1 px-2 bg-purple-500 text-sm text-white w-max transform translate-x-40"><p>$100.000.000 COP</p></div>
                        </div>
                    </div>

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
                            <div className="py-1 px-2 bg-purple-500 text-sm text-white w-max transform translate-x-40"><p>$100.000.000 COP</p></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default IndexPage;