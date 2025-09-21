import React from 'react'
import { InfoNotice } from './common/InfoNotice'
import { Button } from './common/Button'
export function ListeningInstructions({ onStart }) {
  return (
    <div className="bg-white rounded-md shadow-sm w-full max-w-3xl p-6">
      <h2 className="text-2xl font-bold mb-2">IELTS Listening</h2>
      <p className="mb-4">Time: Approximately 30 minutes</p>
      <h3 className="text-lg font-bold mb-2">INSTRUCTIONS TO CANDIDATES</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Answer all the questions.</li>
        <li>You can change your answers at any time during the test.</li>
      </ul>
      <h3 className="text-lg font-bold mb-2">INFORMATION FOR CANDIDATES</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>There are 40 questions in this test.</li>
        <li>Each question carries one mark.</li>
        <li>There are four parts to the test.</li>
        <li>You will hear each part once.</li>
        <li>
          For each part of the test there will be time for you to look through
          the questions and time for you to check your answers.
        </li>
      </ul>
      <div className="flex justify-center mb-6">
        <InfoNotice message="Do not click 'Start test' until you are told to do so." />
      </div>
      <div className="flex justify-center">
        <Button onClick={onStart}>Start test</Button>
      </div>
    </div>
  )
}
