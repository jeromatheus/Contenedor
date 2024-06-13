import './PersonalInfo.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Create from '../Create/Create';

const PersonalInfo = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3001/get')
            .then(result => setBlog(result.data))
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                // Actualizar la lista después de eliminar
                fetchData();
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="card m-auto">
            <img src="../public/profile.png" className="card-img-top mt-4" alt="Profile picture" />
            <div className="card-body">
                <Create onNewItem={fetchData} />
                <ul className="list-group list-group-flush">
                    {blog.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <b>{item.campo} : </b>{item.dato}
                            </div>
                            <span className="btn btn-danger" onClick={() => handleDelete(item._id)}>
                                <i className="bi bi-trash"></i>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='pin'></div>
        </div >
    );
};

export default PersonalInfo;
