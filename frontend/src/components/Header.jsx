// import de navlink pour la gestion des liens 
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col items-center">
          <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <NavLink to = '/'>
            <img src={logo} alt="Logo" fill="none" class="rounded-full w-14 h-14" />
            </NavLink>
            <NavLink to = '/'>
            <div class="flex ml-3 text-xl">Jérémy Marszalek</div>
            </NavLink>
          </div>
            <div class="flex justify-between mr-20 hover:text-gray-900"><NavLink to = '/'>Home</NavLink></div>
            <div class="flex justify-between mr-20 hover:text-gray-900"><NavLink to= '/about'> About </NavLink></div>
        </div>
      </header>
    )
}

export default Header 