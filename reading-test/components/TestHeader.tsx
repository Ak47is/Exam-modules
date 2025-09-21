import React from 'react'
const TestHeader = ({ minutesLeft }: { minutesLeft: number }) => {
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded-t-md mb-1">
      <div className="flex items-center space-x-2">
        <span className="text-yellow-300">XXXX XXXXXXXX - 123456</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>{minutesLeft} minutes left</span>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Help
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Hide
          </button>
        </div>
      </div>
    </div>
  )
}
export default TestHeader
