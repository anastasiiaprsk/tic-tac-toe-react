export const Victory = (props) => {
    return (
        <div>
            {props.winner !== null ? `${props.winner} is win!` : null}</div>
    )
}