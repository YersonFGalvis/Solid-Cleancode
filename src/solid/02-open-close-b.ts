// import axios from 'axios';

import { HttpClient } from './02-open-close-c';


export class TodoService { 
    
    constructor(private HttpClient: HttpClient){} 
    
    async getTodoItems() {
        const { data } = await this.HttpClient.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {
    constructor(private HttpClient: HttpClient){} 
    async getPosts() {
        const { data } = await this.HttpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
    constructor(private HttpClient: HttpClient){} 
    async getPhotos() {
        const { data } = await this.HttpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}