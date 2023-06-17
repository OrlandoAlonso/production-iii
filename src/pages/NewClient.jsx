import React from 'react';
import { Link } from 'react-router-dom';

const NewClient = () => {
  return (
    <div className="ml-[250px] relative h-screen w-auto">
        <header className='w-full h-[74px] flex items-center justify-between px-6 border-b-2 border-white bg-dark-minus'>
            <h1 className='text-2xl font-bold text-white'>Clientes</h1>
            <div className='flex items-center gap-x-4 h-full'>
                <Link to={'/clients'} className='text-white bg-primary w-[110px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center shadow-lg'>Volver</Link>
                <button type='submit' className='text-white bg-primary w-[130px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center  shadow-lg'>
                    Confirmar
                </button>
            </div>
        </header>
        <main className="w-full h-full p-4">
            <section className='w-full h-5/6 bg-dark-minus rounded-md p-6 text-white'>
                <form action="/" className='h-1/2 flex flex-col gap-6 border-b-[1px]'>
                    <h2 className='text-xl font-semibold w-full'>Datos personales</h2>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <label htmlFor="name" className='flex items-center gap-x-4 w-full'>
                            <p title='Nombre' className='flex items-start w-2/5'>Nombre<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                            <input type="text" name="name" id="name" placeholder='Ingrese su nombre' autoComplete='name' required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                        <label htmlFor="lastname" className='flex items-center gap-x-4'>
                            <p title='Apellido' className='flex items-start w-2/5'>Apellido<span className='text-[8px] text-danger ml-2'>(*)</span></p>
                            <input type="text" name="lastname" id="lastname" placeholder='Ingrese su apellido' autoComplete='lastname' required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                        <label htmlFor="dni" className='flex items-center gap-x-4'>
                            <p title='DNI' className='flex items-start w-2/5'>DNI<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                            <input type="text" name="dni" id="dni" placeholder='Ingrese su DNI' autoComplete='DNI' required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                    </div>
                </form>
                <form action="/" className='h-1/2 flex flex-col gap-6 pt-4'>
                    <h2 className='text-xl font-semibold'>Contacto</h2>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <label htmlFor="email" className='flex items-center gap-x-4'>
                            <p title='Correo' className='flex items-start w-2/5'>Correo electrónico<span className='text-[10px] text-danger ml-2'>(*)</span></p>
                            <input type="text" name="email" id="email" placeholder='Ingrese su correo' autoComplete='email' required className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                        <label htmlFor="phone" className='flex items-center gap-x-4'>
                            <p title='Telefono' className='flex items-start w-2/5'>Teléfono</p>
                            <input type="text" name="phone" id="phone" placeholder='Ingrese su telefono' autoComplete='phone' className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                        <label htmlFor="address" className='flex items-center gap-x-4'>
                            <p title='Direccion' className='flex items-start w-2/5'>Dirección</p>
                            <input type="text" name="address" id="address" placeholder='Ingrese su direccion' autoComplete='address' className='w-3/5 h-[30px] border-none bg-gray/[0.2] px-4 rounded-lg' />
                        </label>
                    </div>
                </form>
            </section>
        </main>
    </div>
  )
}

export default NewClient