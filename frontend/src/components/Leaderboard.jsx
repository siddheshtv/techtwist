import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const sUname = localStorage.getItem("uname");
  const sUid = localStorage.getItem("uid");

  useEffect(() => {
    // Fetch leaderboard data when the component mounts
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get(
          "http://44.206.134.88:5002/getAllUsers"
        );

        if (response.status === 200) {
          // Sort the data by marks in descending order
          const sortedData = response.data.data.sort(
            (a, b) => b.score - a.score
          );
          setLeaderboardData(sortedData);
        } else {
          console.error("Failed to fetch leaderboard data");
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <section className="pb-12 pt-10">
      <h1 className="text-6xl text-center font-bold text-white py-12">
        LeaderBoard
      </h1>
      <div className="flex justify-center py-4">
        <Link
          to={`/quiz/${sUname}/${sUid}`}
          className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Back To The Quiz
        </Link>
      </div>
      <div className="mx-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-2xl dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {leaderboardData.map((user, index) => (
          <h1
            key={user.uid}
            className={`block text-left text-2xl w-full px-4 py-5 ${
              index === 0
                ? "bg-gradient-to-b from-orange-500 to-yellow-300 rounded-t-2xl"
                : index === 1
                ? "bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900"
                : ""
            } hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ${
              index === -1
                ? "rounded-b-2xl border-b-0"
                : "border-b-0 shadow-2xl focus:ring-0"
            }`}
          >
            {user.uname} &rarr; {user.score}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;
