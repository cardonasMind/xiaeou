import { PureComponent } from "react";

import Link from "next/link";

export default class extends PureComponent {
    render() {
        return (
            <div className="grid grid-cols-2">
                <div className="px-4">
                    <div className="flex gap-4">
                        <div className="w-max grid gap-4 h-96 overflow-y-auto">
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                            <div className="w-12 h-12 bg-blue-200" />
                        </div>
                        <div className="bg-gray-100 w-full h-96">
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl">Comentarios</h1>

                        <div className="bg-gray-100 px-4 rounded-lg">
                            <div className="flex gap-4 items-end">
                                <div className="w-12 h-12 bg-blue-400" />
                                <p className="text-lg">Diego Cardona</p>
                            </div>

                            <p className="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Enim tempora veniam voluptatibus aspernatur provident a. 
                                Officiis nam itaque non et mollitia ullam reiciendis laudantium,
                                dolorum necessitatibus recusandae obcaecati, provident perferendis.
                            </p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-lg">
                            <div className="flex gap-4 items-end">
                                <div className="w-12 h-12 bg-blue-400" />
                                <p className="text-lg">Diego Cardona</p>
                            </div>

                            <p className="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Enim tempora veniam voluptatibus aspernatur provident a. 
                                Officiis nam itaque non et mollitia ullam reiciendis laudantium,
                                dolorum necessitatibus recusandae obcaecati, provident perferendis.
                            </p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-lg">
                            <div className="flex gap-4 items-end">
                                <div className="w-12 h-12 bg-blue-400" />
                                <p className="text-lg">Diego Cardona</p>
                            </div>

                            <p className="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Enim tempora veniam voluptatibus aspernatur provident a. 
                                Officiis nam itaque non et mollitia ullam reiciendis laudantium,
                                dolorum necessitatibus recusandae obcaecati, provident perferendis.
                            </p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-lg">
                            <div className="flex gap-4 items-end">
                                <div className="w-12 h-12 bg-blue-400" />
                                <p className="text-lg">Diego Cardona</p>
                            </div>

                            <p className="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Enim tempora veniam voluptatibus aspernatur provident a. 
                                Officiis nam itaque non et mollitia ullam reiciendis laudantium,
                                dolorum necessitatibus recusandae obcaecati, provident perferendis.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <Link href="/">
                        <p>Ir atrás</p>
                    </Link>

                    <div className="py-8">
                        <h1 className="text-2xl">Título más o menos largo de la publicación</h1>

                        <div className="flex gap-4">
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

                        <p className="py-1 px-2 bg-purple-500 text-white w-max">$100.000.000 COP</p>
                    </div>

                    <div>
                        <h1 className="text-2xl">Notas del autor</h1>
                    </div>

                    <div>
                        <h1 className="text-2xl">Ubicación</h1>

                        <div className="h-96 bg-blue-200" />
                    </div>

                    <div>
                        <h1 className="text-2xl">Contacto</h1>

                        <div className="flex gap-4 py-4">
                            <div className="grid justify-items-center">
                                <div className="w-8 h-8 bg-green-300 rounded-full" />
                                <p>WhatsApp</p>
                            </div>
                            <div className="grid justify-items-center">
                                <div className="w-8 h-8 bg-blue-400 rounded-full" />
                                <p>Messenger</p>
                            </div>
                            <div className="grid justify-items-center">
                                <div className="w-8 h-8 bg-green-600 rounded-full" />
                                <p>Llamar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}