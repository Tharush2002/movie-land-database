import React from 'react'

const MovieCard = ({movie})=>{
    return (
        <>
            <div className='movie'>
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/310x460'} alt={movie.title}/>
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
        </>
    )
}

export default MovieCard;