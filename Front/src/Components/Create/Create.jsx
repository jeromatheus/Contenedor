import React, { useState } from 'react'
import axios from 'axios'

const Create = ({ onNewItem }) => {
    const [campo, setCampo] = useState('');
    const [dato, setDato] = useState('');
    const [error, setError] = useState('');

    const handleAdd = async (event) => {
        event.preventDefault();
        if (campo && dato) {
            setError('');
            try {
                await axios.post('http://localhost:3001/add', { campo, dato });
                onNewItem();
                setCampo('');
                setDato('');
            } catch (error) {
                console.error(error);
            }
        } else {
            setError('Campos obligatorios');
        }
    };

    return (
        <form onSubmit={handleAdd} className='d-flex justify-content-center my-2'>
            <input
                placeholder='Campo'
                className='form-control me-2'
                value={campo}
                onChange={(e) => setCampo(e.target.value)}
            />
            <input
                placeholder='Dato'
                className='form-control me-2'
                value={dato}
                onChange={(e) => setDato(e.target.value)}
            />
            <button type='submit' className='btn btn-primary w-50'>
                Agregar <i className="bi bi-plus-circle"></i>
            </button>
            {error && <div className='text-danger ms-3'>{error}</div>}
        </form>
    );
};

export default Create;