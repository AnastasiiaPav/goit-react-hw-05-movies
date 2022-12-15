const KEY = 'ac9cb1355cb7bf1b65c12a841cabe9f3'
const BASE_URL= 'https://api.themoviedb.org/3'

export const fetchPopularFilm = () => {
  return fetch (`${BASE_URL}/trending/movie/day?api_key=${KEY}`) 
} 

export const fetchFilmId = (movie_id) => {
 return fetch ( `${BASE_URL}/movie/${movie_id}?api_key=${KEY}`)
}

export const fetchInformFilm = (movie_id) => {
    return fetch( `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`)
}

export const fetchActorFilm = (movie_id) => {
    return fetch (`${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}`)
}

export const fetchViewsFilm = (query) => {
    return fetch (`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`)
}