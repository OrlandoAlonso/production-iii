import React from 'react';
import { Link } from 'react-router-dom';

const NewProduct = () => {
  return (
    <div className="ml-[250px] relative h-screen w-auto">
        <header className='w-full h-[74px] flex items-center justify-between px-6 border-b-2 border-white bg-dark-minus'>
            <h1 className='text-2xl font-bold text-white'>Productos</h1>
            <div className='flex items-center gap-x-4 h-full'>
                <Link to={'/products'} className='text-white bg-primary w-[110px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center hover:bg-primary/40 hover:shadow-md'>Volver</Link>
                <button type='submit' className='text-white bg-primary w-[130px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center hover:bg-primary/40 hover:shadow-md'>Confirmar</button>
            </div>
        </header>
        <main className="w-full h-full p-4">
            <section className='w-full h-5/6 bg-dark-minus rounded-md p-6 text-white'>
                <form action="/" className='h-1/2 flex flex-col gap-6 border-b-[1px]'>
                    <h2 className='text-xl font-semibold w-full'>Datos del producto</h2>
                    <div className='w-full flex items-start'>
                        <div className='w-1/2 flex flex-col gap-6 px-4'>
                            <label htmlFor="cod" className='flex items-center gap-x-4 w-full'>
                                <p title='Código' className='flex items-start w-2/5'>Código</p>
                                <input type="text" name="cod" id="cod" placeholder='Ingrese el código del producto' className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                            </label>
                            <label htmlFor="name-product" className='flex items-center gap-x-4'>
                                <p title='Nombre' className='flex items-start w-2/5'>Nombre<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                                <input type="text" name="name-product" id="name-product" placeholder='Ingrese el nombre del producto' required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                            </label>
                            <label htmlFor="marca" className='flex items-center gap-x-4'>
                                <p title='Marca' className='flex items-start w-2/5'>Marca<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                                <input type="text" name="marca" id="marca" placeholder='Ingrese la marca' required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                            </label>
                            <label htmlFor="stock" className='flex items-center gap-x-4'>
                                <p title='Inventario' className='flex items-start w-2/5'>Inventario<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                                <input type="number" min={200} placeholder='200' name="stock" id="stock" required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                            </label>
                        </div>
                        <div className='w-1/2 flex flex-col gap-6 px-4'>
                            <label htmlFor="stock-min" className='flex items-center gap-x-4'>
                                <p title='Inventario minimo' className='flex items-start w-2/5'>Inventario minimo<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                                <input type="number" min={200} placeholder='200' name="stock-min" id="stock-min" required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                            </label>
                            <label htmlFor="category" className='flex items-center gap-x-4'>
                                <p title='Categoria' className='flex items-start w-2/5'>Categoria<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                                <select name="category" id="category" className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg [&>option]:text-dark' required>
                                    <option value="0" disabled>Selecciona una categoria</option>
                                    <option value="1">Tecnología</option>
                                    <option value="2">Ropa</option>
                                    <option value="3">Zapatos</option>
                                    <option value="4">Otros</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </form>
                <form action="/" className='h-1/2 flex flex-col gap-6 pt-4'>
                    <h2 className='text-xl font-semibold'>Datos del proveedor</h2>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <label htmlFor="provider" className='flex items-center gap-x-4'>
                            <p title='Correo' className='flex items-start w-2/5'>Proveedor<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                            <select name="provider" id="provider" className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg [&>option]:text-dark' required>
                                <option value="0" disabled>Selecciona un proveedor</option>
                                <option value="{idProveedor}">Map de los proveedores</option>
                            </select>
                        </label>
                        <label htmlFor="cost-buy" className='flex items-center gap-x-4'>
                            <p title='Costo compra' className='flex items-start w-2/5'>Costo compra<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                            <input type="number" name="cost-buy" id="cost-buy" placeholder='C$ 0.00' className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                        <label htmlFor="price-sale" className='flex items-center gap-x-4'>
                            <p title='Precio venta' className='flex items-start w-2/5'>Precio venta<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                            <input type="number" name="price-sale" id="price-sale" placeholder='C$ 0.00' className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                    </div>
                </form>
            </section>
        </main>
    </div>
  )
}

export default NewProduct