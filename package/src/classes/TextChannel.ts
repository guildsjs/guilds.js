import type { APIChannel, APITextBasedChannel } from "discord-api-types/v10";
import type { ChannelType } from "@/types";
import { Channel } from "@/classes/Channel";
import { ChannelTypes } from "@/utils/constants";
import { Client } from "@/classes/Client";

/** Class representing a text channel in a guild */
export class TextChannel extends Channel {
    public type: ChannelType = ChannelTypes.GuildText;

    /**
     * Instantiate a new text channel
     * @param client Associated client
     * @param data Discord API channel data
     * @returns TextChannel object
     */
    public constructor(
        client: Client,
        data: APITextBasedChannel<typeof ChannelTypes.GuildText>
    ) {
        super(client, data as APIChannel);
        return this;
    }
}
