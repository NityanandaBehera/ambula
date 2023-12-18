import doc from "../assets/p.svg";
const Home = () => {
  return (
    <div id="home" className=" flex pt-20 pl-28 gap-6 w-12/12">
      <div className=" w-5/12">
        <h2 className=" text-5xl font-semibold tracking-wider">
          Digitize your
        </h2>
        <h2 className=" pt-5 text-4xl text-red-500 font-bold tracking-wide">
          Doctor&apos;s Appointment
        </h2>
        <h3 className=" pt-20 text-xl text-slate-700 font-semibold">
          Join the Healthcare Revolution in India: Empowering You with
          Easy-to-Use Services for a Healthier Future.
        </h3>
        <button className=" mt-10 bg-sky-400 hover:bg-sky-300 w-52 h-12 rounded-md text-white font-semibold tracking-wider text-lg">
          Download the app
        </button>
      </div>
      <div className="">
        <img
          src={doc}
          alt="online doctor appointment"
          className=" h-96 rounded-md bg-blend-lighten"
        />
      </div>
    </div>
  );
};

export default Home;
