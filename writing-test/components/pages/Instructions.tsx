import React from 'react'

interface InstructionsProps {
  onStart: () => void
}

const Instructions: React.FC<InstructionsProps> = ({ onStart }) => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">IELTS Academic Writing</h1>
      <p className="mb-4">Time: 1 hour</p>
      <h2 className="font-bold mb-2">INSTRUCTIONS TO CANDIDATES</h2>
      <ul className="list-disc pl-8 mb-6">
        <li>
          Answer <strong>both</strong> parts
        </li>
        <li>You can change your answers at any time during the test.</li>
      </ul>
      <h2 className="font-bold mb-2">INFORMATION FOR CANDIDATES</h2>
      <ul className="list-disc pl-8 mb-8">
        <li>There are two parts in this test.</li>
        <li>
          Part 2 contributes twice as much as Part 1 to the writing score.
        </li>
        <li>
          The test clock will show you when there are 10 minutes and 5 minutes
          remaining.
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="flex items-center mb-4">
          <span className="text-blue-500 text-2xl mr-2">ℹ️</span>
          <p>Do not click 'Start test' until you are told to do so.</p>
        </div>
        <button
          onClick={onStart}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Start test
        </button>
      </div>
    </div>
  )
}

export default Instructions