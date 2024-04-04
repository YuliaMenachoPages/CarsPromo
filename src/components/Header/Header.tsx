import "./Header.scss";
import Logo from "../UI/Logo/Logo.tsx";
import Navigation from "../Navigation/Navigation.tsx";
import Contacts from "../Contacts/Contacts.tsx";

function Header() {
    return (
        <header className="header">
<div>
    <Logo />
    <Navigation />
</div>
<Contacts />
        </header>
    )
}

export default Header;
