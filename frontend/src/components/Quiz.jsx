import React from "react";
import "../App.css";

const Quiz = () => {
  const matList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex justify-evenly px-5 items-center">
      <div>
        <div className="flex flex-col items-start justify-start p-5 ">
          <div className="py-2 text-5xl font-semibold text-gray-900 dark:text-white">
            TechTwist
          </div>
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
      </div>
      <div className="flex flex-col ">
        <div className="max-w-2xl">
          <div className="overflow-y-auto max-h-[512px]">
            {" "}
            {/* max-h-80 sets a max height for the scrollable box */}
            <h1 className="text-2xl font-bold text-white py-2">Down</h1>
            <h1 className="text-base text-white py-1">
              01. A popular web framework for Python
            </h1>
            <h1 className="text-base text-white py-1">
              02. The smallest unit of digital information
            </h1>
            <h1 className="text-base text-white py-1">
              03. A versatile and high-level programming language known for its
              simplicity and readability
            </h1>
            <h1 className="text-base text-white py-1">
              04. An open-source machine learning framework developed by Google
            </h1>
            <h1 className="text-base text-white py-1">
              05. Explanatory notes or comments added to a text
            </h1>
            <h1 className="text-base text-white py-1">
              06. A stylesheet language used for describing the presentation of
              web pages
            </h1>
            <h1 className="text-base text-white py-1">
              07. A distributed version control system used for tracking changes
              in code
            </h1>
            <h1 className="text-base text-white py-1">
              08. A widely-used web application framework for Node.js, known for
              its simplicity and robust features, often used to build web
              applications and APIs
            </h1>
            <h1 className="text-2xl font-bold text-white">Across</h1>
            <h1 className="text-base text-white py-1">
              01. A popular web framework for Python
            </h1>
            <h1 className="text-base text-white py-1">
              02. The smallest unit of digital information
            </h1>
            <h1 className="text-base text-white py-1">
              03. A versatile and high-level programming language known for its
              simplicity and readability
            </h1>
            <h1 className="text-base text-white py-1">
              04. An open-source machine learning framework developed by Google
            </h1>
            <h1 className="text-base text-white py-1">
              05. Explanatory notes or comments added to a text
            </h1>
            <h1 className="text-base text-white py-1">
              06. A stylesheet language used for describing the presentation of
              web pages
            </h1>
            <h1 className="text-base text-white py-1">
              07. A distributed version control system used for tracking changes
              in code
            </h1>
            <h1 className="text-base text-white py-1">
              08. A widely-used web application framework for Node.js, known for
              its simplicity and robust features, often used to build web
              applications and APIs
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-md">
          <button
            type="submit"
            class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit Answers & Check
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
