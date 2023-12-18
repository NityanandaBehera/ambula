import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Nav } from "../components";
const index = () => {
  return (
    <div className=" bg-slate-50 w-full h-full">
      <Nav />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default index;
