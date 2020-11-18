import React from 'react'
import { Link } from 'react-router-dom'

const SearchInput = ( {handlSerchInput} ) => {
    return (
        <div className='header'>
            <input onChange={handlSerchInput} className='serch-input' placeholder='Type product name or descripton to find item' type='text'></input>
            <Link className="button-chang-link" to='/Add-produt'>Add new product</Link> 
        </div>
    )
}

export default SearchInput