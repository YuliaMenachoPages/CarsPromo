import { Route, Routes } from "react-router-dom";
import {page} from "../utils/consts/Navigation";
import MainPage from "../pages/MainPage/MainPage";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage.tsx';
import ServicesPage from "../pages/ServicesPage/ServicesPage.tsx";
import SalesPage from "../pages/SalesPage/SalesPage.tsx";
import OffersPage from "../pages/OffersPage/OffersPage.tsx";
import CataloguePage from "../pages/CataloguePage/CataloguePage.tsx";

function AppRoutes() {
    return (
        <Routes>
                <Route path={page.mainPage} element={<MainPage />} />
                <Route path={page.cataloguePage} element={<CataloguePage />} />
                <Route path={page.offersPage} element={<OffersPage />} />
                <Route path={page.salesPage} element={<SalesPage />} />
                <Route path={page.servicesPage} element={<ServicesPage />} />
                <Route path={page.contactsPage} element={<ContactsPage />} />
                <Route path={page.errorPage} element={<ErrorPage />} />
        </Routes>
    );
}

export default AppRoutes;
