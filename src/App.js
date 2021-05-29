import React from 'react';
import './App.css';
import BookContextProvider from './Contexs/BookContext';
import { Navbar } from './Components/Navbar';
import { BookList } from './Components/BookList';
import { BookForm } from './Components/BookForm';



function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>  
        <BookForm></BookForm>     
      </BookContextProvider>
    </div>
  );
}

export default App;
