import React, { useContext } from 'react'
import {BookContext} from '../Contexs/BookContext'

export const BookDetails = ({Books}) => {
    const {dispatch} = useContext(BookContext);
    return (
        <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:Books.id})}>
            <div className="title">{Books.title}</div>
            <div className="author">{Books.author}</div>
        </li>
    )
}
