import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { APIKey } from "../../common/apis/MovieApiKey"
// import axios from "axios"
import MovieApi from "../../common/apis/MovieApi"


// const movieText = 'harry'
        // const link = `http://www.omdbapi.com/?t=${movieText}&apikey=${APIKey}`

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async ()=>{
    const response = await MovieApi
            .get("?s=harry&apikey=9989425f");            
            return response.data;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async ()=>{
    const response = await MovieApi
            .get("?s=friends&apikey=9989425f&type=series");            
            return response.data;
})

export const fetchAsyncDetails = createAsyncThunk('shows/fetchAsyncShows', async (id)=>{
    const response = await MovieApi
            .get(`?apikey=9989425f&i=${id}&Plot=full`);            
            return response.data;
})

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        movies:{},
        shows:{},
        details:{}
    },
    reducers: {
       
        removeSelctedDetails: (state) => {
            state.details = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state , {payload}) => {
            console.log("Fetched Successfully");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state , {payload}) => {
            console.log("Fetched Successfully");
            return {...state, shows: payload};
        },
        [fetchAsyncDetails.fulfilled]: (state , {payload}) => {
            console.log("Fetched Successfully");
            return {...state, details: payload};
        },
    }
})

export const {removeSelctedDetails} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getAllDetails = (state) => state.movies.details

export default movieSlice.reducer;