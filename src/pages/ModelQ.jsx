import React from 'react'

const ModelQ = () => {
  return (
    <div className='ml-[250px] relative h-screen w-auto'>
      <header className='w-full h-[74px] flex items-center justify-between px-6 border-b-2 border-white bg-dark-minus'>
        <h1 className='text-2xl font-bold text-white'>Modelo Q</h1>
      </header>
      <main className='w-full h-full p-4'>
        <section className='w-full h-auto bg-dark-minus rounded-md p-6 flex flex-col items-center'>
          <div className='w-full flex border-b-[1px] border-white pb-4'>
            <div className='w-1/2 h-auto flex flex-col items-start gap-y-1 pl-[4px] justify-center text-white'>
              <p>Demanda anual (D): {"{Demanda}"}</p>
              <p>Costo de pedido (S): {"{Costo de pedido}"}</p>
              <p>Costo de mantenimiento (H): <span>{"{Costo de mantenimiento}"}</span></p>
              <p>Costo anual total (CT): <span>{"{Costo anual total}"}</span></p>
              <p>Costo por unidad (C): <span>{"{Costo anual total}"}</span></p>
              <p>Cantidad por pedir (Q<span className='text-[10px]'>opt</span>): <span>{"{Costo anual total}"}</span></p>
            </div>
          </div>
          <div className='w-full py-4 flex flex-col gap-y-6 border-b-[1px] border-white'>
            <div className='w-full h-[80px] flex items-center justify-start pl-[4px] text-white'>
                <h2>Q<span className='text-[10px]'>opt</span> <span className='px-2 text-lg'>➡</span></h2>
                <p className='pl-3 tracking-[-2.5px]'>--</p>
                <div className='h-full flex items-end'>
                  <p className='-ml-[2px] pb-[19px] tracking-[-3.5px]'>\/</p>
                </div>
                <div className='h-full flex items-start'>
                  <p className='pt-[20px]'>/</p>
                </div>
                <div className='w-auto h-full items-start justify-start'>
                  <div className="w-auto h-[1.5px] bg-white mt-[23px] -ml-[2px]"></div>
                  <p className='w-full flex items-center justify-center'>2 {"{D}"} {"{S}"}</p>
                  <div className='w-auto h-[1.5px] bg-white -ml-[2px]'></div>
                  <p className='w-full flex items-center justify-center'>{"{H}"}</p>
                </div>
                <h2 className='pl-3'> = {"{Resultado}"}</h2>
              </div>
            <p className='flex items-center text-white pl-[4px]'>
              CT = {"{D}"}{"{C}"} + 
              <span className='flex flex-col items-center pl-2 gap-y-[4px]'>
                <span>{"{D}"}</span>
                <span className='w-full h-[1px] bg-white'></span>
                <span>{"{Q}"}</span>
              </span>
              <span className='pl-2'>{"{S}"}</span>
              <span className='pl-2'>+</span>
              <span className='flex flex-col items-center pl-2 gap-y-[4px]'>
                <span>{"{Q}"}</span>
                <span className='w-full h-[1px] bg-white'></span>
                <span>{2}</span>
              </span>
              <span className='pl-2'>{"{H}"}</span>
              <span className='pl-2'>=</span>
              <span className='pl-2'>{"{Resultado}"}</span>
            </p>
          </div>
          <div className='w-full pt-8 pl-[4px] flex flex-col gap-y-6 text-white'>
            <p> 
              <span className='font-semibold'>¿Qué pedir?</span> 
              <span className='pl-2 font-semibold'>=</span>
              <span className='pl-2'>{"{Producto al que se va a pedir}"}</span>
            </p>
            <p> 
              <span className='font-semibold'>¿Comó pedir?</span> 
              <span className='pl-2 font-semibold'>=</span>
              <span className='pl-2'>{"{No se xd}"}</span>
            </p>
            <p> 
              <span className='font-semibold'>¿Cuándo pedir?</span> 
              <span className='pl-2 font-semibold'>=</span>
              <span className='pl-2'>{"{Qué día se deberá pedir el productor}"}</span>
            </p>
            <p> 
              <span className='font-semibold'>¿Cuánto pedir?</span> 
              <span className='pl-2 font-semibold'>=</span>
              <span className='pl-2'>{"{La cantidad a pedir del producto (Q)}"}</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ModelQ