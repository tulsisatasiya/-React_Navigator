import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setData(res.data);
    });
  }, []);

  const dataToShow = data.slice(0, 15);

  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-center"> 
        <div className="row">
          {dataToShow.map((val, index) => {
            return (
              <div key={index} className="col-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{val.id}</h5>
                    <p className="card-text" style={{ width: "100%", display: "block" }}>{val.title}</p>
                    <Link to={`/${val.id}`} className='btn btn-success' >View Data</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Data;
