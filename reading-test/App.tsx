import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TestHeader from './components/TestHeader'
import ReadingTest from './components/ReadingTest'
import MultipleChoiceReadingTest from './components/MultipleChoiceReadingTest'
import TrueFalseReadingTest from './components/TrueFalseReadingTest'
import NoteCompletionReadingTest from './components/NoteCompletionReadingTest'
import MatchingHeadingsReadingTest from './components/MatchingHeadingsReadingTest'
import SummaryCompletionReadingTest from './components/SummaryCompletionReadingTest'
import SummaryCompletionListReadingTest from './components/SummaryCompletionListReadingTest'
import FlowChartCompletionReadingTest from './components/FlowChartCompletionReadingTest'
import SentenceCompletionReadingTest from './components/SentenceCompletionReadingTest'
import MatchingSentenceEndingsReadingTest from './components/MatchingSentenceEndingsReadingTest'
import TableCompletionReadingTest from './components/TableCompletionReadingTest'
import MatchingFeaturesReadingTest from './components/MatchingFeaturesReadingTest'
import InstructionsPage from './components/InstructionsPage'
import ConfirmationPage from './components/ConfirmationPage'
export function App() {
  const [currentPage, setCurrentPage] = useState('instructions') // 'instructions', 'confirmation', 'test'
  const [minutesLeft, setMinutesLeft] = useState(30)
  const [testType, setTestType] = useState('single') // 'single', 'multiple', 'truefalse', 'note', 'headings', 'summary', 'summarylist', 'flowchart', 'sentence', 'endings', 'table', or 'features'
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#e6eef8] w-full">
      <Header />
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 py-2 mt-16 mb-12 overflow-hidden">
        <div className="h-full overflow-auto">
          {currentPage === 'instructions' && (
            <InstructionsPage onStart={() => setCurrentPage('confirmation')} />
          )}
          {currentPage === 'confirmation' && (
            <ConfirmationPage onConfirm={() => setCurrentPage('test')} />
          )}
          {currentPage === 'test' && (
            <div className="h-full flex flex-col overflow-hidden">
              <TestHeader minutesLeft={minutesLeft} />
              <div className="flex-1 overflow-auto">
                {testType === 'single' ? (
                  <ReadingTest />
                ) : testType === 'multiple' ? (
                  <MultipleChoiceReadingTest />
                ) : testType === 'truefalse' ? (
                  <TrueFalseReadingTest />
                ) : testType === 'note' ? (
                  <NoteCompletionReadingTest />
                ) : testType === 'headings' ? (
                  <MatchingHeadingsReadingTest />
                ) : testType === 'summary' ? (
                  <SummaryCompletionReadingTest />
                ) : testType === 'summarylist' ? (
                  <SummaryCompletionListReadingTest />
                ) : testType === 'flowchart' ? (
                  <FlowChartCompletionReadingTest />
                ) : testType === 'sentence' ? (
                  <SentenceCompletionReadingTest />
                ) : testType === 'endings' ? (
                  <MatchingSentenceEndingsReadingTest />
                ) : testType === 'table' ? (
                  <TableCompletionReadingTest />
                ) : (
                  <MatchingFeaturesReadingTest />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer
        testType={testType}
        setTestType={setTestType}
        currentPage={currentPage}
      />
    </div>
  )
}
