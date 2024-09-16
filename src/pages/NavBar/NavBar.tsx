import { Link, useLocation } from 'react-router-dom';


import ActiveLink from '../../components/activelink/ActiveLink';
import MenuButton from '../../components/menubutton/MenuButton';

function NavBar() {

    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path;

    return (
        <header className='bg-[#00A0FB] w-full flex h-20 justify-between px-8 items-center sticky top-0 text-white z-10'>
            <div className='flex gap-8'>
                <MenuButton />
                <Link to="/">
                    <figure className='w-16 h-auto '>
                        <img src="src/assets/logo.png" alt="" />
                    </figure>
                </Link>

                <ul className=' items-center hidden divide-solid divide-x-2  sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>
                    <ActiveLink isActive={isActive('/')} linkTitle={'Inicio'} linkUrl='/' />
                    <ActiveLink isActive={isActive('/Pontos')} linkTitle={'Meus Pontos'} linkUrl='/Pontos' />
                    <ActiveLink isActive={isActive('/ChatBot')} linkTitle={'Chatbot'} linkUrl='/ChatBot' />
                    <ActiveLink isActive={isActive('/Perfil')} linkTitle={'Perfil'} linkUrl='/Perfil' />
                    <ActiveLink isActive={isActive('/Faq')} linkTitle={'FAQ'} linkUrl='/Faq' />
                    <ActiveLink isActive={isActive('/Integrantes')} linkTitle={'Integrantes'} linkUrl='/Integrantes' />
                </ul>
            </div>

            <section className='flex gap-8 items-center'>
                <button className='bg-[#0046BF] rounded-full px-4 w-full h-12 text-nowrap hidden sm:block md:block lg:block xl:block 2xl:block'>Baixar Aplicativo</button>

                <div className='flex items-center gap-4'>
                    <h1 className='text-right text-nowrap'>Seja bem vindo, <br />Salazar</h1>
                    <Link to='/Login'>
                        <figure className='w-14'>
                            <img className='w-16 h-auto rounded-full' src="https://avatars.githubusercontent.com/u/65926010?s=96&v=4" alt="Profile Picture" />
                        </figure>
                    </Link>
                </div>
            </section>
        </header>
    )
}

export default NavBar