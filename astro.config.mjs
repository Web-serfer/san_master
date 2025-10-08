// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import solidJs from '@astrojs/solid-js';
import icon from "astro-icon";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({integrations: [solidJs(), icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: 'standalone'
  }),
  output: "server",
});