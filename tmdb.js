import React, { useEffect, useState } from 'react';
import './tmdb.css';
// import {Pagination} from "@mui/material/Pagination";
// import  Pagination  from '@mui/material/Pagination';
// import Pagination from '@mui/material/Pagination';



const Tmdb = () => {

    const [totalpage, settotalpage] = useState('');
    const[pagenumber,setpagenumber]=useState(1)
    const [data, setData] = useState([]);

const pagehandler=(e)=>{
    setpagenumber(Number(e.target.innerText));
    console.log(pagenumber);
}
    let citys = `https://image.tmdb.org/t/p/original`;
let pagen=pagenumber;
  
    console.log(data,pagenumber,totalpage);
    useEffect(() => {
      
            fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=31e27d32a35acef5e047579389873b0c&page=${pagen}`)
                .then(response => response.json())
                // .then(data => console.log(data))
                .then(data =>{ setData(data.results);
                    settotalpage(data.total_pages)})
                .catch(err => console.log(err));
    },[pagenumber]);
    

    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TMDB</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV shows</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link ">People   </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">More</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-primary" type="submit">Search</button>

                </div>
            </div>
        </nav>
        <div className='center-top'>
            <img src='https://www.themoviedb.org/assets/2/v4/taw/2021/shape_8-fae706ec0da1ef4e0c48b6abfe1984cfb5808be9dfc01619b25b2a9691c43f56.svg' alt='network' className='bmg' />

            <h1>2021</h1>
            <h3>That's a Wrap</h3>
            <h5>Let's dive into 2021's best and worst! →</h5>
        </div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        {/* <Pagination  className='pagination'
            count={totalpage}
            color="primary"
         onClick={pagehandler}
        /> */}
        <div className='header'>

            <h2>What's Popular</h2>
            <div className='slider'>
                <small className='streaming'>streaming</small>
                <small>on Tv</small>
                <small>For rent</small>
                <small>In Theatre</small>

            </div>
        </div>
        <div className='container '>

            {data.map((data, i) => {
                return <div className="card" key={i}>
                    <img src={citys + data.backdrop_path}

                        className="card-img-top" alt="Game Of Thrones" />
                    <div className='circle'>
                        <span>{Math.round(data.vote_average * 10)}%</span>
                    </div>
                    <div className="card-body">

                        <h5 className="card-title"> <a href="#" className="link">{data.original_title || data.name}</a></h5>
                        <p className="card-text">{data.release_date || data.first_air_date}</p>
                    </div>
                </div>
            })}


        </div>
        
    </div>;
};

export default Tmdb;
