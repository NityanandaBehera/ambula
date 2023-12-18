import { useState } from "react";
import { Nav } from "../components";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setActivity("");
      return updateList;
    });
    console.log(listData);
  }
  function removeActivity(i) {
    const updateListData = listData.filter((ele, id) => {
      return i != id;
    });
    setlistData(updateListData);
  }
  function resetTodo() {
    setlistData([]);
  }
  return (
    <div>
      <Nav />
      <div className="flex justify-center mt-40">
        <div className=" h-auto w-4/12 bg-slate-300 rounded-md">
          <h2 className=" text-center font-bold text-xl">Your Todo Lists</h2>
          <div className=" flex">
            <div>
              <input
                type="text"
                placeholder=" add todos..."
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="m-8 ml-10 w-96 h-10"
              />
            </div>
            <div>
              <button
                className=" bg-sky-500 w-14 h-10 rounded-sm mt-8 -mx-8"
                onClick={addActivity}
              >
                Add
              </button>
            </div>
          </div>
          <div className=" ml-10 mb-10">
            {listData?.map((item, i) => (
              <div key={i} className=" flex">
                <div className=" bg-slate-200 h-8 w-96 rounded-sm mt-3 text-center">
                  {item}
                </div>
                <div>
                  <button
                    className=" bg-red-400 mt-3 h-8 rounded-sm pl-2 pr-2"
                    onClick={() => removeActivity(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          {listData.length >= 1 && (
            <button
              className=" ml-48 bg-red-600 text-white mb-5 w-24 h-10 font-medium rounded-sm tracking-wide"
              onClick={resetTodo}
            >
              Reset Todo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
