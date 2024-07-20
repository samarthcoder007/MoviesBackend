import { useState } from "react"
import React from "react"
import { Request } from "./Request.jsx"
import axios from "axios"
import "./index.css"

export function Movie(){
    const [myData,setMyData] = useState([])

    const getmoviesAll = async () => {
        try{
        const res = await axios.get("http://localhost:3004/movie/")
        setMyData(res.data)
        }catch(err){
            alert(Object.values(err.response.data) + ".");
        }
    }
    
    const getmoviesOne = async (name) => {
        try{
        const res = await axios.get(`http://localhost:3004/movie/${name}`)
        setMyData([res.data])
        }catch(err){
            alert(Object.values(err.response.data) + ".");
        }
    }

    const patchMovie = async (mov) => {
        try{
        const res = await axios.patch(`http://localhost:3004/movie/${mov.name}`, {
            name: mov.name,
            yearOfRelease: mov.yearOfRelease,
            genre: mov.genre,
            leadMaleActor: mov.leadMaleActor,
            leadFemaleActor: mov.leadFemaleActor,
            url: mov.url
        })
        setMyData([res.data])
        }catch(err){
            alert(Object.values(err.response.data) + ".");
        }
    }
    
    const deletemovie = async (name) => {
        try{
        const res = await axios.delete(`http://localhost:3004/movie/${name}`)
        setMyData(currentmyData => {
            return currentmyData.filter(movie => movie.name !== res.data.name)
        })
        }catch(err){
            alert(Object.values(err.response.data) + ".");
        }
    }
    
    const post = async (mov) => {
        try{
       const res = await axios.post("http://localhost:3004/movie",{
            name: mov.name,
            yearOfRelease: mov.yearOfRelease,
            genre: mov.genre,
            leadMaleActor: mov.leadMaleActor,
            leadFemaleActor: mov.leadFemaleActor,
            url: mov.url
        })
        setMyData(currentmyData => {
            return [...currentmyData,res.data]
        })
        }catch(err){
            alert(Object.values(err.response.data) + ".");
        }
    }

    return (<>
         <Request post={post} deletemovie={deletemovie} getmoviesOne={getmoviesOne} getmoviesAll={getmoviesAll} patchMovie={patchMovie}/>
        <div className="superCard">
           {myData.map(movie => {
              return (
                 <div key={movie.id} className="card">
                    <img src={movie.url} alt="Movie image" height={"250vh"}/>
                    <h1>Movie's name: {movie.name}</h1>
                    <h2>Movie's year of release: {movie.yearOfRelease}</h2>
                    <h2>Genre: {movie.genre}</h2>
                    <h2>Lead Male Actor: {movie.leadMaleActor}</h2>
                    <h2>Lead Female Actor: {movie.leadFemaleActor}</h2>
                 </div>
              )
           })}
        </div>
      </>
     )
}


