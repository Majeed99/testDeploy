import p1 from "../images/p1.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import gif
// import gifpic from "../images/7ed6d7c74d9befc91815a3afe73d6ec7.gif";
//use gif
// <img height="250px" width="250px" src={gifpic} alt="gif" />

function Programs() {
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/programs/`)
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
  return (
    <>
      <div className="text-white font-bold w-10/12 m-auto py-5 items-center grid  gap-2 lg:grid-cols-3 lg:px-5 ">
        {programs.map((el, i) => {
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

              <div className="relative top-1/2 w-full flex">
                <p className="w-2/3">
                  {el.exercises.length} exercises,{" "}
                  {totalDurations(el.exercises)} sec
                </p>
                <button
                  onClick={() => {
                    navigate("/exercises/" + el._id);
                  }}
                >
                  <button className=" m-auto bg-white text-black rounded-lg py-1 px-3">
                    {" "}
                    Go Train{" "}
                  </button>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Programs;
