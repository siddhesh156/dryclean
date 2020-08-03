const initialState = {
    genderType: "gender",
    categoryType: "Shirt",
   
}

const genderReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GENDER_TYPE": return {
            ...state,
            genderType: action.genderType
        }

        case "CATEGORY_TYPE": return {
            ...state,
            categoryType: action.categoryType
        }

        
        default: return state
    }
}

export default genderReducer