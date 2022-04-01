import { BiBug } from 'react-icons/bi'
import Image from '../../assets/img/logo.png'

const Nav = () => (
    <nav className="fixed px-10 top-0 z-10 bg-white w-full h-20 drop-shadow-lg flex space-x-96 items-center border-b-2">
        <div className="flex justify-center items-center">
            <img src={Image} width={30} />
            <p className="text-lg pl-2 text-gray-600 font-semibold">Pokémon Go</p>
        </div>
        <div className="flex items-center justify-center absolute right-10 sm:right-36">
            <input type="text" name="search" placeholder="Procurar Pokémon..." className="w-56 h-12 bg-gray-100 rounded-full mr-3 pl-7 text-gray-600 border-none text-base outline-none placeholder:text-gray-500 sm:w-96" />
            <div className="pl-3 flex items-center justify-center">
                <div className="flex items-center justify-center bg-gray-200 w-16 h-12 rounded-tl-full rounded-bl-full">
                    <BiBug className='text-gray-600 text-2xl' />
                </div>
                <div className="border-l-0 border-2 border-gray-200 w-16 h-12 flex items-center justify-center rounded-tr-full rounded-br-full">
                    <p id="count" className="text-lg"></p>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav
