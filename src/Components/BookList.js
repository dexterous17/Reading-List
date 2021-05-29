import React, { useContext } from 'react'
import {BookContext} from '../Contexs/BookContext'
import {BookDetails} from './BookDetails'


export const BookList = () => {
    
    const {Books} = useContext(BookContext);
    
    return Books.length ? (
        <div className="book-list">
            <ul>
                {
                Books.map(Books =>{return (<BookDetails Books={Books} key={Math.random()}/>)})
                }           
            </ul>
        </div>
    ):(
        <div className="empty">No Books to read.Hello free time :)</div>
    )
}
