import React from 'react';

const Home = () => {
  return (
    <div className="ml-[250px] relative h-screen w-auto bg-gradient-to-t from-black to-[#0092C8]">
      <div className='w-full h-[100px] flex items-center justify-center'>
        <h1 className='w-full uppercase text-white text-[25px] mr-4 text-right font-bold'>Los mejores servicios empresariales</h1>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img src="/works.png" alt="Trabajadores" className='w-5/6' />
      </div>
    </div>
  );
};

export default Home;