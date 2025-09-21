import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WritingTask1 from './components/pages/WritingTask1'
import WritingTask2 from './components/pages/WritingTask2'
import Instructions from './components/pages/Instructions'
import ConfirmDetails from './components/pages/ConfirmDetails'
import TimeOver from './components/pages/TimeOver'

export function App() {
  const [currentPage, setCurrentPage] = useState('instructions')
  const [timeLeft, setTimeLeft] = useState(60 * 60) // 60 minutes in seconds
  const [timerActive, setTimerActive] = useState(false)
  const [timerEnded, setTimerEnded] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [essayText, setEssayText] = useState('')
  const [task2WordCount, setTask2WordCount] = useState(0)
  const [task2EssayText, setTask2EssayText] = useState('')

  // Start timer when user begins the test
  useEffect(() => {
    if (currentPage === 'writingTask1' && !timerActive) {
      setTimerActive(true)
    }
  }, [currentPage, timerActive])

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setTimerActive(false)
      setTimerEnded(true)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerActive, timeLeft])

  // Handle navigation with timer awareness
  const handleNavigate = (page: string) => {
    if (timerEnded && (page === 'writingTask1' || page === 'writingTask2')) {
      return // Prevent navigation to writing tasks if timer has ended
    }
    setCurrentPage(page)
  }

  const renderPage = () => {
    if (timerEnded) {
      return <TimeOver />
    }
    switch (currentPage) {
      case 'writingTask1':
        return (
          <WritingTask1
            wordCount={wordCount}
            setWordCount={setWordCount}
            essayText={essayText}
            setEssayText={setEssayText}
          />
        )
      case 'writingTask2':
        return (
          <WritingTask2
            wordCount={task2WordCount}
            setWordCount={setTask2WordCount}
            essayText={task2EssayText}
            setEssayText={setTask2EssayText}
          />
        )
      case 'confirmDetails':
        return (
          <ConfirmDetails onConfirm={() => handleNavigate('writingTask1')} />
        )
      case 'instructions':
      default:
        return <Instructions onStart={() => handleNavigate('confirmDetails')} />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-[#e9f0f8]">
      <Header timeLeft={timeLeft} />
      <main className="flex-grow overflow-y-auto p-2">
        <div className="bg-white rounded-md shadow-sm max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  )
}