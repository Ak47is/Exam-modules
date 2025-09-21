import React from 'react'

interface FooterProps {
  currentPage: string
  onNavigate?: (page: string) => void
}

const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <footer className="sticky bottom-0 bg-[#e9f0f8] border-t border-gray-300 p-2 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <input type="checkbox" id="review" className="h-4 w-4" />
        <label htmlFor="review" className="text-sm font-medium">
          Review
        </label>
        <button
          className={`text-white text-sm px-3 py-1 rounded-md ml-2 shadow-sm ${currentPage === 'writingTask1' ? 'bg-[#3498db]' : 'bg-gray-400'}`}
          onClick={() => handleNavigate('writingTask1')}
        >
          1
        </button>
        <button
          className={`text-white text-sm px-3 py-1 rounded-md ml-2 shadow-sm ${currentPage === 'writingTask2' ? 'bg-[#3498db]' : 'bg-gray-400'}`}
          onClick={() => handleNavigate('writingTask2')}
        >
          2
        </button>
      </div>
      <div>
        <button className="bg-white border border-gray-300 rounded p-1 shadow-sm hover:bg-gray-50">
          <span className="text-yellow-500">✏️</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer