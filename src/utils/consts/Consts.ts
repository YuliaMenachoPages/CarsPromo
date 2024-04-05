import {page} from "./Navigation.ts";

export type TPromoHeader = {
    actionText: string,
    action: string,
}

export type TPromoBlock = {
    id: number,
    title: string,
    text: string,
    actionText: string,
    action: string,
}

export type TContacts = {
    address: string,
		latitude: string,
		longitude: string,
    schedule: string,
}

export type TNavMenu = {
    id: number,
    text: string,
    link: string,
}

const PROMO_HEADER = [
{
   actionText: 'Теперь услуги дилерского центра Вы можете можете получить онлайн!',
   action: 'promo header'
},
]
const PROMO_BLOCKS = [
    {
        id: 1,
        title: 'Диагностика автомобиля перед покупкой',
        text: 'Расскажем обо всех скрытых дефектах автомобиля с пробегом',
        actionText: 'Записаться',
        action: 'promo1',
    },
    {
        id: 2,
        title: 'Онлайн показ автомобиля по видеосвязи',
        text: 'Проведем онлайн-показ интересующего автомобиля в удобное для Вас время',
        actionText: 'Оставить заявку',
        action: 'promo2',
    },
    {
        id: 3,
        title: 'Онлайн бронирование',
        text: 'Забронируйте понравившийся автомобиль без визита в дилерский центр',
        actionText: 'Забронировать',
        action: 'promo3',
    },
    {
        id: 4,
        title: 'Онлайн оценка автомобиля с пробегом',
        text: 'Узнайте предварительную стоимость автомобиля за 1 мин, указав его параметры',
        actionText: 'Оценить',
        action: 'promo4',
    },
]

const CONTACTS = [
    {
        address: 'Олимпийский просп., 5, стр. 1, Москва',
				latitude: '55.784395',
				longitude: '37.622244',
        schedule: '9.00 - 21.00 (ежедневно)',
    },
]

const NAV_MENU = [
    {
        id: 1,
        text: 'Автомобили в наличии',
        link: page.cataloguePage,
    },
    {
        id: 2,
        text: 'Спецпредложения',
        link: page.offersPage,
    },
    {
        id: 3,
        text: 'Продать авто',
        link: page.salesPage,
    },
    {
        id: 4,
        text: 'Сервис',
        link: page.servicesPage,
    },
    {
        id: 5,
        text: 'Контакты',
        link: page.contactsPage,
    }
]

export {PROMO_HEADER, PROMO_BLOCKS, CONTACTS, NAV_MENU}
