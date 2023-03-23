import React, { useEffect, useState } from "react";
import axios from "axios";
import RickDada from "./assets/rickroll-roll.gif";
const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  function fetchData() {
    const newIndex = Math.floor(Math.random() * colors.length);
    setIndex(newIndex);
    axios
      .get(url)
      .then((response) => {
        // console.log(response);
        console.log(
          response.data[Math.floor(Math.random() * response.data.length)]
        );
        setPosts(
          response.data[Math.floor(Math.random() * response.data.length)]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [colors, SetColors] = useState([
    "bg-red-100",
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
    "bg-lime-100",
    "bg-lime-200",
    "bg-lime-300",
    "bg-lime-400",
    "bg-lime-500",
    "bg-lime-600",
    "bg-lime-700",
    "bg-lime-800",
    "bg-lime-900",
    "bg-amber-100",
    "bg-amber-200",
    "bg-amber-300",
    "bg-amber-400",
    "bg-amber-500",
    "bg-amber-600",
    "bg-amber-700",
    "bg-amber-800",
    "bg-amber-900",
    "bg-green-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
    "bg-green-900",
    "bg-teal-100",
    "bg-teal-200",
    "bg-teal-300",
    "bg-teal-400",
    "bg-teal-500",
    "bg-teal-600",
    "bg-teal-700",
    "bg-teal-800",
    "bg-teal-900",
  ]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={`flex h-full py-10 justify-center items-center  bg-opacity-30 backdrop-filter backdrop-blur-lg ${colors[index]}`}
    >
      <div className="max-w-6xl rounded-2xl overflow-hidden shadow-lg text-white  backdrop-blur-lg scale-[95%] position-fixed ">
        <div className="py-6 mb-16">
          <h1 className="text-center text-3xl font-bold  animate-bounce">
            HEY THERE GDSC SRM ✨😋{" "}
          </h1>
          <nav className="">
            <div className="px-8 px-14">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center text-lg">
                  <a href="#"></a>
                </div>

                <div className="flex font-m items-center hidden md:flex space-x-12 items-center mt-2">
                  <a href="#">PLEASE🤲</a>
                  <a href="">RECRUIT</a>
                  <a href="https://www.instagram.com/utkarsh575_">ME</a>
                  <a href="">WANTED</a>
                  <a href="">TO JOIN</a>
                  <a href="">SINCE 8th STD 🥲</a>
                </div>
                <div className="md:flex space-x-8 items-center">
                  <a href="https://www.github.com/utkarsh575">GITHUB</a>
                  <a href="https://www.linkedin.com/in/utkarsh575">
                    <button className="bg-transparent font-m bg-white text-gray-800  py-1 px-3  rounded-lg">
                      Linkedin
                    </button>
                  </a>
                </div>
                <div></div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex justify-center mx-auto items-center px-6">
          <div>
            <div className="mt-36 pb-12 px-8">
              <h2 className="text-5xl font-semibold">
                POST TITLE:- {posts.title}
              </h2>
              <p className="text-left py-12 font-light">
                POST BODY:- {posts.body}
              </p>
              <div className="flex justify-center px-6 mx-auto space-x-12">
                <button
                  onClick={fetchData}
                  className="bg-transparent font-m bg-white text-gray-900  h-12 w-24 rounded-xl"
                >
                  {" "}
                  Fetch
                </button>
              </div>
              <div>
                <div className="flex items-center space-x-12 px-12 mx-auto pt-14 pb-8"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-4 border-dashed  rounded-md border-white">
              <img src={RickDada} width="500" height="500"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
