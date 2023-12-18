import logo from "../assets/ambula.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <nav className="flex w-full bg-slate-200 shadow-md h-16 items-center justify-between fixed top-0 backdrop-blur-sm">
      <div className=" mx-7">
        <img src={logo} className=" h-10" />
      </div>
      <div>
        <ul className="flex mr-20 text-xl font-semibold gap-10 cursor-pointer ">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <li>Cart Items:{items.length}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
