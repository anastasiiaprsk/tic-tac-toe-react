import {ticTacFirstAction} from "../reducers/create-board-reducer";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


export const Square = (props) => {
    let dispatch = useDispatch()

    let funcXorO = () =>  {
        let id = props.id
        dispatch(ticTacFirstAction(id))
    }

    return (
        <div onClick={funcXorO}   className='square'
             style={{
                 // height: "50px",
                 // width: "50px",
                 // display: "inline-block",
                 // border: '2px solid red'
                 height: "50px",
                 width: "50px",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 border: '2px solid red'

             }}>
            {props.figure === null ? null : props.figure === 1 ? 'X' : '0' }
            {/*//здесь отрисовываем компоненту крестик и*/}
        </div>
    )
}