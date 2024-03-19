import axios from 'axios';
const AuthService = {
    login: (email: string, password: string) => {
        return axios.post('/auth/login', { email, password });
    },
    register: (email: string, password: string) => {
        return axios.post('/auth/register', { email, password });
    },
    logout: () => {
        return axios.post('/auth/logout');
    },
    getUser: () => {
        return axios.get('/auth/user');
    },
    signUp: (email: string, password: string, first_name: string, last_name: string, gender: string, file: string) => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append("gender", gender);
        formData.append("file", file);
        return axios.post('http://localhost:3000/signup', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};
export default AuthService;
