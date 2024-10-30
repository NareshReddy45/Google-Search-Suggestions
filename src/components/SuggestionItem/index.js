// SuggestionsItem.js
import './index.css'

function SuggestionItem({suggestion, updateSearchInput}) {
  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow icon"
        className="arrow-icon"
        onClick={() => updateSearchInput(suggestion)}
      />
    </li>
  )
}

export default SuggestionItem
