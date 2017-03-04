export const SAVE_CREDENTIALS = 'SAVE_CREDENTIALS'

export function saveCredentials(username, password) {
    return { type: SAVE_CREDENTIALS, username, password}
}