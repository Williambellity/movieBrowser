const initialState = {favoritesFilm: []}

function toggleFavorite(state = initialState, action) {
    let nextState
    switch(action.type){
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.imdbID === action.value.imdbID)
            if (favoriteFilmIndex !== -1) {
                // suppression
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter( (item,index) => index !== favoriteFilmIndex)
                }
            }
            else {
                nextState = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }
            // Permet de renvoyer state si nextState est undefined 
            return nextState || state
        default:
            return state
    }
    
}

export default toggleFavorite