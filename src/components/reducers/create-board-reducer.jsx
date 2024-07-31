let initialState = [
        {id: 1, figure: null},
        {id: 2, figure: null},
        {id: 3, figure: null},
        {id: 4, figure: null},
        {id: 5, figure: null},
        {id: 6, figure: null},
        {id: 7, figure: null},
        {id: 8, figure: null},
        {id: 9, figure: null},
    ]

let ticTac = [1, 0, 1, 0, 1, 0, 1, 0, 1]


export const boardReducer = (state = initialState, action) => {
        if(action.type === 'GET-PIECE'){
            let firstFromArray = ticTac.shift()
            return state.map((elem) => {
                    if(elem.id === action.id){
                            if(elem.figure === null){
                                    return { ...elem, figure: firstFromArray }
                            }
                            return elem
                    }
                    return elem
            })
        }

        return state
}

export const ticTacFirstAction = (id) => {
        return {type: 'GET-PIECE', id}
}

