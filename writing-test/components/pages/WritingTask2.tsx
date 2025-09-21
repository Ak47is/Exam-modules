import React from 'react'

interface WritingTask2Props {
  wordCount: number
  setWordCount: (count: number) => void
  essayText: string
  setEssayText: (text: string) => void
}

const WritingTask2: React.FC<WritingTask2Props> = ({
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
        <h1 className="text-lg font-bold">Sample Academic Writing Part 2</h1>
        <p className="text-sm">
          You should spend about 40 minutes on this task. Write at least 250
          words.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-1/2 p-4 bg-gray-100 border-r border-gray-300">
          <p className="mb-4 text-sm">Write about the following topic:</p>
          <p className="mb-4 font-medium">
            The average standard of people's health is likely to be lower in the
            future than it is now.
          </p>
          <p className="mb-4">
            To what extent do you agree or disagree with this statement?
          </p>
          <p className="mb-4">
            Give reasons for your answer and include any relevant examples from
            your own knowledge or experience.
          </p>
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

export default WritingTask2