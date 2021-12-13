import React, {useState} from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    onFormSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input 
            name="search-item" placeholder="Search for any video"
            onChange={(e) => {setTerm(e.target.value)}}
            type="text" 
            value={term}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar