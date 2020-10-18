export const MEDICAL = "medical"




export const initState = {
    medical: {
        group1: {
            diabetes: {},
            hypertension: {},
            thyriod: {},
            insulinResistance: {},
            kidney: {},
            fattyLiver: {},
            foodAllergies: {},
            bloodTest: {},
        },

        group2: {
            cholesterol: {},
            triglycerides: {},
            iron: {},
            vitaminD: {},
            others: {}
        },

        group3: {
            constipation: {},
            bloating: {},
            glutenIntolerance: {},
            lactoseIntolerance: {}
        }   
    }
}


export const reducer = (state, action) => {
    const {type, payload} = action;
    const [a,b,c] = payload.name.split("-")
    switch (type) {
        case MEDICAL:   
         state.medical[a][b][c] = payload.value
         return {
             ...state
         };  
        default:
            return state;
    }
}