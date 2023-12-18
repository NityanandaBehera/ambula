import logo from "../assets/ambula.png";
const Nav = () => {
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="flex w-full bg-slate-200 shadow-md h-16 items-center justify-between fixed top-0 backdrop-blur-sm">
      <div className=" mx-7">
        <img src={logo} className=" h-10" />
      </div>
      <div>
        <ul className="hidden  md:flex mr-20 text-xl font-semibold ">
          {menuLinks?.map((menu, i) => (
            <li key={i} className="px-6 hover:text-cyan-600">
              <a href={menu?.link}>{menu?.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
