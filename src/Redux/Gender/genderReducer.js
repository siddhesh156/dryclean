const initialState = {
    genderType: "gender"
}

const genderReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GENDER_TYPE": return {
            ...state,
            genderType: action.genderType
        }

        
        default: return state
    }
}

export default genderReducer