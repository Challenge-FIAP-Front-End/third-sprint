import { Drawer } from '@mui/material'
import { IoIosMenu } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ActiveLink from '../activelink/ActiveLink';

function MenuButton() {
  const [mainMenuOpen, setMainMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768; 
      setIsMobile(isMobileView);

      if (!isMobileView) {
        setMainMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <>
      <button 
        className='sm:block md:block lg:hidden xl:hidden 2xl:hidden ' 
        onClick={() => setMainMenuOpen(!mainMenuOpen)}
      >
        {mainMenuOpen ? <IoCloseOutline size={"1.7rem"}/> : <IoIosMenu size={"1.7rem"}/> }
      </button>
      <Drawer
        open={mainMenuOpen}
        onClose={() => setMainMenuOpen(false)}
        sx={{
          zIndex: 1,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw',
            marginTop: '5rem',
          },
        }}
        classes={{ paper: 'block lg:hidden xl:hidden 2xl:hidden' }} 
      >
        <ul
          onClick={() => setMainMenuOpen(false)}
          className="text-2xl w-full bg-green flex flex-col gap-12 py-8 px-11 lg:hidden xl:hidden 2xl:hidden"
        >
          <ActiveLink isActive={isActive('/')} linkTitle="Inicio" linkUrl="/" />
          <ActiveLink isActive={isActive('/Pontos')} linkTitle="Meus Pontos" linkUrl="/Pontos" />
          <ActiveLink isActive={isActive('/ChatBot')} linkTitle="Chatbot" linkUrl="/ChatBot" />
          <ActiveLink isActive={isActive('/Perfil')} linkTitle="Perfil" linkUrl="/Perfil" />
          <ActiveLink isActive={isActive('/Faq')} linkTitle="FAQ" linkUrl="/Faq" />
          <ActiveLink isActive={isActive('/Integrantes')} linkTitle={'Integrantes'} linkUrl='/Integrantes' />
          <li> 
            <button className='bg-[#0046BF] rounded-full w-3/4 h-12 text-nowrap text-white'>
              Baixar Aplicativo
            </button>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default MenuButton;