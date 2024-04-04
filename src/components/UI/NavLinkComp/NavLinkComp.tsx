import {NavLink} from "react-router-dom";
import './NavLinkComp.scss';
import {ReactNode} from "react";

export interface INavLinkCompProps {
    direction: string;
    children: ReactNode;
    onClick?: () => void;
}

function NavLinkComp({direction, children, onClick}: INavLinkCompProps) {
    return (
        <div className="navLinkWrapper">
            <NavLink className="navLink" to={direction} onClick={onClick}>{children}</NavLink>
        </div>
    )
}

export default NavLinkComp;
