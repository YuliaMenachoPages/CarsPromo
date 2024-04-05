import {useState} from "react";
import NavLinkComp from "../UI/NavLinkComp/NavLinkComp.tsx";
import Burger from "../UI/Burger/Burger.tsx";
import {NAV_MENU} from "../../utils/consts/Consts.ts";
import ColoredButton from "../UI/Button/ColoredButton/ColoredButton.tsx";
import './Navigation.scss';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleLinkClick() {
        setIsMenuOpen(false);
    }

    function handleBurgerClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navigation">
                    <nav className="navigation__wrapper hidden">
                        <ul className="navigation__list">
                            {NAV_MENU?.map(item => (
                                <li key={item.id} className="navigation__item">
                                    <NavLinkComp children={item.text} direction={item.link}/>
                                </li>
                            ))}
                        </ul>
                        <ColoredButton>Заказать звонок</ColoredButton>
                    </nav>
            <div>
            <nav className={`burger__items ${isMenuOpen && "burger__items_active"}`}>
                        <ul className="burger__list">
                            {NAV_MENU?.map(item => (
                                <li key={item.id} className="navigation__item">
                                    <NavLinkComp children={item.text} direction={item.link} onClick={handleLinkClick}
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
            </div>
                    <Burger handleBurgerClick={handleBurgerClick} isMenuOpen={isMenuOpen}/>
        </div>
    )
}

export default Navigation;
