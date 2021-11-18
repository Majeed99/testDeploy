import "./NavBar_style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function NavBar(props) {
  const [flag, setFlag] = useState("none");
  const [Singin, setSingin] = useState();
  const [SignOut, setSignOut] = useState();
  useEffect(() => {
    let Token = localStorage.getItem("Token");
    // console.log(Token);
    // console.log(props.auth);
    if (Token) {
      setSingin("none");
      setSignOut("block");
    } else {
      setSingin("block");
      setSignOut("none");
    }
  });
  function handelSignOut() {
    localStorage.clear();
    setSignOut("none");
    setSingin("block");
  }
  return (
    <div>
      <div className="flex bg-gray-900 text-white justify-between px-4 py-2">
        <button
          onClick={() => {
            flag === "none" ? setFlag("block") : setFlag("none");
          }}
          className="p-1"
        >
          <svg
            width="37"
            height="27"
            viewBox="0 0 37 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="37" height="5" rx="2.5" fill="white" />
            <rect y="22" width="37" height="5" rx="2.5" fill="white" />
            <rect y="11" width="27" height="5" rx="2.5" fill="white" />
          </svg>
        </button>
        <Link
          style={{ display: Singin }}
          className="text-lg font-bold bg-green-700 px-2 rounded-md "
          to="/signin"
        >
          sign in
        </Link>
        <Link
          style={{ display: SignOut }}
          className="text-lg font-bold bg-red-700 px-2 rounded-md"
          to="/"
          onClick={() => {
            handelSignOut();
          }}
        >
          sign out
        </Link>
      </div>
      {/* SIDE BAR */}
      <div className="flex flex-col ">
        <div
          style={{ display: flag }}
          className="sideBar z-20 h-screen block text-white bg-opacity-95 bg-gray-900 w-1/2 fixed top-0 text-center md:w-1/3 lg:w-1/4 xl:w-1/6 rounded-tr-3xl rounded-br-3xl"
        >
          <button
            onClick={() => {
              setFlag("none");
            }}
            className="p-5 block opacity-95"
          >
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.30939 1.45464C3.37643 0.449468 5.04821 0.373073 6.20957 1.27641L17.9746 10.4275C19.2588 11.4264 20.4114 12.5749 21.4065 13.847L30.8898 25.9707C31.7868 27.1175 31.6616 28.7329 30.598 29.7349V29.7349C29.5721 30.7012 27.9772 30.808 26.8227 29.9877L14.5965 21.3004C12.7442 19.9843 11.1404 18.3671 9.8559 16.5205L1.92032 5.11188C1.12011 3.96147 1.28405 2.42053 2.30939 1.45464V1.45464Z"
                fill="white"
              />
              <path
                d="M1.45464 29.9515C0.449468 28.8845 0.373073 27.2127 1.27641 26.0514L10.4275 14.2864C11.4264 13.0022 12.5749 11.8495 13.847 10.8544L25.9707 1.37119C27.1175 0.474147 28.7329 0.599372 29.7349 1.66298V1.66298C30.7012 2.68879 30.808 4.28373 29.9877 5.4382L21.3004 17.6644C19.9843 19.5167 18.3671 21.1206 16.5205 22.405L5.11188 30.3406C3.96147 31.1408 2.42053 30.9769 1.45464 29.9515V29.9515Z"
                fill="white"
              />
            </svg>
          </button>
          <Link
            onClick={() => setFlag("none")}
            className="block hover:bg-gray-600 py-3 "
            to="/programs"
          >
            PROGRAMS
          </Link>
          <Link
            onClick={() => setFlag("none")}
            className="block hover:bg-gray-600 py-3 "
            to="/profile"
          >
            PROFILE
          </Link>
          <Link
            onClick={() => setFlag("none")}
            className="block hover:bg-gray-600 py-3 "
            to="/Dashboard"
          >
            DASHBOARD
          </Link>
          <Link
            onClick={() => setFlag("none")}
            className="block hover:bg-gray-600 py-3 "
            to="/admin"
          >
            ADMIN
          </Link>
        </div>
        <div
          className="h-screen block w-full bg-transparent fixed "
          style={{ display: flag }}
          onClick={() => {
            setFlag("none");
          }}
        ></div>
      </div>
    </div>
  );
}

export default NavBar;
