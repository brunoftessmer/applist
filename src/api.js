import axios from 'axios';

const api = axios.create({
  baserURL = 'https://api.git.com',
});

export default api;