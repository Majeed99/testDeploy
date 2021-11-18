import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./Pages.css";

function Profile() {
  const navigate = useNavigate();
  const [logedUserData, setlogedUserData] = useState();
  const [loading, setloading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  //get data
  useEffect(() => {
    const token = localStorage.getItem("Token");
    let user = JSON.parse(atob(token));
    axios
      .get(`http://localhost:3001/users/userData/${user._id}`)
      .then((res) => {
        setlogedUserData(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setDate(res.data.birthDate);
        setWeight(res.data.weight);
        setHeight(res.data.height);

        console.log(res.data);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }, []);

  // loading component
  // if (loading) return <div className="text-white">LOADING ...</div>;

  // hundle date
  // let userBirthDate = logedUserData.birthDate;

  function stringToDate(_date, _format, _delimiter) {
    let arr = _date.split("T");
    let dateWithOutTime = arr[0];
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var dateItems = dateWithOutTime.split(_delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(
      dateItems[yearIndex],
      month,
      dateItems[dayIndex]
    );
    // console.log(formatedDate);
    return formatedDate;
  }
  let dateAfterConvert = stringToDate(date, "yyyy-mm-dd", "-");

  let formatedDate =
    dateAfterConvert.getFullYear() +
    "-" +
    (dateAfterConvert.getMonth() + 1) +
    "-" +
    dateAfterConvert.getDate();

  //end of hundle date

  //hundle Edit btn
  function hundleEdit() {
    let elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
  }

  function hundleNameChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function hundleEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  function hundleDateChange(e) {
    console.log(e.target.value);
    setDate(e.target.value);
  }
  function hundleHeightChange(e) {
    console.log(e.target.value);
    setHeight(e.target.value);
  }
  function hundleWeightChange(e) {
    console.log(e.target.value);
    setWeight(e.target.value);
  }
  //hundle update btn
  function hundleUpdate() {
    let elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
    const data = {
      name: name,
      email: email,
      birthDate: date,
      height: height,
      weight: weight,
    };
    console.log(data);

    const token = localStorage.getItem("Token");
    let user = JSON.parse(atob(token));
    axios
      .put(`http://localhost:3001/users/edit/${user._id}`, data)
      .then((res) => {
        navigate("/profile");
        console.log(res);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }

  // console.log(logedUserData._id);

  // function return
  return (
    <div className=" min-h-full flex flex-col p-2 pt-4 md:p-10 lg:p-10 xl:p-10">
      <div className="container  m-auto  flex flex-1 flex-col items-center justify-center px-20 ">
        <div className="bg-white flex flex-col px-6 py-8 rounded shadow-md text-black cardWidth  ">
          <div className="flex flex-row justify-between pb-5">
            <h1 className=" text-3xl text-center">User Profile</h1>
            <button
              onClick={hundleEdit}
              type="submit"
              className="  w-4/12 text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none "
            >
              {" "}
              Edit
            </button>
          </div>
          <hr className="pb-5" />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Name"
            defaultValue={name}
            onChange={hundleNameChange}
            placeholder="Abdullah"
            disabled
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Email"
            defaultValue={email}
            onChange={hundleEmailChange}
            placeholder="Email"
            disabled
          />

          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="date"
            value={formatedDate}
            onChange={hundleDateChange}
            placeholder={"yyyy-mm-dd"}
            disabled
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="height"
            value={height}
            onChange={hundleHeightChange}
            placeholder={"180" + " cm"}
            disabled
          />
          <input
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="weight"
            value={weight}
            onChange={hundleWeightChange}
            placeholder={"80" + " kg"}
            disabled
          />
          <div className="text-center">
            <button
              onClick={hundleUpdate}
              type="submit"
              className="w-auto text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none my-1 lg:w-8/12 "
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
