import React from "react";
import "../App.css";

const Quiz = () => {
  const matList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900  px-5">
      <div className="w-full">
        <nav className="flex items-center justify-between mx-12 mt-5 text-gray-900 dark:text-white">
          <h1 className="py-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
            TechTwist
          </h1>
          <div className="flex space-x-5">
            <h1 className="py-2 text-xl">
              Username:{" "}
              <span className="font-bold text-2xl">theboringbuilder</span>
            </h1>
            <h1 className="py-2 text-xl">
              Score: <span className="font-bold text-2xl">🔥</span>
            </h1>
          </div>
        </nav>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col items-start justify-start p-5 ">
          <div className="flex">
            {matList.map((n) => (
              <div key={n} className="mat">
                {n}
              </div>
            ))}
          </div>
          <div className="flex">
            <div className="mat">1</div>

            <input
              type="text"
              maxLength="1"
              className="qin"
              placeholder="01"
              id="0101"
            />
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />

            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
          </div>
          <div className="flex">
            <div className="mat">2</div>
            <input
              type="text"
              maxLength="1"
              className="qin"
              placeholder="X"
              id="0201"
            />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">3</div>
            <input
              type="text"
              maxLength="1"
              className="qin"
              placeholder="X"
              id="0301"
            />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
          </div>
          <div className="flex">
            <div className="mat">4</div>
            <input
              type="text"
              maxLength="1"
              className="qin"
              placeholder="X"
              id="0401"
            />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">5</div>
            <input
              type="text"
              maxLength="1"
              className="qin"
              placeholder="X"
              id="0501"
            />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
          </div>
          <div className="flex">
            <div className="mat">6</div>
            <input
              type="text"
              maxLength="1"
              className="qin"
              placeholder="X"
              id="0601"
            />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
            <div className="bl"></div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
          </div>
          <div className="flex">
            <div className="mat">7</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">1</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <div className="bl"></div>
          </div>
        </div>
        <div className="flex flex-col bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="max-w-2xl">
            <div className="overflow-y-auto max-h-[512px]">
              {" "}
              {/* max-h-80 sets a max height for the scrollable box */}
              <h1 className="text-3xl font-bold text-white py-3">Down</h1>
              <h1 className="text-base text-white py-1.5">
                <strong>01.</strong> A popular web framework for Python
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>02.</strong> The smallest unit of digital information
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>03.</strong> A versatile and high-level programming
                language known for its simplicity and readability
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>04.</strong> An open-source machine learning framework
                developed by Google
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>05.</strong> Explanatory notes or comments added to a
                text
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>06.</strong> A stylesheet language used for describing
                the presentation of web pages
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>07.</strong> A distributed version control system used
                for tracking changes in code
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>08.</strong> A widely-used web application framework for
                Node.js, known for its simplicity and robust features, often
                used to build web applications and APIs
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>09.</strong> An anonymous, inline function in Python,
                often used for short, simple operations
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>10.</strong> The acronym for the practice of improving a
                website's visibility on search engines
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>11.</strong> A micro web framework for Python used for
                building web applications
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>12.</strong> A popular JavaScript library for building
                user interfaces in web applications
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>13.</strong> A high-level programming language used for
                writing smart contracts on the Ethereum blockchain
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>14.</strong> A built-in data structure in Python used to
                store key-value pairs
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>15.</strong> A popular social media platform founded by
                Mark Zuckerberg
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>16.</strong> A popular web development stack that
                includes MongoDB, Express.js, React, and Node.js
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>17.</strong> A statically typed programming language
                used for developing Android applications and other software
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>18.</strong> An open-source NoSQL database management
                system known for its flexibility and scalability
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>19.</strong> The standard markup language used to create
                web pages
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>20.</strong> A character encoding standard that
                represents text in computers and other devices
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>21.</strong> A data structure in Python that is used to
                store an ordered collection of elements
              </h1>
              <h1 className="text-3xl font-bold text-white pt-6 pb-3">
                Across
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>01.</strong> A popular web framework for Python
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>02.</strong> The smallest unit of digital information
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>03.</strong> A versatile and high-level programming
                language known for its simplicity and readability
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>04.</strong> An open-source machine learning framework
                developed by Google
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>05.</strong> Explanatory notes or comments added to a
                text
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>06.</strong> A stylesheet language used for describing
                the presentation of web pages
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>07.</strong> A distributed version control system used
                for tracking changes in code
              </h1>
              <h1 className="text-base text-white py-1.5">
                <strong>08.</strong> A widely-used web application framework for
                Node.js, known for its simplicity and robust features, often
                used to build web applications and APIs
              </h1>
            </div>
          </div>

          <div className="mx-auto max-w-md pt-6">
            <button
              type="submit"
              class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit Answers & Check
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
