import React from "react";
import "../App.css";

const Quiz = () => {
  const matList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex justify-between px-5 items-center">
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
            <input type="text" maxLength="1" className="qin" placeholder="X" />
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
            <input type="text" maxLength="1" className="qin" placeholder="X" />
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
            <input type="text" maxLength="1" className="qin" placeholder="X" />
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
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
            <div className="bl"></div>
          </div>
          <div className="flex">
            <div className="mat">4</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
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
            <div className="mat">5</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
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
            <div className="mat">6</div>
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
            <input type="text" maxLength="1" className="qin" placeholder="X" />
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
      <div>
        <button
          type="submit"
          class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit Answers & Check
        </button>
      </div>
    </section>
  );
};

export default Quiz;