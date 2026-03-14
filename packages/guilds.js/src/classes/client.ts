import type { ClientProps } from "@/types"
import { Gateway } from "@/classes/gateway"
import { RESTManager } from "@/classes/rest-manager"

/** Class representing a Discord client */
export class Client {
    #token: string

    /** Used for connecting to Discord's gateway */
    public gateway: Gateway

    /** Used for REST API calls */
    public rest: RESTManager

    /** Client token used for authorization */
    public get token() {
        return this.#token
    }

    /**
     * Instantiate a new Client
     * @param props Client props
     * @returns Client instance
     */
    public constructor(props: ClientProps) {
        if (!props || !props.gateway || !props.rest) {
            throw new TypeError("Invalid props provided")
        }

        this.gateway = props.gateway
        this.rest = props.rest
        this.#token = this.gateway.token

        return this
    }
}
