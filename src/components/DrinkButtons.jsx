import './DrinkButtons.css';

export const DrinkButtons = () => {
    return (
        <>
        <h3>Would you like tea or coffee?</h3>
        <div className="button-group">
        <button className="button">Tea</button>
        <button className="button">Coffee</button>
        </div>
        </>
    );
};