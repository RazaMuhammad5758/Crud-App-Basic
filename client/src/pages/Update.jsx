import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2];

    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: ""
    });

    const handleChange = (e) => {
        setBook(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            console.log("Book ID:", bookId);
            console.log("Book Data:", book);
            await axios.put(`http://localhost:8800/books/${bookId}`, book);
            navigate("/");
        } catch (err) {
            console.error("Failed to update book:", err.response ? err.response.data : err.message);
        }
    }

    return (
        <div className='form'>
            <h1>Update the book</h1>
            <input type="text" placeholder='Title' onChange={handleChange} name='title'/>
            <input type="text" placeholder='Description' onChange={handleChange} name='desc'/>
            <input type="text" placeholder='Cover' onChange={handleChange} name='cover'/>
            <input type="number" placeholder='Price' onChange={handleChange} name='price'/>
            <button onClick={handleClick} className='formButton'>Update</button>
        </div>
    )
}

export default Update
