import c1 from "../assets/c1.png";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
const About = () => {
  const cards = [
    {
      img: c1,
      title: "Download Ambula",
      para: "Your journey to better health starts here.",
    },
    {
      img: c2,
      title: "Create ABHA",
      para: "Get your unique digital health identity.",
    },
    {
      img: c3,
      title: "Store Health Records",
      para: "Secure your health data with Ambula's trusted PHR.",
    },
  ];
  return (
    <div id="about">
      <div className=" text-center">
        <h2 className=" text-5xl font-bold ">How Ambula Works</h2>
      </div>
      <div className=" ml-96 mt-6">
        <p className=" ml-24 mt-3 w-6/12 text-center text-lg font-medium text-slate-600">
          Using Ambula is easy! You can create your ABHA, connect with the best
          doctors, book appointments quickly, and store your health records– all
          in one place.
        </p>
      </div>
      <div className=" flex justify-around mt-10 mb-10 ">
        {cards.map((item, index) => (
          <div key={index} className="">
            <div className=" h-72 bg-sky-700 rounded-md">
              <img src={item.img} className=" h-36 text-center pl-16 pt-3" />
              <h2 className=" text-center text-red-500 text-2xl font-bold mt-10">
                {item.title}
              </h2>
              <h2 className=" text-center pt-2 pl-2 pr-2 text-xl text-white w-72">
                {item.para}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
