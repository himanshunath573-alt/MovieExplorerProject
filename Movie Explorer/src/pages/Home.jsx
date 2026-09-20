import { useState , useEffect , useRef } from "react"
import MovieList from "../components/MovieList"

//import {useState , useEffect , useRef} from 'react'
function Home(){
	const[movies, SetMovies] = useState([])

	const fetchMovies = async (query) => {
		const res = await fetch(`http://www.omdbapi.com/?apikey=9236f6af&s=${query}`)
		const data = await res.json();
		console.log(data);
		SetMovies(data.Search)
	}
	
  return (
    <div className="home">
		<form>
			<input className="searchInput" placeholder="Search for a movie..."/>
			<button type="submit">Search 🔎</button>
		</form>
	  <MovieList/>
	</div>	
  )
}

export default Home