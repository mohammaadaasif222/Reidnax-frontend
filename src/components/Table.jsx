import React, { useEffect, useState } from "react";

const Table = ({ entries }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(entries);
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, loading]);

  const generateRandomNumber = (length) => {
    const min = Math.pow(10, length - 1); 
    const max = Math.pow(10, length) - 1; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  

  
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      {message && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 gap-3"
          role="alert"
        >
          <span className="font-medium">{message}</span>
          <span className="text-xs text-green-800">
            Reload the component to see the changes!
          </span>
        </div>
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
            Name
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Count
            </th>
            <th scope="col" className="px-6 py-3">
              Max Length
            </th>
            <th scope="col" className="px-6 py-3">
              Percentage
            </th>
           
          </tr>
        </thead>
        <tbody>
          {entries
            ? entries.map((entry, index) => {
                return (
                  <tr
                    className="border-b border-gray-200 dark:border-gray-700"
                    key={generateRandomNumber(8)}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {entry.name}
                    </th>

                    <td className="px-6 py-4">{entry.type}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {entry.count}
                    </td>
                    <td className="px-6 py-4">{entry.max_str_length}</td>
                    <td className="px-6 py-4">{entry.unique_percent}%</td>
                    
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
