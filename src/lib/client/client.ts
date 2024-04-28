import axios, { AxiosRequestConfig } from 'axios';

const baseURL = '/';

const createClient = () => {
    const instance = axios.create({
        baseURL,
    });

    return {
        get: (url: string, options: AxiosRequestConfig = {}) => instance.get(url, options),
        post: (url: string, data: any, options: AxiosRequestConfig = {}) => instance.post(url, data, options),
        put: (url: string, data: any, options: AxiosRequestConfig = {}) => instance.put(url, data, options),
        patch: (url: string, data: any, options: AxiosRequestConfig = {}) => instance.patch(url, data, options),
        delete: (url: string, options: AxiosRequestConfig = {}) => instance.delete(url, options),
    };
};

const client = createClient();
// eslint-disable-next-line import/prefer-default-export
export { client };
