import type { RESTManager } from "@/classes/rest-manager"
import type * as DiscordAPI from "@/types/api-types"

export type GatewayEventMap = {
    READY: [data: { user: any; session_id: string }]
}

export interface GatewayProps {
    intents: number
    rest: RESTManager
    token: string
}

export type HTTPMethod = "DELETE" | "GET" | "PATCH" | "POST" | "PUT"

export interface RESTManagerProps {
    token: string
}

export type { DiscordAPI }
