import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    name: action.placeName,
                    key: 'key_' + Math.random(),
                    image: {
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Protein_EED_PDB_3IIW.png'
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((item) => {
                    return item.key !== state.selectedPlace.key;
                })
            };

        default:
            return state;
    }
}

export default reducer;