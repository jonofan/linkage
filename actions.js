export const SAVE_CREDENTIALS = 'SAVE_CREDENTIALS'
export const LOGOUT = 'LOGOUT'

export function saveCredentials(credentials) {
    return { type: SAVE_CREDENTIALS, credentials}
}

export function logout() {
    return {type: LOGOUT}
}