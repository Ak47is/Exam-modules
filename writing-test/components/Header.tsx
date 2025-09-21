import React from 'react'

interface HeaderProps {
  timeLeft: number
}

const Header: React.FC<HeaderProps> = ({ timeLeft }) => {
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <header className="sticky top-0 z-10 w-full">
      {/* Top header with IELTS logo and partner logos */}
      <div className="bg-white border-b-4 border-[#d90429] flex items-center justify-between px-4 py-1">
        <div>
          <img
            src="https://i.postimg.cc/FKx07M5m/ILTES.png"
            alt="IELTS Logo"
            className="h-12"
          />
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://i.postimg.cc/0Q2DmVPS/Biritsh-Council.png"
            alt="British Council Logo"
            className="h-8"
          />
          <img
            src="https://i.postimg.cc/9f2GXWkJ/IDB.png"
            alt="IDP Logo"
            className="h-8"
          />
          <img
            src="https://i.postimg.cc/TYZVSjJ8/Cambridge-University.png"
            alt="Cambridge Assessment Logo"
            className="h-8"
          />
        </div>
      </div>
      {/* Status bar with user info and timer */}
      <div className="bg-[#333333] text-white flex items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">🔑</span>
          <span className="text-sm">XXXX XXXXXXX - 123456</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">
            <span className="text-white">📶</span>
            <div className="inline-block ml-2 bg-[#222222] px-2 py-0.5 rounded border border-gray-700">
              <span className="font-mono">{formatTime(timeLeft)} left</span>
            </div>
          </span>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white text-sm px-3 py-0.5 rounded">
            Help
          </button>
          <button className="bg-blue-500 text-white text-sm px-3 py-0.5 rounded">
            Hide
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header