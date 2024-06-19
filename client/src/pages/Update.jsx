import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const navigate = useNavigate();

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

    const hancleClick = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/books", books)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='form'>
        <h1>Update the book</h1>
        <input type="text" placeholder='Title' onChange={handleChange} name='title'/>
        <input type="text" placeholder='Description' onChange={handleChange} name='desc'/>
        <input type="text" placeholder='Cover' onChange={handleChange} name='cover'/>
        <input type="number" placeholder='Price' onChange={handleChange} name='price'/>
        <button onClick={hancleClick}>Add</button>
      
    </div>
  )
}

export default Update
