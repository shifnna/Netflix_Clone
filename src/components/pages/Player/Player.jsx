import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTM0NTYwZDVlM2NlMzliNGQxM2M2YjAwYWVhMDA0YSIsIm5iZiI6MTczNjgzMzc2My40ODMsInN1YiI6IjY3ODVmYWUzMmIxZTQwZTgzZmJhZjhkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y3O8tqoDF6-9vilspMWGTtq_Dulv5AbD2sU6Fnl360g'
    }
  };

  const [apiData,setApiData] = useState({name:'',key:'',published_at:'',type:''})

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  const {id} = useParams()
  const navigate = useNavigate()

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width='90%' height='90%' title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
