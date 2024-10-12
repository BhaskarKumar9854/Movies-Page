import React,{useState,useEffect} from 'react'
import  './Meal.css';
import 'bootstrap/dist/css/bootstrap.css';

const Meal = () => {
 const [mealData, setmealData] = useState([])
  const [area, setarea] = useState(['Indian'])
  const [InputData, setInputData] = useState("")
    useEffect(() => {
        const fetchDatafromApi = async ()=>{
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const data = await api.json()
        console.log(data.meals)
     setmealData(data.meals)
      }
      fetchDatafromApi();
    }, [area]);

     const submithandler = async (e) => {
      e.preventDefault();
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${InputData}`);
  
  const data = await api.json()
  setmealData(data.meals);
  setInputData('');

     }

  return (
    <>

    <div className='btn'>
<button onClick={()=> setarea('Indian')}type="button" className="btn btn-outline-primary" >Indian</button>
<button onClick={()=> setarea('Canadian')}type="button" className="btn btn-outline-secondary">Canadian</button>
<button onClick={()=> setarea('American')}type="button" className="btn btn-outline-danger">American</button>
<button onClick={()=> setarea('Thai')}type="button" className="btn btn-outline-warning">Thai</button>
<button onClick={()=> setarea('British')}type="button" className="btn btn-outline-success">British</button>
<button onClick={()=> setarea('Russian')}type="button" className="btn btn-outline-info">Russian</button>

</div>
<div className='search'>
<form onSubmit={submithandler}>
  
<input onChange={(e)=> setInputData(e.target.value)} type='text' placeholder='Search here'/>
</form>
</div>
    <div className='Pink' >
      {mealData.map((data)=>(
        <div key={data.idMeal}>
<img className='Img'src={data.strMealThumb} alt=' '  style={{width:'300px',height:'300px',borderRadius:'10px',border: '2px solid yellow'}}/>
<h3>{data.strMeal}</h3>
        </div>
      ))
      }
    </div>
    </>
  )
}


export default Meal;
