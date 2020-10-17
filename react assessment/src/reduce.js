export const MEDICAL = "medical"



export const initState = {
    medical: {
    
    }
}


export const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "medical":
           return {
            ...state,
            medical: {
                ...state.medical,
                [payload.name]: payload.value
            }
           }
            
        default:
            return state;
    }
}