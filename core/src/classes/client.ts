import type { ClientProps } from "@/types"
import { parseIntents } from "@/functions/parse-intents"
import { parseToken } from "@/functions/parse-token"

export class Client {
    #token: string

    public intents: number

    public constructor(props: ClientProps) {
        this.#token = parseToken(props.token)
        this.intents = parseIntents(props.intents)
    }

    public get token() {
        return this.#token
    }
}
