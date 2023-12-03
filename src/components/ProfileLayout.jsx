import React from 'react';
import PieChartComponent from './PieChartComponent'
import LineChartComponent from './LineChartComponent'
import ScatterChartComponent from './ScatterChartComponent'
import AreaChartComponent from './AreaChartComponent';


const ProfileLayout = ({ children , entries , show}) => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
       {show &&
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-2 mb-4">
          <div className="flex items-center justify-center h-full rounded bg-gray-50 dark:bg-gray-800">
            <AreaChartComponent entries={entries}/>
          </div>
          <div className="flex items-center justify-center h-full rounded bg-gray-50 dark:bg-gray-800">
            <PieChartComponent entries={entries}/>
          </div>
          <div className="flex items-center justify-center h-full rounded bg-gray-50 dark:bg-gray-800">
            <LineChartComponent entries={entries}/>
          </div>
        </div>}
        <div className="p-3 items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
          {children}
         
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;