import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const removeItem = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <Navbar />
      <h2 className="mt-20 text-center text-lg">Cart Details</h2>
      <div className=" ml-96">
        {products?.map((product, i) => (
          <div key={i} className=" flex gap-10 mt-5 w-7/12 ">
            <img
              src={product.image}
              className=" h-28 w-28 ml-5 mt-2 rounded-sm shadow-sm mb-3 object-cover"
            />
            <h2 className="text-lg font-semibold mt-10  w-10">
              ₹{product.price}
            </h2>
            <h2 className=" mt-10 ml-10 w-80">{product.title}</h2>
            <button
              className=" bg-red-500 w-20 h-10 mt-10  rounded-sm text-white hover:bg-red-600"
              onClick={() => removeItem(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
