import React from "react";
import "../App.css";

const Quiz = () => {
  const matList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="flex flex-col items-center justify-center">
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
  );
};

export default Quiz;
