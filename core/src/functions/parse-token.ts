export function parseToken(token: string): string {
    if (token.startsWith("Bot ")) {
        return token
    } else {
        return `Bot ${token}`
    }
}
