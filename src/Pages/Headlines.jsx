import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Headlines = () => {
const [news,setnews]=useState([])
let fetchHeadlines=async ()=>{
    let res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=abc13d4b769b40388d7029cdad807239')
    let data = await res.json()
    console.log(data.articles)
    setnews (data.articles)
}
useEffect(()=>{
    fetchHeadlines()
},[])
return (
    <div>
      {news.map((ele)=>{
        return <Link to={ele.url} className="card " style={{ width: '18rem' }}>
        <img style={{height:'200px'}} src={ele.urlToImage} className="card-img-top  rounded-5" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-truncate">{ele.title}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <a href="#" className="btn btn-success">View full News</a>
        </div>
       </Link>

      })}
    </div>
  )
}

export default Headlines
