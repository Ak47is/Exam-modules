import React, { useState } from 'react'
import { Header } from './components/Header'
import { ConfirmDetails } from './components/ConfirmDetails'
import { SoundTest } from './components/SoundTest'
import { ListeningInstructions } from './components/ListeningInstructions'
import { ListeningTest } from './components/ListeningTest'
export function App() {
  const [currentScreen, setCurrentScreen] = useState('confirmDetails')
  const handleContinue = () => {
    if (currentScreen === 'confirmDetails') {
      setCurrentScreen('soundTest')
    } else if (currentScreen === 'soundTest') {
      setCurrentScreen('instructions')
    } else if (currentScreen === 'instructions') {
      setCurrentScreen('test')
    }
  }
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-blue-50 to-blue-100">
      {currentScreen !== 'test' && <Header />}
      <main
        className={`flex-1 ${currentScreen !== 'test' ? 'flex justify-center items-center p-4' : ''}`}
      >
        {currentScreen === 'confirmDetails' && (
          <ConfirmDetails onContinue={handleContinue} />
        )}
        {currentScreen === 'soundTest' && (
          <SoundTest onContinue={handleContinue} />
        )}
        {currentScreen === 'instructions' && (
          <ListeningInstructions onStart={handleContinue} />
        )}
        {currentScreen === 'test' && <ListeningTest />}
      </main>
    </div>
  )
}
