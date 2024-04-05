import {CONTACTS} from "../../utils/consts/Consts.ts";
import './Contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__locationWrapper">
                <a href={`https://yandex.ru/maps/?pt=${CONTACTS[0].longitude},${CONTACTS[0].latitude}&z=16&l=map`} target="_blank" rel="noopener noreferrer"
            className="contacts__textWrapper contacts__textWrapper_type_location">
                    <div className="contacts__textIcon contacts__textIcon_type_mapPin"/>
                    <p className="contacts__text">{CONTACTS[0].address}</p>
                </a>
                <a href={`https://yandex.ru/maps/?rtext=~${CONTACTS[0].latitude}, ${CONTACTS[0].longitude}`} target="_blank" rel="noopener noreferrer"
            className="contacts__textWrapper contacts__textWrapper_type_location">
                    <div className="contacts__textIcon contacts__textIcon_type_TG"/>
                    <p className="contacts__text">Проложить маршрут</p>
                </a>
            </div>
            <div className="contacts__textWrapper">
                <div className="contacts__textIcon contacts__textIcon_type_clock"/>
                <p className="contacts__text">{CONTACTS[0].schedule}</p>
            </div>
        </div>
    );
};

export default Contacts;
