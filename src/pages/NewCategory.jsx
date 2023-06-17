import React from 'react';
import { Link } from 'react-router-dom';

const NewCategory = () => {
  return (
    <div className="ml-[250px] relative h-screen w-auto">
        <header className='w-full h-[74px] flex items-center justify-between px-6 border-b-2 border-white bg-dark-minus'>
            <h1 className='text-2xl font-bold text-white'>Categorias</h1>
            <div className='flex items-center gap-x-4 h-full'>
                <Link to={'/products'} className='text-white bg-primary w-[110px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center shadow-lg'>Volver</Link>
                <button type='submit' className='text-white bg-primary w-[130px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center  shadow-lg'>Confirmar</button>
            </div>
        </header>
        <main className="w-full h-full p-4">
            <section className='w-full h-5/6 bg-dark-minus rounded-md p-6 text-white'>
                <form action="/" className='h-auto flex flex-col gap-6 border-b-[1px]'>
                    <h2 className='text-xl font-semibold w-full'>Datos</h2>
                    <div className='w-full flex items-start'>
                        <div className='w-1/2 flex flex-col gap-6 px-4'>
                            <label htmlFor="name-product" className='flex items-center gap-x-4 mb-4'>
                                <p title='Nombre' className='flex items-start w-2/5'>Nombre<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                                <select name="name-product" id="name-product" required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg'>
                                    <option value="0" disabled>Selecciona una categoria</option>
                                    <option value="{idCategoria}">Map de las categorias</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    </div>
  )
}

export default NewCategory