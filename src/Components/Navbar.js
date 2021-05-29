import React, { useContext } from 'react'
import {BookContext} from '../Contexs/BookContext'

export const Navbar = () => {
    const {Books} = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have {Books.length} books to get through ...</p>    
        </div>
    )
}
