import axios from 'axios';

export const getId = () => axios.get('https://front-test.beta.aviasales.ru/search');

export const getPackTickets = (searchId) => axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
