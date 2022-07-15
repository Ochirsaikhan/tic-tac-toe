export const Score = ({ winner }) => {

    return (
        <div className="score">
            <h2>X points: {winner["X"]}</h2>
            <h2>O points: {winner["O"]}</h2>
        </div>
    );
};