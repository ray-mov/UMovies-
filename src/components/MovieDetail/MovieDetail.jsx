import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchAsyncDetails, getAllDetails , removeSelctedDetails} from "../../features/movies/MovieSlice"
import './movieDetails.scss'

function MovieDetail() {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getAllDetails)

    useEffect( () =>{
        dispatch(fetchAsyncDetails(imdbID));
        return () => {
            dispatch(removeSelctedDetails());
        }

    },[dispatch, imdbID])
  return (
    <div className="movie-section">
        {
            Object.keys(data).length === 0 ? (<div>....LOADING..</div>) : ( 

                <>
                 <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
                <span> IMDB Rating : {data.imdbRating}</span>
                <span> IMDB Vote :{data.imdbVote}</span>
                <span> Runtime : {data.Runtime}</span>
                <span> Year : {data.Year}</span>
            </div>
            <div className="movie-plot">
                {data.Plot}

            </div>
            <div className="movie-info">
                <div >
                    <span>Director</span>
                    <span>{data.Director}</span>
                </div>
                <div >
                    <span>Stars</span>
                    <span>{data.Actor}</span>
                </div>r
                <div >
                    <span>Director</span>
                    <span>{data.Director}</span>
                </div>
                <div >
                    <span>Director</span>
                    <span>{data.Director}</span>
                </div>

            </div>

        </div>
                </>
            )
        }
       

    </div>
  )
}

export default MovieDetail