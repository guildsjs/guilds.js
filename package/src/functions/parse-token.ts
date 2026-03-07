export function parseToken(token: string): string {
    if (typeof token !== "string" || token === undefined || token === null) {
        throw new TypeError("Expected token to be a string")
    }

    if (token.trim().toLowerCase().startsWith("bot ")) {
        return token
    } else {
        return `Bot ${token}`
    }
}
