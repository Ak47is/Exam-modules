import React from 'react'

const TimeOver: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 h-full">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border-2 border-red-500">
        <div className="text-center">
          <div className="bg-red-500 text-white p-2 rounded-t-md mb-4">
            <h2 className="text-xl font-bold">Time Over</h2>
          </div>
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="6" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
              </div>
            </div>
            <p className="text-lg font-medium mb-2">
              Your time for the IELTS Writing Test has ended.
            </p>
            <p className="text-gray-600">
              All answers have been submitted automatically.
            </p>
          </div>
          <p className="text-sm text-gray-500 border-t border-gray-200 pt-4">
            Please wait for further instructions from your invigilator.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TimeOver