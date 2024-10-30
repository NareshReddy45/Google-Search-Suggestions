// GoogleSuggestions.js
import './index.css'
import {useState} from 'react'
import SuggestionItem from '../SuggestionItem'

function GoogleSuggestions({suggestionsList}) {
  const [searchInput, setSearchInput] = useState('')

  // Filtered list of suggestions based on search input
  const filteredSuggestions = suggestionsList.filter(suggestion =>
    suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  // Function to handle input change
  const handleInputChange = event => {
    setSearchInput(event.target.value)
  }

  // Function to clear the input field
  const clearInput = () => {
    setSearchInput('')
  }

  // Function to update input when a suggestion is clicked
  const updateSearchInput = suggestion => {
    setSearchInput(suggestion)
  }

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        alt="Google Logo"
        className="image"
      />
      <div className="search-box">
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="Search Icon"
            className="search-icon"
          />
          <input
            type="search"
            className="input-ele"
            placeholder="Search Google"
            value={searchInput}
            onChange={handleInputChange}
          />
          {/* Render remove icon only if input has content */}
          {searchInput && (
            <button alt="remove" className="remove-icon" onClick={clearInput}>
              x
            </button>
          )}
        </div>
        <ul className="suggestions-list">
          {filteredSuggestions.map(suggestion => (
            <SuggestionItem
              key={suggestion.id}
              suggestion={suggestion.suggestion}
              updateSearchInput={updateSearchInput}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GoogleSuggestions
