import React from 'react';

function Schedule() {
  return (
    <div className="2xl:w-1/2 2xl:h-1/2 lg:w-full bg-white p-7 ml-2 rounded-lg border border-gray-200 flex">
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <strong className="text-gray-900 font-black">Today’s schedule</strong>
          <p className="text-gray mr-10">See All</p>
        </div>
        <div className="container my-4 px-5 border-l-8 border-[#9BDD7C] ">
          <h1 className="py-1">Meeting with suppliers from Kuta Bali</h1>
          <p className="py-1">14.00-15.00</p>
          <p className="py-1">at Sunset Road, Kuta, Bali </p>
        </div>
        <div className="container my-4 px-5 border-l-8 border-[#6972C3]">
          <h1 className="py-1">Check operation at Giga Factory 1</h1>
          <p className="py-1">18.00-20.00</p>
          <p className="py-1">at Central Jakarta </p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
