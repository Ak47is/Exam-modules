import React from 'react'
const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-10">
      <div className="flex justify-between items-center px-4 py-2 max-w-7xl mx-auto">
        <div>
          <img
            src="https://i.postimg.cc/FKx07M5m/ILTES.png"
            alt="IELTS Logo"
            className="h-12"
          />
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://i.postimg.cc/0Q2DmVPS/Biritsh-Council.png"
            alt="British Council"
            className="h-8"
          />
          <img
            src="https://i.postimg.cc/9f2GXWkJ/IDB.png"
            alt="IDP"
            className="h-8"
          />
          <img
            src="https://i.postimg.cc/TYZVSjJ8/Cambridge-University.png"
            alt="Cambridge Assessment English"
            className="h-8"
          />
        </div>
      </div>
    </div>
  )
}
export default Header
