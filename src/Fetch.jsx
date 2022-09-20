import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  function fetchData() {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex h-[100vh] bg-slate-900 flex-col justify-center items-center p-8">
      <div className="mb-[2rem] flex flex-col items-center">
        <h1 className="text-white text-5xl mb-2 text-bold font-mono">
          RANDOM TEXT GENERATOR
        </h1>
        <img
          className="w-[15rem] h-[15rem]  "
          src="https://media.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif"
          alt=""
        />
      </div>
      <div className="bg-[#a1cbd24c] flex flex-col items-center gap-10 p-10 rounded-lg  border-r-4 border-t-4 border-white">
        <h1 className="text-4xl font-bold    font-mono">{`Title :- ${posts.title}`}</h1>
        <p className="text-lg font-semibold font-mono">{`Body :- ${posts.body}`}</p>
        <button
          className=" w-[8rem] h-[3rem] rounded-lg bg-black text-white hover:border-white hover:border-2 hover:text-slate-400"
          onClick={fetchData}
        >
          Click to fetch
        </button>
      </div>
      <div>
        <footer>
          <div className=" bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 left-0 text-center w-full bottom-0 fixed text-white border-t-2 border-slate-400 py-2">
            <p>
              Made with Love 💖 by

              <span className="underline  hover:text-slate-400">
                <a href="https://github.com/Utkarsh575/"> Utkarsh575</a>
              </span>{" "}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Fetch;
