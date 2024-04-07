import './Burger.scss';

interface IBurgerProps {
    isMenuOpen: boolean,
    handleBurgerClick: () => void,
}

function Burger({isMenuOpen, handleBurgerClick}: IBurgerProps) {
    return (
        <div className={`burger ${isMenuOpen && "burger_active"}`}>
            <form className="burger__container">
                <input
                    className="burger__checkbox"
                    type="checkbox"
                    onChange={handleBurgerClick}
                    checked={isMenuOpen}
                />
                <div className="burger__wrapper">
                    <span className="burger_line burger_line_1"></span>
                    <span className="burger_line burger_line_2"></span>
                    <span className="burger_line burger_line_3"></span>
                </div>
            </form>
        </div>
    )
}

export default Burger;
