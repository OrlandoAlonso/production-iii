import React from 'react';
import { Link } from "react-router-dom";

//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Client = () => {
  return (
    <div className='ml-[250px] relative h-screen w-auto'>
      <header className='w-full h-[74px] flex items-center justify-between px-6 border-b-2 border-white bg-dark-minus'>
        <h1 className='text-2xl font-bold text-white'>Clientes</h1>
        <Link to={'/clients/new'} className='text-white bg-primary w-[100px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center hover:bg-primary/40 hover:shadow-md'>Nuevo</Link>
      </header>
      <main className='w-full h-full p-4'>
        <section className='w-full h-auto bg-dark-minus rounded-md p-6'>
          <section className='w-full flex items-center justify-between mb-4'>
            <form action="/">
              <select name="order" id="order" className='w-auto align-middle appearance-none bg-gray/[0.3] text-white px-3 py-[5px] rounded-md'>
                <option className='bg-gray/[0.8] border-none' value="0">Nombre, Dni</option>
                <option className='bg-gray/[0.8] border-none' value="1">Nombre</option>
                <option className='bg-gray/[0.8] border-none' value="2">DNI</option>
                <option className='bg-gray/[0.8] border-none' value="3">Direccion</option>
              </select>
            </form>
            <form action="/" className='flex items-center gap-x-[5px]'>
              <input type="text" className='border-none px-3 py-[9px] text-[12px] rounded-md bg-gray/[0.3] text-white placeholder:text-black' placeholder='Buscar...' />
              <select name="order" id="order" className='w-auto align-middle appearance-none bg-gray/[0.3] text-white px-3 py-[5px] rounded-md'>
                <option value="0">Nombre, Dni</option>
                <option value="1">Nombre</option>
                <option value="2">DNI</option>
                <option value="3">Direccion</option>
              </select>
              <button className='w-[30px] h-[30px] flex items-center justify-center bg-primary rounded-lg hover:bg-primary/40 hover:shadow-md'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[15px] text-white' />
              </button>
            </form>
          </section>
          <section className='text-white text-[13px] font-normal'>
            <div className='w-full h-[550px] overflow-auto'>
              <table className='h-[200px] w-full mb-[1rem] table-auto overflow-y-scroll overflow-x-scroll'>
                <thead>
                  <tr className='leading-[1.5rem]'>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Nombre</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Apellido</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>DNI</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Correo</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Teléfono</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Direccion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-dark/[0.4] align-top border-b-[1px]'>
                    <td className='text-left pl-4 pt-3'>Nombre</td>
                    <td className='text-left pl-4 pt-3'>Apellido</td>
                    <td className='text-left pl-4 pt-3'>DNI</td>
                    <td className='text-left pl-4 pt-3'>Correo</td>
                    <td className='text-left pl-4 pt-3'>Teléfono</td>
                    <td className='text-left pl-4 pt-3'>Dirección</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Client