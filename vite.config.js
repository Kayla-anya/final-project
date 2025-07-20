import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'


export default defineConfig({
  base: '/final-project',    // right here! your repository name
  plugins: [svelte()],
})