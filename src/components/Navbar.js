import {Link} from 'react-router-dom';
import image from './../components/image.png';



const Navbar = () => {
    return ( 
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
           <div className="flex items-center text-xl font-bold">
        <img
            src={image}
            alt="Description"
            className="mr-4 w-5 h-6" 
        />
        <span>Prodmast</span>
        </div>

                
            <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Services</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Contact</Link></li>
            </ul> 
            <button className="bg-[#0c212a] text-white px-4 py-2 rounded">Sign Up</button>
        </nav>
     );
}
 
export default Navbar;