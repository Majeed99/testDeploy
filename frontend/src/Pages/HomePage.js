import header from "../images/background.jfif";

import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="relative flex justify-center">
        <h1
          style={{ textShadow: "2px 2px 5px  #000000" }}
          className="absolute text-center top-1/4 md:top-1/3 text-white  px-10 text-md md:text-3xl lg:text-4xl xl:text-5xl"
        >
          “Take care of your body. It’s the only place you have to live”
          <br />- Jim Rohn
        </h1>
        <img src={header} alt="" />
      </div>
      <div className=" bg-gray-700 m-0 pt-1">
        <h1 className="text-xl text-white  m-auto w-max border-2  transform -skew-x-12 py-1 lg:py-2 px-4 lg:px-10  my-3">
          <b>Our Programs</b>
        </h1>
        {/*========= FIRST PART =========*/}
        <div className="flex px-10 py-3 text-white flex-col md:flex-row lg:px-28 xl:px-40 bg-gray-700">
          <div className="lg:w-1/2 md:px-2 flex items-center">
            <img
              className="transform  -skew-x-12"
              src="https://www.cnet.com/a/img/sRejNDr7D67rMcvwI11v6xrJcho=/940x0/2019/11/12/e66cc0f3-c6b8-4f6e-9561-e23e08413ce1/gettyimages-1002863304.jpg"
              alt=""
            />
          </div>
          <div className="pt-2 flex flex-col justify-center font-mono lg:w-1/2 md:px-2 md:text-xl lg:text-2xl xl:text-3xl items-center text-center">
            <h1 className="font-bold">Beginners</h1>
            <hr className="text-white h-1 w-3/4" />
            Your first step is learning the basics of how to set up a workout
            program.
          </div>
        </div>{" "}
      </div>
      {/*========= SECOND PART =========*/}
      <div className="flex  px-10 py-3 text-white flex-col md:flex-row-reverse  lg:px-28 xl:px-40 ">
        <div className="lg:w-1/2 md:px-2 flex items-center ">
          <img
            className="transform  skew-x-12"
            src="https://www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?quality=86&strip=all"
            alt=""
          />
        </div>
        <div className=" flex-col pt-2 flex justify-center font-mono lg:w-1/2 md:px-2 md:text-xl lg:text-2xl xl:text-3xl items-center text-center">
          <h1 className="font-bold">Intermediate</h1>
          <hr className="text-white h-1 w-3/4" />
          If you've been working out consistently for the last six months or
          more, then you're most likely at an intermediate level.
        </div>
      </div>
      {/*========= THIRD PART =========*/}
      <div className="flex px-10 py-3 text-white flex-col md:flex-row lg:px-28 xl:px-40 bg-gray-700">
        <div className="lg:w-1/2 md:px-2 flex items-center">
          <img
            className="transform  -skew-x-12"
            src="https://img.dtcn.com/image/themanual/difficult-doesnt-mean-impossible-800x800.jpg"
            alt=""
          />
        </div>
        <div className="pt-2 flex flex-col justify-center font-mono lg:w-1/2 md:px-2 md:text-xl lg:text-2xl xl:text-3xl items-center text-center">
          <h1 className="font-bold">Experts</h1>
          <hr className="text-white h-1 w-3/4" />
          When workout becomes part of your daily routine, you are now a class
          of experts.
        </div>
      </div>
      <div className=" py-3">
        <h1 className="text-xl text-white m-auto w-max border-2  transform -skew-x-12 py-1 lg:py-2 px-4 lg:px-10 my-3">
          <b>Contact Us</b>
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 text-center justify-start text-white p-1 ">
            <b>Abdulmajeed</b>
            <a
              className="flex justify-center items-center hover:bg-gray-600 p-1 "
              href="https://www.linkedin.com/in/abdulmajeed-alduaifi"
            >
              <BsLinkedin className="mr-0" />{" "}
              <span className="pl-2"> Contact me via linkedIn</span>
            </a>
            <a
              className="flex justify-center items-center hover:bg-gray-600 p-1"
              href="https://github.com/Majeed99"
            >
              <AiFillGithub className="mr-0" />{" "}
              <span className="pl-2"> Visit my Github</span>
            </a>
          </div>
          <hr className="h-1 w-3/4 m-auto md:hidden" />
          <div className="md:w-1/2 text-center justify-start text-white p-1 ">
            <b>Abdullah</b>
            <a
              className="flex justify-center items-center hover:bg-gray-600 p-1"
              href="https://www.linkedin.com/in/abdullah-alsabi/"
            >
              <BsLinkedin className="mr-0" />{" "}
              <span className="pl-2"> Contact me via linkedIn</span>
            </a>
            <a
              className="flex justify-center items-center hover:bg-gray-600 p-1"
              href="https://github.com/Abdullah-Alsabi"
            >
              <AiFillGithub className="mr-0" />{" "}
              <span className="pl-2"> Visit my Github</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-white p-2 text-center">
        © 2021 WorkOut ,All Rights Reserved
      </div>
    </div>
  );
}

export default HomePage;
