import {CONTACTS} from "../../utils/consts/Consts.ts";
import './Contacts.scss';
const Contacts = () => {
    return (
        <div>
            <div>
            <div>
                <div />
                <p>{CONTACTS[0].address}</p>
            </div>
            <div>
                <div />
                <p>Проложить маршрут</p>
            </div>
                </div>
                    <div>
                        <div />
                        <p>`{CONTACTS[0].schedule}`</p>
                    </div>
        </div>
    );
};

export default Contacts;
