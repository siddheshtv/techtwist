import React, { useState, useEffect } from "react";
import "../App.css";
import { json, useParams } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  const matList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const { uname, uid } = useParams();
  console.log("this.context:", uname);
  const userId = uid;
  const [score, setScore] = useState(null);

  localStorage.setItem("uname", uname);
  localStorage.setItem("uid", uid);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Read the contents of the 'coordinates.txt' file
      const coordinatesFile = await fetch("/coordinates.txt");
      const coordinatesText = await coordinatesFile.text();

      // Create a FormData object
      const formData = new FormData();

      // Split the coordinates text into an array of IDs
      const ids = coordinatesText.split("\n");

      console.log(coordinatesText);
      console.log(ids);

      // Iterate over the IDs and append values to the FormData
      ids.forEach(async (id) => {
        const idValue = document.getElementById(id.trim())?.value || "";
        formData.append(id.trim(), idValue);
      });

      // Append additional parameters
      formData.append("uname", uname);
      formData.append("uid", userId);
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // Send a GET request with FormData
      const response = await axios.post(
        "http://44.206.134.88:5002/getScore",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Handle the score value received from the server
        const { marks } = response.data;
        setScore(marks);
        console.log("Marks: ", marks);
      } else {
        console.error("Failed to retrieve score");
      }
    } catch (error) {
      console.error("Error sending GET request:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900  px-5">
      <div className="w-full">
        <nav className="flex items-center justify-between mx-12 mt-5 text-gray-900 dark:text-white">
          <h1 className="py-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
            TechTwist
          </h1>
          <div className="flex space-x-5">
            <a
              href="/leaderboard"
              target="_blank"
              rel="noreferrer"
              className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gradient-to-b from-orange-500 to-yellow-300 hover:opacity-80 transition duration-300"
            >
              Leaderboard
            </a>
            <h1 className="py-2 text-xl">
              Username: <span className="font-bold text-2xl">{uname}</span>
            </h1>
            <h1 className="py-2 text-xl">
              Score: <span className="font-bold text-2xl">{score}</span>
            </h1>
          </div>
        </nav>
      </div>
      <form onSubmit={handleSubmit}>
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
              <div className="bl" id="0102"></div>
              <div className="bl" id="0103"></div>
              <div className="bl" id="0104"></div>
              <div className="bl" id="0105"></div>
              <div className="bl" id="0106"></div>
              <div className="bl" id="0107"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0108"
              />
              <div className="bl" id="0109"></div>
              <div className="bl" id="0110"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0111"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0112"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0113"
              />

              <div className="bl" id="0114"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0115"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0116"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0117"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0118"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0119"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0120"
              />
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
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0202"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0203"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0204"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0205"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0206"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0207"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0208"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0209"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0210"
              />
              <div className="bl" id="0211"></div>
              <div className="bl" id="0212"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0213"
              />
              <div className="bl" id="0214"></div>
              <div className="bl" id="0215"></div>
              <div className="bl" id="0216"></div>
              <div className="bl" id="0217"></div>
              <div className="bl" id="0218"></div>
              <div className="bl" id="0219"></div>
              <div className="bl" id="0220"></div>
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
              <div className="bl" id="0302"></div>
              <div className="bl" id="0303"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0304"
              />
              <div className="bl" id="0305"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0306"
              />
              <div className="bl" id="0307"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0308"
              />
              <div className="bl" id="0309"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0310"
              />
              <div className="bl" id="0311"></div>
              <div className="bl" id="0312"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0313"
              />
              <div className="bl" id="0314"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0315"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0316"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0317"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0318"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0319"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0320"
              />
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
              <div className="bl" id="0402"></div>
              <div className="bl" id="0403"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0404"
              />
              <div className="bl" id="0405"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0406"
              />
              <div className="bl" id="0407"></div>
              <div className="bl" id="0408"></div>
              <div className="bl" id="0409"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0410"
              />
              <div className="bl" id="0411"></div>
              <div className="bl" id="0412"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0413"
              />
              <div className="bl" id="0414"></div>
              <div className="bl" id="0415"></div>
              <div className="bl" id="0416"></div>
              <div className="bl" id="0417"></div>
              <div className="bl" id="0418"></div>
              <div className="bl" id="0419"></div>
              <div className="bl" id="0420"></div>
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
              <div className="bl" id="0502"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0503"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0504"
              />
              <div className="bl" id="0505"></div>
              <div className="bl" id="0506"></div>
              <div className="bl" id="0507"></div>
              <div className="bl" id="0508"></div>
              <div className="bl" id="0509"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0510"
              />
              <div className="bl" id="0511"></div>
              <div className="bl" id="0512"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0513"
              />
              <div className="bl" id="0514"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0515"
              />
              <div className="bl" id="0516"></div>
              <div className="bl" id="0517"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0518"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0519"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0520"
              />
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

              <div className="bl" id="0602"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0603"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0604"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0605"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0606"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0607"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0608"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0609"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0610"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0611"
              />
              <div className="bl" id="0612"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0613"
              />
              <div className="bl" id="0614"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0615"
              />
              <div className="bl" id="0616"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0617"
              />
              <div className="bl" id="0618"></div>
              <div className="bl" id="0619"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0620"
              />
            </div>
            <div className="flex">
              <div className="mat">7</div>

              <div className="bl" id="0701"></div>
              <div className="bl" id="0702"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0703"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0704"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0705"
              />
              <div className="bl" id="0706"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0707"
              />
              <div className="bl" id="0708"></div>
              <div className="bl" id="0709"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0710"
              />
              <div className="bl" id="0711"></div>
              <div className="bl" id="0712"></div>
              <div className="bl" id="0713"></div>
              <div className="bl" id="0714"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0715"
              />
              <div className="bl" id="0716"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0717"
              />
              <div className="bl" id="0718"></div>
              <div className="bl" id="0719"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0720"
              />
            </div>
            <div className="flex">
              <div className="mat">8</div>

              <div className="bl" id="0801"></div>
              <div className="bl" id="0802"></div>
              <div className="bl" id="0803"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0804"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0805"
              />
              <div className="bl" id="0806"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0807"
              />
              <div className="bl" id="0808"></div>
              <div className="bl" id="0809"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0810"
              />
              <div className="bl" id="0811"></div>
              <div className="bl" id="0812"></div>
              <div className="bl" id="0813"></div>
              <div className="bl" id="0814"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0815"
              />
              <div className="bl" id="0816"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0817"
              />
              <div className="bl" id="0818"></div>
              <div className="bl" id="0819"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0820"
              />
            </div>
            <div className="flex">
              <div className="mat">9</div>

              <div className="bl" id="0901"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0902"
              />
              <div className="bl" id="0903"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0904"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0905"
              />
              <div className="bl" id="0906"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0907"
              />
              <div className="bl" id="0908"></div>
              <div className="bl" id="0909"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0910"
              />
              <div className="bl" id="0911"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0912"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0913"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0914"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0915"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0916"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="0917"
              />
              <div className="bl" id="0918"></div>
              <div className="bl" id="0919"></div>
              <div className="bl" id="0920"></div>
            </div>
            <div className="flex">
              <div className="mat">10</div>

              <div className="bl" id="1001"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1002"
              />
              <div className="bl" id="1003"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1004"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1005"
              />
              <div className="bl" id="1006"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1007"
              />
              <div className="bl" id="1008"></div>
              <div className="bl" id="1009"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1010"
              />
              <div className="bl" id="1011"></div>
              <div className="bl" id="1012"></div>
              <div className="bl" id="1013"></div>
              <div className="bl" id="1014"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1015"
              />
              <div className="bl" id="1016"></div>
              <div className="bl" id="1017"></div>
              <div className="bl" id="1018"></div>
              <div className="bl" id="1019"></div>
              <div className="bl" id="1020"></div>
            </div>
            <div className="flex">
              <div className="mat">11</div>

              <div className="bl" id="1101"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1102"
              />
              <div className="bl" id="1103"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1104"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1105"
              />
              <div className="bl" id="1106"></div>
              <div className="bl" id="1107"></div>
              <div className="bl" id="1108"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1109"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1110"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1111"
              />
              <div className="bl" id="1112"></div>
              <div className="bl" id="1113"></div>
              <div className="bl" id="1114"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1115"
              />
              <div className="bl" id="1116"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1117"
              />
              <div className="bl" id="1118"></div>
              <div className="bl" id="1119"></div>
              <div className="bl" id="1120"></div>
            </div>
            <div className="flex">
              <div className="mat">12</div>

              <div className="bl" id="1201"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1202"
              />
              <div className="bl" id="1203"></div>
              <div className="bl" id="1204"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1205"
              />
              <div className="bl" id="1206"></div>
              <div className="bl" id="1207"></div>
              <div className="bl" id="1208"></div>
              <div className="bl" id="1209"></div>
              <div className="bl" id="1210"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1211"
              />
              <div className="bl" id="1212"></div>
              <div className="bl" id="1213"></div>
              <div className="bl" id="1214"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1215"
              />
              <div className="bl" id="1216"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1217"
              />
              <div className="bl" id="1218"></div>
              <div className="bl" id="1219"></div>
              <div className="bl" id="1220"></div>
            </div>
            <div className="flex">
              <div className="mat">13</div>

              <div className="bl" id="1301"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1302"
              />
              <div className="bl" id="1303"></div>
              <div className="bl" id="1304"></div>
              <div className="bl" id="1305"></div>
              <div className="bl" id="1306"></div>
              <div className="bl" id="1307"></div>
              <div className="bl" id="1308"></div>
              <div className="bl" id="1309"></div>
              <div className="bl" id="1310"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1311"
              />
              <div className="bl" id="1312"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1313"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1314"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1315"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1316"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1317"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1318"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1319"
              />
              <div className="bl" id="1320"></div>
            </div>
            <div className="flex">
              <div className="mat">14</div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1401"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1402"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1403"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1404"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1405"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1406"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1407"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1408"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1409"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1410"
              />
              <div className="bl" id="1411"></div>
              <div className="bl" id="1412"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1413"
              />
              <div className="bl" id="1414"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1415"
              />
              <div className="bl" id="1416"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1417"
              />
              <div className="bl" id="1418"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1419"
              />
              <div className="bl" id="1420"></div>
            </div>
            <div className="flex">
              <div className="mat">15</div>

              <div className="bl" id="1501"></div>
              <div className="bl" id="1502"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1503"
              />
              <div className="bl" id="1504"></div>
              <div className="bl" id="1505"></div>
              <div className="bl" id="1506"></div>
              <div className="bl" id="1507"></div>
              <div className="bl" id="1508"></div>
              <div className="bl" id="1509"></div>
              <div className="bl" id="1510"></div>
              <div className="bl" id="1511"></div>
              <div className="bl" id="1512"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1513"
              />
              <div className="bl" id="1514"></div>
              <div className="bl" id="1515"></div>
              <div className="bl" id="1516"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1517"
              />
              <div className="bl" id="1518"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1519"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1520"
              />
            </div>
            <div className="flex">
              <div className="mat">16</div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1601"
              />
              <div className="bl" id="1602"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1603"
              />
              <div className="bl" id="1604"></div>
              <div className="bl" id="1605"></div>
              <div className="bl" id="1606"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1607"
              />
              <div className="bl" id="1608"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1609"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1610"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1611"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1612"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1613"
              />
              <div className="bl" id="1614"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1615"
              />
              <div className="bl" id="1616"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1617"
              />
              <div className="bl" id="1618"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1619"
              />
              <div className="bl" id="1620"></div>
            </div>
            <div className="flex">
              <div className="mat">17</div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1701"
              />
              <div className="bl" id="1702"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1703"
              />
              <div className="bl" id="1704"></div>
              <div className="bl" id="1705"></div>
              <div className="bl" id="1706"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1707"
              />
              <div className="bl" id="1708"></div>
              <div className="bl" id="1709"></div>
              <div className="bl" id="1710"></div>
              <div className="bl" id="1711"></div>
              <div className="bl" id="1712"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1713"
              />
              <div className="bl" id="1714"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1715"
              />
              <div className="bl" id="1716"></div>
              <div className="bl" id="1717"></div>
              <div className="bl" id="1718"></div>
              <div className="bl" id="1719"></div>
              <div className="bl" id="1720"></div>
            </div>
            <div className="flex">
              <div className="mat">18</div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1801"
              />
              <div className="bl" id="1802"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1803"
              />
              <div className="bl" id="1804"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1805"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1806"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1807"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1808"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1809"
              />
              <div className="bl" id="1810"></div>
              <div className="bl" id="1811"></div>
              <div className="bl" id="1812"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1813"
              />
              <div className="bl" id="1814"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1815"
              />
              <div className="bl" id="1816"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1817"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1818"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1819"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1820"
              />
            </div>
            <div className="flex">
              <div className="mat">19</div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1901"
              />
              <div className="bl" id="1902"></div>
              <div className="bl" id="1903"></div>
              <div className="bl" id="1904"></div>
              <div className="bl" id="1905"></div>
              <div className="bl" id="1906"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1907"
              />
              <div className="bl" id="1908"></div>
              <div className="bl" id="1909"></div>
              <div className="bl" id="1910"></div>
              <div className="bl" id="1911"></div>
              <div className="bl" id="1912"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1913"
              />
              <div className="bl" id="1914"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="1915"
              />
              <div className="bl" id="1916"></div>
              <div className="bl" id="1917"></div>
              <div className="bl" id="1918"></div>
              <div className="bl" id="1919"></div>
              <div className="bl" id="1920"></div>
            </div>
            <div className="flex">
              <div className="mat">20</div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2001"
              />
              <div className="bl" id="2002"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2003"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2004"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2005"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2006"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2007"
              />
              <div className="bl" id="2008"></div>
              <div className="bl" id="2009"></div>
              <div className="bl" id="2010"></div>
              <div className="bl" id="2011"></div>
              <div className="bl" id="2012"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2013"
              />
              <div className="bl" id="2014"></div>
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2015"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2016"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2017"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2018"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2019"
              />
              <input
                type="text"
                maxLength="1"
                className="qin"
                placeholder="X"
                id="2020"
              />
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
                  <strong>08.</strong> A widely-used web application framework
                  for Node.js, known for its simplicity and robust features,
                  often used to build web applications and APIs
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>09.</strong> An anonymous, inline function in Python,
                  often used for short, simple operations
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>10.</strong> The acronym for the practice of improving
                  a website's visibility on search engines
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
                  <strong>13.</strong> A high-level programming language used
                  for writing smart contracts on the Ethereum blockchain
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>14.</strong> A built-in data structure in Python used
                  to store key-value pairs
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>15.</strong> A popular social media platform founded
                  by Mark Zuckerberg
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
                  <strong>19.</strong> The standard markup language used to
                  create web pages
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>20.</strong> A character encoding standard that
                  represents text in computers and other devices
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>21.</strong> A data structure in Python that is used
                  to store an ordered collection of elements
                </h1>
                <h1 className="text-3xl font-bold text-white pt-6 pb-3">
                  Across
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>22.</strong> The programming language that brings
                  interactivity to web pages
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>23.</strong> A repetitive process in programming,
                  often used to traverse data structures
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>24.</strong> A python package manager with three
                  simple letters
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>25.</strong> Google's web browser known for its speed
                  and simplicity
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>26.</strong> Containerization platform used for
                  packaging, distributing, and running applications
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>27.</strong> Node.js package manager, often used to
                  install JavaScript libraries
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>28.</strong> A popular Linux distribution known for
                  its stability and community-driven development.
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>29.</strong> A leading cloud computing platform by
                  Amazon
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>30.</strong> A python library for creating static,
                  animated, and interactive visualizations in plots and charts
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>31.</strong> Tiny digital symbols used to express
                  emotions or ideas in text messages and social media
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>32.</strong> A data structure in computing that
                  operates on a last-in, first-out (LIFO) principle
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>33.</strong> A popular data interchange format often
                  used in web development
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>34.</strong> Apple's programming language known for
                  its speed and ease of use.
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>35.</strong> A multinational computer technology
                  corporation known for its database software
                </h1>
                <h1 className="text-base text-white py-1.5">
                  <strong>36.</strong> A visual programming language designed
                  for beginners to create interactive stories, games, and
                  animations
                </h1>
              </div>
            </div>

            <div className="mx-auto max-w-md pt-6">
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Submit Answers & Check
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Quiz;
