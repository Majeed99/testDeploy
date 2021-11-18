import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import { BsPauseCircleFill } from "react-icons/bs";
import axios from "axios";




function Exercises() {
  const [ExercisesName, setExercisesName] = useState("");
  const [ExercisesDuration, setExercisesDuration] = useState(0);
  const [ExercisesGif, setExercisesGif] = useState();
  //get the data
  const [BtnStatus, setBtnStatus] = useState("block");
  const [secFlag, setSecFlag] = useState("inline");

  const [programs, setPrograms] = useState([]);
  const RestObj = {
    name: "Rest",
    duration: 15,
    link: "https://lh3.googleusercontent.com/proxy/F0_6rPop8sEdbwUpjMZSSzLR7CV9n0mzZjOggPwpVavaf0OhD6nhTyLgggjAwjCmZ16aNhoF2FWLm7_1Gkw2P6hK-nwpTn1cELEXKrA",
  };

  const params = useParams();

  function Timer(i) {
    let invervalRest;
    let inverval = setInterval(() => {
      if (ExercisesDuration >= 1)
        setExercisesDuration((ExercisesDuration) => ExercisesDuration - 1);
      else clearInterval(inverval);
    }, 1000);
    let counter = i + 1 < programs.exercises.length ? 16000 : 0;
    // let RestTime = i + 1 < programs.exercises.length ? 1000 : 0;
    setTimeout(() => {
      clearInterval(inverval);
      setExercisesName(RestObj.name);
      if (i + 1 < programs.exercises.length)
        setExercisesDuration(RestObj.duration);
      else {
        setExercisesDuration("Done");
        setSecFlag("none");
      }

      setExercisesGif(RestObj.link);
      invervalRest = setInterval(() => {
        if (ExercisesDuration >= 1)
          setExercisesDuration((ExercisesDuration) => ExercisesDuration - 1);
        else clearInterval(invervalRest);
      }, 1000);
    }, ExercisesDuration * 1000);

    // **********************

    setTimeout(() => {
      // ---
      let id = i + 1;
      clearInterval(invervalRest);

      if (id < programs.exercises.length) {
        setExercisesName(programs.exercises[id].name);
        setExercisesDuration(programs.exercises[id].duration);
        setExercisesGif(programs.exercises[id].link);
        Timer(id);
      } else return clearInterval(inverval);
    }, ExercisesDuration * 1000 + counter);
  }
  useEffect(() => {
    console.log(params.id);
    axios
      .get(`http://localhost:3001/programs/getProgram/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setPrograms(res.data);
        setExercisesName(res.data.exercises[0].name);
        setExercisesDuration(res.data.exercises[0].duration);
        setExercisesGif(res.data.exercises[0].link);
      })

      .catch((err) => {
        if (err) console.log(err);
      });
  }, []);

  // End of timer function
  function handelIncrement() {
    const token = localStorage.getItem("Token");
    let user = JSON.parse(atob(token));
    if (programs.title === "Beginners") {
      axios
        .put(`http://localhost:3001/users/incProgram/${user._id}/program1`)
        .then(() => {})
        .catch((err) => {
          if (err) console.log(err);
        });
    } else if (programs.title === "intermediate") {
      axios
        .put(`http://localhost:3001/users/incProgram/${user._id}/program2`)
        .then(() => {})
        .catch((err) => {
          if (err) console.log(err);
        });
    } else if (programs.title === "Experts") {
      axios
        .put(`http://localhost:3001/users/incProgram/${user._id}/program3`)
        .then(() => {})
        .catch((err) => {
          if (err) console.log(err);
        });
    }
  }
  return (
    <div className="grid grid-cols-1 text-center p-4  mt-5  m-auto lg:w-5/12 xl:w-5/12 xl:px-12 ">
      <div className="h-1/6 flex flex-row justify-between items-center  ">
        <h1 className="text-white text-lg text-center">{programs.title}</h1>
        <p className="text-white">15 min</p>
      </div>
      <hr className=" h-1 w-1 min-w-full mt-5" />
      <div className="flex flex-col justify-center items-center  mt-4  bg-gray-600">
        <img className="p-4 " src={ExercisesGif} alt="Squats" />
        <p className="text-white font-semibold text-2xl">{ExercisesName} </p>
        <span className=" bg-gray-100 rounded-full w-max p-4 mt-5 mb-5 font-semibold text-2xl text-gray-700">
          <span className="flex justify-center items-center  w-10 h-10 lg:w-16  lg:h-16">
            {ExercisesDuration}{" "}
            <span className="ml-1" style={{ display: secFlag }}>
              {" "}
              sec
            </span>
          </span>
        </span>
      </div>
      <button
        style={{ display: BtnStatus }}
        onClick={() => {
          Timer(0);
          setBtnStatus("none");
          handelIncrement();
        }}
        className="text-white bg-primary p-2 mt-5 rounded"
        type="submit"
      >
        Start
      </button>
    </div>
  );
}

export default Exercises;
