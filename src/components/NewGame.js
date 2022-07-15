export const NewGame = ({ onClick }) => {

    return (
        <div>
            <form onSubmit={onClick}>
                <button className="btn">
                    NEW GAME
                </button>
            </form>
        </div>
    );
};