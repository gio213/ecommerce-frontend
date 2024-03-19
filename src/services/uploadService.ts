import axios from 'axios';


const UploadService = {
    upload: (file: string) => {
        const formData = new FormData();
        formData.append('file', file);
        return axios.post('http://localhost:3000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};

export default UploadService;