import { get } from "./api.js"

const endpoints = {
    allMovies: '/classes/Movies'
}

export async function getAllMovies() {
    return get(endpoints.allMovies);
}