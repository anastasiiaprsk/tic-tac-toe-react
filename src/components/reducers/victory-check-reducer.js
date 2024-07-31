// let initialState = {id: null}
//
// export const victoryCheckReducer = (state = initialState, action) => {
//     if(action.type === 'VICTORY-CHECK'){
//         let board = action.board
//         console.log('test', board[0], board[3], board[6])
//         if(board[0].figure === 1 && board[3].figure === 1 && board[6].figure === 1){
//
//             return {...state, id: 1}
//         }
//         return state
//     }
//
//     return state
//
// }
//
// export const victoryCheckAction = (board) => {
//     return {type: 'VICTORY-CHECK', board}
// }