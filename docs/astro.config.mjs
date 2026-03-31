"client:only"

import { defineConfig } from "astro/config"
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc"
import starlight from "@astrojs/starlight"
import rapideTheme from "starlight-theme-rapide"

export default defineConfig({
    site: "https://guilds.js.org",
    integrations: [
        starlight({
            title: "guilds.js",
            favicon: "favicon.svg",
            plugins: [
                starlightTypeDoc({
                    entryPoints: ["../packages/core/src/index.ts"],
                    tsconfig: "../packages/core/tsconfig.json",
                    output: "api",
                }),
                rapideTheme(),
            ],
            expressiveCode: { themes: ["vitesse-dark"] },
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/guildsjs/guilds.js",
                },
            ],
            sidebar: [
                typeDocSidebarGroup,
                { label: "Guide", autogenerate: { directory: "guide" } },
            ],
        }),
    ],
})
