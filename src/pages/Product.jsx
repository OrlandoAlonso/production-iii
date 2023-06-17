import React from 'react';
import { Link } from "react-router-dom";

//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  return (
    <div className='ml-[250px] relative h-screen w-auto'>
      <header className='w-full h-[74px] flex items-center justify-between px-6 border-b-2 border-white bg-dark-minus'>
        <h1 className='text-2xl font-bold text-white'>Productos</h1>
        <Link to={'/products/new'} className='text-white bg-primary w-[100px] h-1/2 rounded-lg hover:bg-blue/50 flex items-center justify-center shadow-lg'>Nuevo</Link>
      </header>
      <main className='w-full h-full p-4'>
        <section className='w-full h-auto bg-dark-minus rounded-md p-6'>
          <section className='w-full flex items-center justify-between mb-4'>
            <form action="/">
              <select name="order" id="order" className='w-auto align-middle appearance-none bg-gray/[0.3] text-white px-3 py-[5px] rounded-md'>
                <option className='bg-gray/[0.8] border-none' value="0">Nombre, ID, Cod</option>
                <option className='bg-gray/[0.8] border-none' value="1">Nombre</option>
                <option className='bg-gray/[0.8] border-none' value="2">ID</option>
                <option className='bg-gray/[0.8] border-none' value="3">Código</option>
                <option className='bg-gray/[0.8] border-none' value="3">Cantidad</option>
                <option className='bg-gray/[0.8] border-none' value="3">Marca</option>
                <option className='bg-gray/[0.8] border-none' value="3">Categoria</option>
                <option className='bg-gray/[0.8] border-none' value="3">Precio</option>
              </select>
            </form>
            <form action="/" className='flex items-center gap-x-[5px]'>
              <input type="text" className='border-none px-3 py-[9px] text-[12px] rounded-md bg-gray/[0.3] text-white placeholder:text-black' placeholder='Buscar...' />
              <select name="order" id="order" className='w-auto align-middle appearance-none bg-gray/[0.3] text-white px-3 py-[5px] rounded-md'>
                <option className='bg-gray/[0.8] border-none' value="0">Nombre, ID, Cod</option>
                <option className='bg-gray/[0.8] border-none' value="1">Nombre</option>
                <option className='bg-gray/[0.8] border-none' value="2">ID</option>
                <option className='bg-gray/[0.8] border-none' value="3">Código</option>
                <option className='bg-gray/[0.8] border-none' value="3">Cantidad</option>
                <option className='bg-gray/[0.8] border-none' value="3">Marca</option>
                <option className='bg-gray/[0.8] border-none' value="3">Categoria</option>
                <option className='bg-gray/[0.8] border-none' value="3">Precio</option>
              </select>
              <button className='w-[30px] h-[30px] flex items-center justify-center bg-primary rounded-lg'>
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
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>ID</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Código</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Marca</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Cantidad</th>
                    <th className='border-y-[1px] border-white p-[0.3rem] text-left pl-4'>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-dark/[0.4] align-top border-b-[1px]'>
                    <td className='text-left pl-4 pt-3'>Nombre</td>
                    <td className='text-left pl-4 pt-3'>ID</td>
                    <td className='text-left pl-4 pt-3'>Código</td>
                    <td className='text-left pl-4 pt-3'>Marca</td>
                    <td className='text-left pl-4 pt-3'>Cantidad</td>
                    <td className='text-left pl-4 pt-3'>Precio</td>
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

export default Product