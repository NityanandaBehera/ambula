import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.log(error);
      });
  }, [products]);
  const handleAdd = (data) => {
    dispatch(add(data));
  };
  return (
    <div className=" mb-10">
      <Navbar />
      <h2 className=" mt-20 text-center text-lg">Shop Now</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-24 mt-5">
        {products ? (
          products.map((data, id) => (
            <div
              key={id}
              className=" h-56 w-52 bg-slate-100 shadow-md rounded-md"
            >
              <img
                src={data.image}
                alt={data.title}
                className=" h-40 w-52 object-cover"
              />
              <h2 className=" ml-16 text-lg font-semibold">₹{data.price}</h2>
              <button
                className="  bg-green-300 w-full mt-1 h-8 font-medium"
                onClick={() => handleAdd(data)}
              >
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
