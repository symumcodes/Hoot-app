import axios from 'axios';

export default axios.create({
    baseURL:'https://e0dd-192-140-254-1.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});