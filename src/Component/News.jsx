import React, { useEffect, useState } from 'react'
import Card from './Card';

const News = () => {

    const[data,setdata] = useState("india");

    const fetchdata = async() => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${data}&from=2024-11-30&sortBy=publishedAt&apiKey=217b41a9e1e2430798113aafaf423787`);
                const result = await response.json();
                console.log(result.articles);
                setdata(result.articles);
            } catch (error) {
                console.log(error);
            }
    }

    const type = (e) => {
        console.log(e.target.value);
        setdata(e.target.value);
    }

    useEffect(()=>{
        fetchdata();
    },[])

    const handlesearch = () => {
        fetchdata()
    }

  return (
    <>
    
    <nav>
        <h2>News Website</h2>
        <input type="text" className='inp' placeholder='Search News' onChange={type} />
        <button className='search' onClick={handlesearch}>Search</button>
       <ul className='links'>
        <li><a href="">Linkedin</a></li>
        <li><a href="">Twitter</a></li>
       </ul>
    </nav>
    <Card data={data}/>

    </>
  )
}

export default News
