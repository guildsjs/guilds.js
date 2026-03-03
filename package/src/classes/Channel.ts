import type { APIChannel } from "discord-api-types/v10";
import { Client } from "@/classes/Client";

/**
 * Class representing a Discord channel
 * @see https://docs.discord.com/developers/resources/channel#channel-object
 */
export class Channel {
    public client: Client;
    public id: string;
    public name: string;
    public rawData: APIChannel;

    /**
     * Instantiate a new channel
     * @param client Associated client
     * @param data Discord API channel data
     * @returns Channel object
     */
    public constructor(client: Client, data: APIChannel) {
        if (!client || !(client instanceof Client)) {
            throw new TypeError("Invalid client provided");
        }

        this.client = client;
        this.id = data.id;
        this.name = data.name!;
        this.rawData = data;

        return this;
    }
}
