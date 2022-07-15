export const Score = ({ winner }) => {

    return (
        <div className="score">
            <h2>X points: <span className="point">{winner["X"]}</span></h2>
            <h2>O points: <span className="point">{winner["O"]}</span></h2>
        </div>
    );
};