import axios from 'axios';

export default axios.create({
    baseURL:'https://b4d8-192-140-254-1.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});