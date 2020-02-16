import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WkKOym17ynTu5b5i_hZjAkTavJ0Dn4EqwaPlOF8NDSE'
    }
});