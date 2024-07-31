import {Square} from "./Square";
import {useSelector} from "react-redux";
import classes from './board.module.css'
import {useEffect} from "react";
import {useState} from "react";


export const Board = () => {
    const boardArray = useSelector(state => state.board)
    // const [winner, setWinner] = useState(null);
    //
    //
    //
    // useEffect(() => {
    //     let checkWinner = () => {
    //         let winner = null
    //         // console.log(boardArray)
    //         if(boardArray[0].figure === 1 && boardArray[3].figure === 1 && boardArray[6].figure === 1){
    //              winner = 1
    //         }
    //         if(boardArray[1].figure === 1 && boardArray[4].figure === 1 && boardArray[7].figure === 1) {
    //             winner = 1
    //         }
    //         if(boardArray[2].figure === 1 && boardArray[5].figure === 1 && boardArray[8].figure === 1) {
    //             winner = 1
    //         }
    //         if(boardArray[0].figure === 1 && boardArray[1].figure === 1 && boardArray[2].figure === 1){
    //             winner = 1
    //         }
    //         if(boardArray[3].figure === 1 && boardArray[4].figure === 1 && boardArray[5].figure === 1){
    //             winner = 1
    //         }
    //         if(boardArray[6].figure === 1 && boardArray[7].figure === 1 && boardArray[8].figure === 1){
    //             winner = 1
    //         }
    //
    //         return winner
    //     }
    //
    //     setWinner(checkWinner())
    // }, [boardArray])


    return (
        <div className={classes.board}>
            {boardArray.map((elem) =>
                <Square key={elem.id}
                        id={elem.id}
                        figure={elem.figure}
                />
            )}

        </div>
    )
}