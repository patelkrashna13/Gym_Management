import React from 'react'

const MemberCard = () => {
  return (
    <div className="bg-white rounded-lg p-3 hover:bg-gradient-to-r from-indigo-50 via-purple-500 to-pink-500 hover:text-white cursor-pointer">
        {/* <div className="w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full"></div> */}
        
        <div className="mx-auto mt-5 text-center text-xl font-semibold font-mono">
          {"Shubham Kumar"}
        </div>

        <div className="mx-auto mt-2 text-center text-xl font-mono">
          {
            "91" + "9620237834"
          }
        </div>

        <div className="mx-auto mt-2 text-center text-xl font-mono">
          Next Bill Date : {"31-12-2024"}
        </div>
      </div>
  )
}

export default MemberCard
