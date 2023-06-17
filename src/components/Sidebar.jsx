import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//import icons
import { FiLogOut } from "react-icons/fi";
import { TbCircleLetterP, TbCircleLetterQ } from "react-icons/tb";

//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUsers,
  faAddressCard,
  faScrewdriverWrench,
  faBoxOpen,
  faTags,
  faCartArrowDown,
  faMoneyCheckDollar,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";

//Import sweetalert
import swal from 'sweetalert';


const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveStock, setIsActiveStock] = useState(false);

  return (
    <nav className='fixed top-0 left-0 h-full w-[250px] bg-black py-[14px] text-white transition-all duration-[0.5s] z-[100] flex flex-col justify-between'>
      <div>
        <header className='relative flex items-center w-full h-[60px] pb-4 border-b-2'>
          <div className="flex items-center">
            <span className="min-w-[60px] flex items-center justify-center">
              <img className='w-[40px] rounded-[6px] bg-primary' src="{userImage}" alt="{userName}" />
            </span>

            <div className="text-[16px] font-medium flex flex-col transition-all duration-[0.3s] whitespace-nowrap opacity-100">
              <span className="font-semibold">Nombre del usuario</span>
              <span className="-mt-[2px]">Rol de usuario</span>
            </div>
          </div>
        </header>
        <main className='h-auto flex flex-col px-3'>
          <div className="mt-[20px]">
            <ul>
              <li className='h-[50px] mt-[10px] list-none flex items-center'>
                <Link to={'/'} className='h-full w-full flex items-center rounded-[6px] transition-all duration-[0.4s] hover:bg-gray hover:text-submenu' onClick={() => {
                  if (isActiveStock) { setIsActiveStock(false); }
                  if (isActive) { setIsActive(false); }
                }}>
                  <FontAwesomeIcon icon={faHouse} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li className='h-[50px] mt-[10px] list-none flex items-center'>
                <Link to={'/clients'} className='h-full w-full flex items-center rounded-[6px] transition-all duration-[0.4s] hover:bg-gray hover:text-submenu' onClick={() => {
                  if (isActiveStock) { setIsActiveStock(false); }
                  if (isActive) { setIsActive(false); }
                }}>
                  <FontAwesomeIcon icon={faUsers} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                  <span>Clientes</span>
                </Link>
              </li>
              <li className='h-[50px] mt-[10px] list-none flex items-center'>
                <Link to={'/providers'} className='h-full w-full flex items-center rounded-[6px] transition-all duration-[0.4s] hover:bg-gray hover:text-submenu' onClick={() => {
                  if (isActiveStock) { setIsActiveStock(false); }
                  if (isActive) { setIsActive(false); }
                }}>
                  <FontAwesomeIcon icon={faAddressCard} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                  <span>Proveedores</span>
                </Link>
              </li>
              <li className={`${isActive ? '[&>.sub-menu]:flex h-auto bg-submenu rounded-lg overflow-hidden hover:border-l-4 hover:border-primary' : '[&>.sub-menu]:hidden'} w-full h-[50px] mt-[10px] list-none flex flex-col items-center`} onClick={() => {
                isActive ? setIsActive(false) : setIsActive(true);
                if (isActiveStock) { setIsActiveStock(false); }
              }}>
                <a href="#" className={`${isActive ? 'rounded-none' : 'rounded-[6px]'} h-[50px] w-full flex items-center transition-all duration-[0.4s] hover:bg-gray hover:text-submenu`}>
                  <FontAwesomeIcon icon={faScrewdriverWrench} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                  <span>Mantenedor</span>
                </a>
                <ul className='sub-menu bg-submenu w-full h-auto flex flex-col'>
                  <li className='w-full h-[50px] list-none flex flex-col items-center'>
                    <Link to={'/products'} className='h-full w-full flex items-center transition-all duration-[0.4s] hover:bg-gray pl-9 hover:text-submenu'>
                      <FontAwesomeIcon icon={faBoxOpen} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                      <span>Producto</span>
                    </Link>
                  </li>
                  <li className='w-full h-[50px] list-none flex flex-col items-center' >
                    <Link to={'/categories'} className='h-full w-full flex items-center transition-all duration-[0.4s] hover:bg-gray pl-9 hover:text-submenu'>
                      <FontAwesomeIcon icon={faTags} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                      <span>Categorias</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='h-[50px] mt-[10px] list-none flex items-center'>
                <Link to={'/buys'} className='h-full w-full flex items-center rounded-[6px] transition-all duration-[0.4s] hover:bg-gray hover:text-submenu' onClick={() => {
                  if (isActiveStock) { setIsActiveStock(false); }
                  if (isActive) { setIsActive(false); }
                }}>
                  <FontAwesomeIcon icon={faCartArrowDown} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                  <span>Compras</span>
                </Link>
              </li>
              <li className='h-[50px] mt-[10px] list-none flex items-center'>
                <Link to={'/sales'} className='h-full w-full flex items-center rounded-[6px] transition-all duration-[0.4s] hover:bg-gray hover:text-submenu' onClick={() => {
                  if (isActiveStock) { setIsActiveStock(false); }
                  if (isActive) { setIsActive(false); }
                }}>
                  <FontAwesomeIcon icon={faMoneyCheckDollar} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                  <span>Ventas</span>
                </Link>
              </li>
              <li className={`${isActiveStock ? '[&>.sub-menu-stock]:flex h-auto bg-submenu rounded-lg overflow-hidden hover:border-l-4 hover:border-primary' : '[&>.sub-menu-stock]:hidden'} w-full h-[50px] mt-[10px] list-none flex flex-col items-center`} onClick={() => {
                isActiveStock ? setIsActiveStock(false) : setIsActiveStock(true);
                if (isActive) {
                  setIsActive(false);
                }
              }}>
                <a href="#" className='h-[50px] w-full flex items-center rounded-[6px] transition-all duration-[0.4s] hover:bg-gray hover:text-submenu'>
                  <FontAwesomeIcon icon={faBoxes} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                  <span>Inventario</span>
                </a>
                <ul className='sub-menu-stock bg-submenu w-full h-auto flex flex-col'>
                  <li className='w-full h-[50px] list-none flex flex-col items-center'>
                    <Link to={'/stock'} className='h-full w-full flex items-center transition-all duration-[0.4s] hover:bg-gray pl-9 hover:text-submenu'>
                      <FontAwesomeIcon icon={faBoxes} className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0" />
                      <span>Reporte</span>
                    </Link>
                  </li>
                  <li className='w-full h-[50px] list-none flex flex-col items-center'>
                    <Link to={'/modelP'} className='h-full w-full flex items-center transition-all duration-[0.4s] hover:bg-gray pl-9 hover:text-submenu'>
                      <TbCircleLetterP className='flex items-center justify-center min-w-[60px] text-[30px] transition-all duration-0'>P</TbCircleLetterP>
                      <span>Modelo P</span>
                    </Link>
                  </li>
                  <li className='w-full h-[50px] list-none flex flex-col items-center'>
                    <Link to={'/modelQ'} className='h-full w-full flex items-center transition-all duration-[0.4s] hover:bg-gray pl-9 hover:text-submenu'>
                      <TbCircleLetterQ className='flex items-center justify-center min-w-[60px] text-[30px] transition-all duration-0'>Q</TbCircleLetterQ>
                      <span>Modelo Q</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </main>
      </div>
      <footer className='w-full h-auto border-t-2'>
        <li className='h-[50px] mt-[10px] list-none flex items-center'>
          <Link to={'/'} className='h-full w-full flex items-center rounded-[6px] transition-all duration-[0.4s] hover:bg-gray hover:text-submenu' onClick={() => {
          swal({
            title: "¿Seguro que desea salir?",
            text: "¡Una vez salga, debera volver a iniciar sesión!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("¡Hasta luego!", {
                icon: "success",
              });
              alert('Holaaa');
            }
          });
        }}>
            <FiLogOut className="flex items-center justify-center min-w-[60px] text-[20px] transition-all duration-0 rotate-180" />
            <span>Salir</span>
          </Link>
        </li>
      </footer>
    </nav>
  )
}

export default Sidebar