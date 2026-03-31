import type { Intents } from "@/constants"

export interface ClientProps {
    intents: IntentsResolvable
    token: string
}

export type IntentsResolvable = keyof typeof Intents | (keyof typeof Intents)[] | number
