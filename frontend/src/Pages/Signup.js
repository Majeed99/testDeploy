import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import "./Pages.css";
function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordTwo, setPasswordTwo] = useState("");
  let [month, setMonth] = useState();
  let [day, setDay] = useState();
  let [year, setYear] = useState();

  const navigate = useNavigate();

  function hundleNameChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  function hundleEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  function hundlePasswordChange(e) {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  function hundlePasswordTwoChange(e) {
    console.log(e.target.value);
    setPasswordTwo(e.target.value);
  }
  function hundleMonthChange(e) {
    console.log(e.target.value);
    setMonth(e.target.value);
  }
  function hundleDayChange(e) {
    console.log(e.target.value);
    setDay(e.target.value);
  }
  function hundleYearChange(e) {
    console.log(e.target.value);
    setYear(e.target.value);
  }

  function hundleRgister(e) {
    let d = new Date(year, month - 1, day + 1);
    console.log(d);
    e.preventDefault();
    if (password === passwordTwo && true) {
      let user = {
        name: name,
        email: email,
        password: password,
        birthDate: d,
      };
      Axios.post("http://localhost:3001/users/add", user)
        .then((res) => {
          console.log(res.data);
          navigate("/signin");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="bg-gray-800  pt-32 flex flex-col">
      <div className="container  max-w-lg mx-auto flex flex-1 flex-col items-center justify-center px-2 ">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            onChange={hundleNameChange}
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Name"
            placeholder="Name"
          />
          <input
            onChange={hundleEmailChange}
            type="text"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="Email"
            placeholder="Email"
          />
          <input
            onChange={hundlePasswordChange}
            type="password"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={hundlePasswordTwoChange}
            type="password"
            className="block border border-gray-400 w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <div className="grid grid-cols-3 gap-2">
            <select
              className="block border border-gray-400 w-full p-3 rounded mb-4  "
              name="monthes"
              id="monthes"
              onChange={hundleMonthChange}
            >
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </select>
            <input
              onChange={hundleDayChange}
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="day"
              placeholder="day"
            />
            <input
              onChange={hundleYearChange}
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="year"
              placeholder="year"
            />
          </div>
          <button
            onClick={hundleRgister}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700  focus:outline-none my-1"
          >
            Create Account
          </button>
          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/signin"
              className="text-gray-500 uppercase text-xs hover:text-gray-400 underline "
            >
              Do you have an account?
            </Link>
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
