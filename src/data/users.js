import { post } from "./api.js";
import { setUserData } from "./utils.js";

const endpoints = {
    register: '/users',
    login: '/login',
    logout: '/logout'
};

export async function register(user) {
    const result = await post(endpoints.register, usedData);

    const userData = {
        id: result.objectId,
        sessionToken: result.sessionToken
    }

    setUserData(userData);
}

export async function login(user) {
    const result = await post(endpoints.login, usedData);

    const userData = {
        id: result.objectId,
        sessionToken: result.sessionToken
    }

    setUserData(userData);
}

export async function logout() {
    return post(endpoints.logout)
}