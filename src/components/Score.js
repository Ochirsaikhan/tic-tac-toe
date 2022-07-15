export const Score = ({ winner }) => {

    return (
        <div className="score">
            <h1>X: {winner.X}</h1>
            <h1>O: {winner.O}</h1>
        </div>
    );
};