import React, { useState } from 'react'

const Add = () => {

    const [books, setBooks] = useState({
        title: "",
        desc: "",
        price: null,
        cover: ""
    });

    const handleChange = (e) => {
        setBooks(prev => ({...prev, [e.target.name]: e.target.value}))
        console.log(books);
    }
  return (
    <div className='form'>
        <h1>Add new book</h1>
        <input type="text" placeholder='Title' onChange={handleChange} name='title'/>
        <input type="text" placeholder='Description' onChange={handleChange} name='desc'/>
        <input type="text" placeholder='Cover' onChange={handleChange} name='cover'/>
        <input type="number" placeholder='Price' onChange={handleChange} name='price'/>
      
    </div>
  )
}

export default Add
