
export const getGenderType = (data) => {
    return (dispatch) => {
       
        dispatch({ type: "GENDER_TYPE", genderType: data })
    }
}