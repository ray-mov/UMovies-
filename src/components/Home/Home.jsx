import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing"


import { useDispatch } from "react-redux"
import {  fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/MovieSlice"

function Home() {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(fetchAsyncMovies());     
        dispatch(fetchAsyncShows());       
        
    },[dispatch])





  return (
    <div>S
        <div className="banner-image"></div>
        <MovieListing />
    </div>

    
  )
}

export default Home