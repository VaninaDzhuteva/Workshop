import { getUserData } from "./utils.js";

const hostname = 'https://parseapi.back4app.com/';
const appId = 'jWTjxWRGxwEAr7lsago7sEhEapaLBZLpROvDkB3c';
const apiKey = 'dxSZ2CrHxtt68nc9zhlqphvZTPRUf2PvvuKPnXj5';

async function request(method, url, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json',
        options.body = JSON.stringify(data);
    }

    // Todo add authentication
    const userData = getUserData();
    if (userData) {
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    const res = await fetch(hostname + url, options);

    // response validation
    if (!res.ok) {
        const error = await res.json();
        throw new Error(`${error.code} ${error.error}`);
        
    }
    
    if (res.status == 204) {
        return res;
    }

}

export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);