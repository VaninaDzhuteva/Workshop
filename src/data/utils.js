export function setUserData(usedData) {
    sessionStorage.setItem('userData', JSON.stringify(usedData));
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}