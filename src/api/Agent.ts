import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://randomuser.me/api';

const responseBody = (response:AxiosResponse) => response.data;

const requests ={
    get: (url:string) => axios.get(url).then(responseBody)
}


const UserActivity ={
    list:(pageNumber: number,pageSize: number) => requests.get(`?page=${pageNumber}&results=${pageSize}`)
};

const agent ={
    UserActivity
}

export default agent;