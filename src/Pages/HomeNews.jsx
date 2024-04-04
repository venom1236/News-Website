import React, { useEffect, useRef, useState } from 'react'
import Headlines from './Headlines'
import { Link } from 'react-router-dom'
const HomeNews = (props) => {
  const [newArray, setnewArray] = useState([])
  const[search,setsearch]=useState("world")
  let newsRef= useRef()


  let fetchNews = async () => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${props.data?props.data:search}&apiKey=abc13d4b769b40388d7029cdad807239`)
    let data = await res.json()
    // console.log(data.articles)
    setnewArray(data.articles)

  }
  useEffect(() => {
    fetchNews()
  }, [search,props.data])


  const handleNewssearch=(e)=>{
    e.preventDefault()
    let searchValue=newsRef.current.value
    setsearch(searchValue)

  }
  return (
    <div>
      <div>
        <form className="d-flex col-md-6 m-auto my-3" role="search">
          <input ref={newsRef}className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={handleNewssearch} className="btn btn-outline-success" type="submit">Search</button>
        </form>

      </div>
      <div className='row   d-flex  justify-content-center mt-3 pe-3'>
        <div className="row row-cols-3 gap-2 col-md-8  d-flex justify-content-center me-2" style={{height:'18rem'}}>

          {newArray.map((ele) => {
            return <div className="card rounded-4" style={{ width: '20rem', border: '2px solid red',height: '18rem', overflow:'hidden'}}>
              <img style={{ height: '200px', paddingTop:'5px' }} src={ele.urlToImage} className="card-img-top rounded" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-truncate">{ele.title}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to={ele.url} className="btn btn-success">View full news</Link>
              </div>
            </div>


          })}

        </div>
        <div className='border border-danger rounded col-3 p-4 ps-2 main'>
          <h3  className='text-center rounded bg-warning  topheadline'>Top Headline</h3>
          <div className='main2'>

          <Headlines/>
          </div>


        </div>

      </div>



    </div>
  )
}

export default HomeNews
