import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Admin() {
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/programs/")
      .then((res) => {
        console.log(res.data);
        setPrograms(res.data);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }, []);

  function totalDurations(exercises) {
    let num = 0;
    exercises.forEach((ex) => {
      num += ex.duration;
      console.log(ex.duration);
    });
    return num;
  }
  function deleteProgram(id) {
    axios
      .delete("http://localhost:3001/programs/delete/" + id)
      .then((res) => {
        console.log(res.data);
        setPrograms(res.data);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }
  return (
    <>
      <div className="flex justify-center pt-5">
        <Link
          to="/addnewprogram"
          className="m-auto bg-green-500 font-bold  text-white rounded-lg py-1 px-3"
        >
          Add New Program
        </Link>
      </div>
      <div className="text-white">
        <div className="text-white font-bold w-10/12 m-auto py-5 items-center grid  gap-3 md:grid-cols-2 xl:grid-cols-3 lg:px-5 ">
          {programs.map((el) => {
            return (
              <div
                style={{
                  backgroundImage:
                    `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(` +
                    el.background +
                    `)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-52  text-center p-3 rounded-lg"
              >
                <h1 className="relative top-1/4 text-3xl"> {el.title} </h1>

                <div className="relative top-1/3 w-full flex">
                  <p className="w-2/3">
                    {el.exercises.length} exercises,
                    {totalDurations(el.exercises)}
                    sec
                  </p>
                  <div className="flex flex-col w-full justify-center py-1 px-10">
                    <button
                      onClick={() => {
                        navigate("/editProgram/" + el._id);
                      }}
                      className=" mb-1 bg-blue-600 w- text-white rounded-lg py-1 px-3"
                    >
                      Edit
                    </button>
                    <button
                      className="  bg-red-700  text-white rounded-lg py-1 px-3"
                      onClick={() => {
                        deleteProgram(el._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Admin;
