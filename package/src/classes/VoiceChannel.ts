import type { APIChannel, APIGuildVoiceChannel } from "discord-api-types/v10";
import type { ChannelType } from "@/types";
import { Channel } from "@/classes/Channel";
import { ChannelTypes } from "@/utils/constants";
import { Client } from "@/classes/Client";

/** Class representing a voice channel in a guild */
export class VoiceChannel extends Channel {
    public type: ChannelType = ChannelTypes.GuildVoice;

    /**
     * Instantiate a new voice channel
     * @param client Associated client
     * @param data Discord API channel data
     * @returns VoiceChannel object
     */
    public constructor(client: Client, data: APIGuildVoiceChannel) {
        super(client, data as APIChannel);
        return this;
    }
}
