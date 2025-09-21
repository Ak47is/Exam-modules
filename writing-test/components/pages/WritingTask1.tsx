import React from 'react'

interface WritingTask1Props {
  wordCount: number
  setWordCount: (count: number) => void
  essayText: string
  setEssayText: (text: string) => void
}

const WritingTask1: React.FC<WritingTask1Props> = ({
  wordCount,
  setWordCount,
  essayText,
  setEssayText,
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setEssayText(text)
    setWordCount(text.trim() === '' ? 0 : text.trim().split(/\s+/).length)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-gray-300 p-3 bg-white shadow-sm">
        <h1 className="text-lg font-bold">Academic Writing Part 1</h1>
        <p className="text-sm">
          You should spend about 20 minutes on this task. Write at least 150
          words.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-1/2 p-4 bg-gray-100 border-r border-gray-300">
          <p className="mb-4 text-sm">
            The chart below shows the number of trips made by children in one
            country in 1990 and 2010 to travel to and from school using
            different modes of transport.
          </p>
          <p className="mb-6 text-sm">
            Summarise the information by selecting and reporting the main
            features, and make comparisons where relevant.
          </p>
          <div className="mb-4">
            <h2 className="text-center font-bold mb-2 text-sm">
              Travel to and from school: children aged 5-12
            </h2>
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/wgUwKgHnxhPrUDUTp28XAf/image.png"
              alt="Transport Chart"
              className="mx-auto max-w-full shadow-md rounded"
            />
          </div>
        </div>
        <div className="lg:w-1/2 p-4 bg-white flex flex-col">
          <div className="border-2 border-blue-500 rounded shadow-md flex-grow">
            <textarea
              value={essayText}
              onChange={handleTextChange}
              className="w-full h-full p-3 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Write your response here..."
            ></textarea>
          </div>
          <div className="text-right mt-2">
            <span className="text-sm text-gray-600 font-medium">
              Word count: {wordCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WritingTask1