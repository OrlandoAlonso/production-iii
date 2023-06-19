import React from 'react';
import { Link } from 'react-router-dom';

//import icons
import { LuFileInput } from "react-icons/lu";

const NewBuy = () => {
    return (
        <div className="ml-[250px] relative h-screen w-auto">
            <header className='w-full h-[74px] flex items-center justify-between px-6 border-b-2 border-white bg-dark-minus'>
                <h1 className='text-2xl font-bold text-white'>Compra</h1>
                <div className='flex items-center gap-x-4 h-full'>
                    <Link to={'/buys'} className='text-white bg-primary w-[110px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center hover:bg-primary/40 hover:shadow-md'>Volver</Link>
                    <button type='submit' className='text-white bg-primary w-[130px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center hover:bg-primary/40 hover:shadow-md'>Confirmar</button>
                </div>
            </header>
            <main className="w-full h-full p-4">
                <section className='w-full h-5/6 bg-dark-minus rounded-md p-6 text-white'>
                    <form action="/" className='h-auto flex flex-col gap-6 border-b-[1px]'>
                        {/* <h2 className='text-xl font-semibold w-full'>Datos</h2> */}
                        <div className='w-full flex items-start'>
                            <div className='w-1/2 flex flex-col gap-6 px-4'>
                                <label htmlFor="name-product" className='flex items-center gap-x-4 mb-4'>
                                    <p title='Nombre' className='flex items-start w-2/5'>Fecha de emisión</p>
                                    <input type="date" name="name-product" id="name-product" className='w-[180px] h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' value={"2023-06-17"} />
                                </label>
                            </div>
                        </div>
                        <fieldset className='w-full flex items-center border-b-[1px] border'>
                            <legend className='ml-2 px-2'>Información del proveedor</legend>
                            <label htmlFor="provider" className='flex items-center py-3 px-4 w-1/2'>
                                <p title='Proveedor' className='flex items-start w-1/4'>Proveedor</p>
                                <input type="text" name="provider" id="provider" className='w-3/4 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' placeholder='...' />
                            </label>
                        </fieldset>
                        <fieldset className='w-full flex items-start border-b-[1px] border'>
                            <legend className='ml-2 px-2'>Información de producto</legend>
                            <div className='w-full flex items-center justify-between gap-6 px-4 py-3'>
                                <div className='w-full flex items-center gap-6'>
                                    <label htmlFor="product" className='flex flex-col items-start gap-y-3 mb-4 w-2/3'>
                                        <p title='Producto' className='flex items-start w-full'>Producto</p>
                                        <input type="text" name="product" id="product" className='w-full h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' placeholder='...' />
                                    </label>
                                    <label htmlFor="cost-buy" className='flex flex-col items-start gap-y-3 mb-4 w-2/6'>
                                        <p title='Costo compra' className='flex items-start w-full'>Costo compra</p>
                                        <input type="text" name="cost-buy" id="cost-buy" className='w-full h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' placeholder='{Costo compra}' disabled />
                                    </label>
                                    <label htmlFor="price-sale" className='flex flex-col items-start gap-y-3 mb-4 w-2/6'>
                                        <p title='Precio venta' className='flex items-start w-full'>Precio venta</p>
                                        <input type="text" name="price-sale" id="price-sale" className='w-full h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' placeholder='{Precio Venta}' disabled />
                                    </label>
                                    <label htmlFor="amount" className='flex flex-col items-start gap-y-3 mb-4 w-1/6'>
                                        <p title='Cantidad' className='flex items-start w-full'>Cantidad</p>
                                        <input type="number" name="amount" id="amount" className='w-full h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' min={1} max={100} placeholder='0' />
                                        {/* El max del input debera ser el total del inventario menos el stock minimo */}
                                    </label>
                                </div>
                                <button className='w-[150px] h-[40px] flex items-center justify-center bg-primary text-white rounded-xl hover:bg-primary/40 hover:shadow-md'>Agregar</button>
                            </div>
                        </fieldset>
                    </form>
                    <div className='w-full h-auto flex items-center gap-x-3 py-6 overflow-hidden'>
                        <div className='w-4/5 h-auto'>
                            <table className='h-[200px] w-full mb-[1rem] table-auto overflow-y-scroll overflow-x-scroll border'>
                                <thead>
                                    <tr className='leading-[1.5rem]'>
                                        <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4 w-[5px]'></th>
                                        <th className='border-y-[1px] border-x-[1px] border-white p-[0.3rem] text-left pl-4'>Producto</th>
                                        <th className='border-y-[1px] border-r-[1px] border-white p-[0.3rem] text-left pl-4'>Costo compra</th>
                                        <th className='border-y-[1px] border-r-[1px] border-white p-[0.3rem] text-left pl-4'>Cantidad</th>
                                        <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-dark/[0.4] align-top border-b-[1px]'>
                                        <td className='text-left pl-4 pt-3 w-[5px]'></td>
                                        <td className='text-left pl-4 pt-3 border-x-[1px]'></td>
                                        <td className='text-left pl-4 pt-3 border-r-[1px]'></td>
                                        <td className='text-left pl-4 pt-3 border-r-[1px]'></td>
                                        <td className='text-left pl-4 pt-3'></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='w-1/5 h-[200px] mb-[1rem] p-2 flex flex-col items-center justify-between'>
                            <div className='w-full flex flex-col items-start justify-center'>
                                <p className='leading-8 font-medium'>Total a pagar:</p>
                                <input className='w-full bg-white/60 h-[30px] rounded-lg placeholder:text-dark placeholder:px-2' type="text" placeholder='{Total}' disabled />
                            </div>
                            <button title='Esto registrará una compra' className='w-full h-[50px] flex items-center justify-center gap-x-3 bg-primary rounded-xl hover:bg-primary/40 hover:shadow-lg'>
                                <LuFileInput className='text-lg' />
                                <p className='text-lg'>Registrar</p>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default NewBuy