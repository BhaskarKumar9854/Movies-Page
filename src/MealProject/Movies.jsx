import React,{ useState } from 'react'
import  { movies } from './Data.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './Movie.css'


const Movie = () => {

  const [movielist,setmovie] = useState(movies)

  const filterBycatagorey = (cat) =>{
    setmovie(movies.filter((data)=>data.category == cat))
  }
  return (
   <>
   <div className='btn' >
<button onClick={()=>setmovie(movies)} type="button" className="btn btn-outline-primary">All</button>
<button onClick={()=>filterBycatagorey('Action')} type="button" className="btn btn-outline-secondary">Action</button>
<button onClick={()=>filterBycatagorey('Thriller')} type="button" className="btn btn-outline-success">Thriller</button>
<button onClick={()=>filterBycatagorey('Animation')} type="button" className="btn btn-outline-danger">Animation</button>

<button onClick={()=>filterBycatagorey('Horror')} type="button" className="btn btn-outline-warning">Horror</button>
<button onClick={()=>filterBycatagorey('Drama')} type="button" className="btn btn-outline-info">Drama</button>
<button onClick={()=>filterBycatagorey('Sci-Fi')} type="button" className="btn btn-outline-light">Sci-Fi</button>
</div>
<div className='pink'>
  {movielist.map((data)=>(
  <div key={data.id} style={{maxWidth:'280px', textAlign:'center '}}>
    <div className='pinkl'>

<img src={data.poster_path}  />
  </div>
  <h5>{data.title}</h5>
  <p>{data.release_date}</p>
  </div>
  ))}

  </div>
      </>
    )
  }
  
  export default Movie;
