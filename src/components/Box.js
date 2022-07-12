export const Box = ({ onClick, cells }) => {
    return (
        <div className="box-grid" onClick={onClick}>
            <div className="box-cell" id="top-left">{cells[0][0]}</div>
            <div className="box-cell" id="top-middle">{cells[0][1]}</div>
            <div className="box-cell" id="top-right">{cells[0][2]}</div>
            <div className="box-cell" id="middle-left">{cells[1][0]}</div>
            <div className="box-cell" id="middle-middle">{cells[1][1]}</div>
            <div className="box-cell" id="middle-right">{cells[1][2]}</div>
            <div className="box-cell" id="bottom-left">{cells[2][0]}</div>
            <div className="box-cell" id="bottom-middle">{cells[2][1]}</div>
            <div className="box-cell" id="bottom-right">{cells[2][2]}</div>
        </div>
    )
}