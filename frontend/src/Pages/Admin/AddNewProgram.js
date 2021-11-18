import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../admin.css";
function AddNewProgram() {
  const navigate = useNavigate();
  const [Title, setTitle] = useState("");
  const [Link, setLink] = useState("");
  const [inputs, setInputs] = useState([]);

  function handelNewForm() {
    setInputs([...inputs, { name: "", duration: "", link: "" }]);
  }
  function handelDeleteForm(element, i) {
    setInputs(inputs.filter((item, index) => index !== i));
  }
  function submitProgram() {
    const data = {
      title: Title,
      exercises: inputs,
      background: Link,
    };
    axios
      .post("http://localhost:3001/programs/add", data)
      .then((res) => {
        navigate("/admin");
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }

  return (
    <div className="min-h-full flex flex-col p-2 pt-4 md:p-10 lg:p-10 xl:p-10">
      <div className="container  max-w-lg m-auto  flex flex-1 flex-col items-center justify-center px-20 ">
        <div className="bg-white flex flex-col px-6 py-8 rounded shadow-md text-black cardWidth  ">
          <form
            className="justify-center flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              submitProgram();
            }}
          >
            <h1 className="mb-8 text-3xl text-center">Add New Program</h1>
            <hr className="pb-5" />
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="title"
              placeholder="Program Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              className="block border border-gray-400 w-full p-3 rounded mb-4"
              name="Image"
              placeholder="Background Image Link"
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
            <button
              type="button"
              className=" border border-gray-400  bg-blue-700 min-w-max w-20 m-auto rounded-lg text-white mb-4 p-1 "
              onClick={handelNewForm}
            >
              <h1 className="text-3xl font-extrabold  items-center">+</h1>
            </button>

            {inputs.map((element, i) => {
              return (
                <div className="flex lg:flex-row flex-col w-full ">
                  <div className="lg:w-11/12 w-full">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                      <input
                        type="text"
                        className="block border  border-gray-400 w-full p-3 rounded mb-4"
                        name="p1_counter"
                        placeholder="Exercisers Name"
                        value={element.name}
                        onChange={(e) => {
                          element.name = e.target.value;
                          setInputs([...inputs]);
                        }}
                      />
                      <input
                        type="text"
                        className="block border border-gray-400 w-full p-3 rounded mb-4"
                        name="p2_counter"
                        placeholder="Exercisers duration"
                        value={element.duration}
                        onChange={(e) => {
                          element.duration = parseInt(e.target.value);
                          setInputs([...inputs]);
                        }}
                      />
                      <input
                        type="text"
                        className="block border border-gray-400 w-full p-3 rounded mb-4"
                        name="p3_counter"
                        placeholder="Exercisers Image Link"
                        value={element.link}
                        onChange={(e) => {
                          element.link = e.target.value;
                          setInputs([...inputs]);
                        }}
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/12 w-full  lg:ml-2 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        handelDeleteForm(element, i);
                      }}
                      className="border border-gray-400 w-20 lg:w-full bg-red-700 rounded-lg text-white mb-4 p-1"
                    >
                      <h1 className="text-3xl font-extrabold  items-center">
                        -
                      </h1>
                    </button>
                  </div>
                </div>
              );
            })}
            <input
              type="submit"
              value="Submit"
              className="mt-2 cursor-pointer w-full bg-green-500 font-bold  text-white rounded-lg py-2 px-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewProgram;
