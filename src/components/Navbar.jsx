import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return <div>
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <img src="data:image/jpeg;base64,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" alt=""  className="object-fill w-10 ml-5"/>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
        <NavLink to="/">
            <p>Home</p>
        </NavLink>
        <NavLink to="/cart" className="relative">
            <FaCartPlus className="text-2xl"/>
            {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
        </NavLink>
      </div>
    </div>
  </div>;
};

export default Navbar;
