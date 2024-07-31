import './App.css';
import { Board } from "./components/comp/Board";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Victory} from "./components/comp/Victory";

function App() {
    const boardArray = useSelector(state => state.board)
    const [winner, setWinner] = useState(null);


    useEffect(() => {
        let checkWinner = () => {
            let winner = null
            // console.log(boardArray)
            if(boardArray[0].figure === 1 && boardArray[3].figure === 1 && boardArray[6].figure === 1){
                winner = 1
            }
            if(boardArray[1].figure === 1 && boardArray[4].figure === 1 && boardArray[7].figure === 1) {
                winner = 1
            }
            if(boardArray[2].figure === 1 && boardArray[5].figure === 1 && boardArray[8].figure === 1) {
                winner = 1
            }
            if(boardArray[0].figure === 1 && boardArray[1].figure === 1 && boardArray[2].figure === 1){
                winner = 1
            }
            if(boardArray[3].figure === 1 && boardArray[4].figure === 1 && boardArray[5].figure === 1){
                winner = 1
            }
            if(boardArray[6].figure === 1 && boardArray[7].figure === 1 && boardArray[8].figure === 1){
                winner = 1
            }

            if(boardArray[0].figure === 0 && boardArray[3].figure === 0 && boardArray[6].figure === 0){
                winner = 0
            }
            if(boardArray[1].figure === 0 && boardArray[4].figure === 0 && boardArray[7].figure === 0) {
                winner = 0
            }
            if(boardArray[2].figure === 0 && boardArray[5].figure === 0 && boardArray[8].figure === 0) {
                winner = 0
            }
            if(boardArray[0].figure === 0 && boardArray[1].figure === 0 && boardArray[2].figure === 0){
                winner = 0
            }
            if(boardArray[3].figure === 0 && boardArray[4].figure === 0 && boardArray[5].figure === 0){
                winner = 0
            }
            if(boardArray[6].figure === 0 && boardArray[7].figure === 0 && boardArray[8].figure === 0){
                winner = 0
            }

            return winner
        }

        setWinner(checkWinner())
    }, [boardArray])

    console.log(winner)


  return (
    <div className="App">
        {winner === null ? <Board /> : <Victory winner={winner} />}
    </div>
  );
}

export default App;
