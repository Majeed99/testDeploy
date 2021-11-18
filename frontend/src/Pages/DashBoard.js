import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosFitness } from "react-icons/io";
import { GiWaterBottle } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { GiWeightScale } from "react-icons/gi";
import GaugeIcon from "../images/Gauge-icon.svg";
import GaugeIconImg from "../images/gauge-icon-27.jpg";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  let [logedUserData, setlogedUserData] = useState({});
  let [counterWater, setcounterWater] = useState(0);
  let [BMI, setBMI] = useState();
  const [BMIText, setBMIText] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    let user = JSON.parse(atob(token));
    axios
      .get(`http://localhost:3001/users/userData/${user._id}`)
      .then((res) => {
        setlogedUserData(res.data);
        if (res.data.weight === 0 || res.data.height === 0) {
          setBMI(0);
        } else {
          let bmiValue =
            res.data.weight / (res.data.height / 100) / (res.data.height / 100);

          if (bmiValue == 0) setBMIText("your weight is zero ");
          if (bmiValue < 18.5) {
            setBMIText("Underweight");
          }
          if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setBMIText("Normal weight");
          }
          if (bmiValue >= 25 && bmiValue < 29.9) {
            setBMIText("Overweight");
          }
          if (bmiValue >= 30) {
            setBMIText("Obesity");
          }
          setBMI(Math.round(bmiValue * 100) / 100);
        }
      })
      .catch((err) => {
        if (err) throw err;
      });

    setlogedUserData(user);
    if (user == null || user.type !== "user") {
      navigate("/noAccess");
    }
  }, []);

  function hundlePlusWater() {
    setcounterWater(++counterWater);
  }
  function hundleMinusWater() {
    setcounterWater(--counterWater);
  }

  return (
    <div className="grid grid-cols  gap-4 p-4 pt-10 lg:grid-cols-2 xl:grid-cols-3 xl:px-40">
      <div className="flex flex-row   p-4 justify-around items-center h-36 text-center shadow-lg rounded bg-gradient-to-r from-green-400 to-blue-500  ">
        <div className="w-2/6 flex justify-center">
          <IoIosFitness className="text-green-700 text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Program 1 </h2>
          <p className="text-white">{logedUserData.program1} Times</p>
        </div>
      </div>
      <div className="flex flex-row  p-4 justify-around items-center  h-36 text-center shadow-md rounded bg-gradient-to-r from-yellow-300 to-primary">
        <div className="w-2/6 flex justify-center">
          <IoIosFitness className="text-primary text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Program 2 </h2>
          <p className="text-white">{logedUserData.program2} Times</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-red-400 to-red-700">
        <div className="w-2/6 flex justify-center">
          <IoIosFitness className="text-red-700 text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Program 3 </h2>
          <p className="text-white">{logedUserData.program3} Times</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-green-300 to-blue-700">
        <div className="w-2/6 flex justify-center">
          <GiWaterBottle className="text-blue-700 text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Water </h2>
          <div className="flex flex-row justify-center items-center">
            <button
              className=" border border-gray-400 bg-blue-700 w-1/4 m-auto rounded text-white mb-4 p-1"
              onClick={hundlePlusWater}
            >
              +
            </button>
            <p className="text-white">{counterWater} cups</p>
            <button
              onClick={hundleMinusWater}
              className="border border-gray-400 bg-red-700 w-1/4 m-auto rounded text-white mb-4 p-1"
            >
              -
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-pink-400 to-gray-500">
        <div className="w-2/6 flex justify-center">
          <GiBodyHeight className="text-primary text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Height </h2>
          <p className="text-white">{logedUserData.height} cm</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-pink-400 to-gray-500">
        <div className="w-2/6 flex justify-center">
          <FaWeight className="text-primary text-5xl text-left" />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> Weight </h2>
          <p className="text-white">{logedUserData.weight} kg</p>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-around items-center h-36 text-center shadow-md rounded bg-gradient-to-r from-red-400 to-red-300">
        <div className="w-2/6 flex justify-center">
          <img
            className=" h-12 w-12 text-left"
            src={GaugeIconImg}
            alt="GaugeIcon"
          />
        </div>
        <div className="w-4/6">
          <h2 className="text-xl text-white font-medium mt-2"> BMI </h2>

          <p className="text-white">{BMI}</p>
          <p className="text-white">{BMIText}</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
