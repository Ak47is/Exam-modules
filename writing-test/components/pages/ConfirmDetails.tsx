import React from 'react'

interface ConfirmDetailsProps {
  onConfirm: () => void
}

const ConfirmDetails: React.FC<ConfirmDetailsProps> = ({ onConfirm }) => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="bg-gray-800 text-white p-2 rounded-t-md flex items-center">
        <img
          src="https://i.postimg.cc/FKx07M5m/ILTES.png"
          alt="IELTS Logo"
          className="h-6 mr-2"
        />
        <span>Confirm your details</span>
      </div>
      <div className="border border-gray-300 rounded-b-md p-6 bg-[#f8f9fa]">
        <div className="mb-4">
          <p className="mb-1">Name:</p>
          <p className="mb-1">Date of birth:</p>
          <p className="mb-4">Candidate number:</p>
        </div>
        <div className="flex items-center mb-6">
          <span className="text-blue-500 text-xl mr-2">ℹ️</span>
          <p>If your details are not correct, please inform the invigilator.</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            My details are correct
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDetails