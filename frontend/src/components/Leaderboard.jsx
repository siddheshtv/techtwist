import React from "react";

const Leaderboard = () => {
  return (
    <section>
      <h1 className="text-6xl text-center font-bold text-white py-12">
        LeaderBoard
      </h1>
      <div className="mx-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <h1 className="block text-left text-2xl w-full px-4 py-2 text-white bg-gradient-to-b from-orange-500 to-yellow-300 border-b border-gray-200 rounded-t-lg  dark:border-gray-600">
          🔥🔥 theboringbuilder &rarr; 493
        </h1>
        <h1 className="block text-left text-2xl w-full px-4 py-2 border-b border-gray-200  bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          🔥 awesomedude030 &rarr; 491
        </h1>
        <h1 className="block text-left text-2xl w-full px-4 py-2 border-b border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          funnycowboy5932 &rarr; 234
        </h1>
        <h1 className="block text-left text-2xl w-full px-4 py-2 rounded-b-lg  hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          syntaxerror922 &rarr; 230
        </h1>
      </div>
    </section>
  );
};

export default Leaderboard;
