import React, { useState } from 'react'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'

const StatusToggle = ({ initialStatus = false, onToggle }) => {
  const [isActive, setIsActive] = useState(initialStatus)

  const handleToggle = () => {
    const newStatus = !isActive
    setIsActive(newStatus)
    if (onToggle) onToggle(newStatus)
  }

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={handleToggle}
        className="text-3xl focus:outline-none"
        aria-label={isActive ? "Set to Pending" : "Set to Active"}
      >
        {isActive ? (
          <ToggleOnIcon className="text-green-500" fontSize="large" />
        ) : (
          <ToggleOffIcon className="text-gray-400" fontSize="large" />
        )}
      </button>
      <span className={`font-semibold ${isActive ? 'text-green-500' : 'text-red-500'}`}>
        {isActive ? 'Active' : 'Pending'}
      </span>
    </div>
  )
}

export default StatusToggle