import React, { useState } from 'react'
import { InfoNotice } from './common/InfoNotice'
import { Button } from './common/Button'
export function SoundTest({ onContinue }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlaySound = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="bg-white rounded-md shadow-sm w-full max-w-3xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4395/4395501.png"
          alt="Headphones icon"
          className="w-10 h-10"
        />
        <h2 className="text-xl text-gray-700">Test sound</h2>
      </div>
      <p className="mb-6">
        Put on your headphones and click on the Play sound button to play a
        sample sound.
      </p>
      <div className="flex justify-center mb-6">
        <Button onClick={handlePlaySound}>
          {isPlaying ? 'Stop sound' : 'Play sound'}
        </Button>
      </div>
      <InfoNotice
        type="warning"
        message="If you cannot hear the sound clearly, please tell the invigilator."
      />
      <div className="flex justify-center mt-6">
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </div>
  )
}
