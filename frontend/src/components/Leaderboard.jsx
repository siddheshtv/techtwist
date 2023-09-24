import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get(
          "http://44.206.134.88:5002/getAllUsers"
        );

        if (response.status === 200) {
          const filteredData = response.data.data.filter(
            (user) => user.total_time
          );

          const sortedData = filteredData.sort((a, b) => {
            if (b.score !== a.score) {
              return b.score - a.score;
            } else {
              const timeA = parseTotalTime(a.total_time);
              const timeB = parseTotalTime(b.total_time);
              return timeA - timeB;
            }
          });
          setLeaderboardData(sortedData);
        } else {
          console.error("Failed to fetch leaderboard data");
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    const parseTotalTime = (totalTime) => {
      const [hours, minutes, seconds] = totalTime.split(":").map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    };

    // Fetch leaderboard data initially
    fetchLeaderboardData();

    // Set up an interval to fetch and update data every 1 minute (60,000 milliseconds)
    const intervalId = setInterval(fetchLeaderboardData, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="pb-12 pt-10">
      <h1 className="text-6xl text-center font-bold text-white py-12">
        LeaderBoard
      </h1>
      <div className="flex justify-center py-4"></div>
      <div className="mx-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-2xl dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {leaderboardData.map((user, index) => (
          <h1
            key={user.uid}
            className={`flex justify-between items-center text-2xl w-full px-4 py-5 ${
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
            <div>
              {user.uname} &rarr; {user.score}
            </div>
            {user.total_time && (
              <div className="text-right mr-5 font-semibold">
                {user.total_time}
              </div>
            )}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;
