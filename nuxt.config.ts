// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [{ name: 'description', content: 'Everything about Nuxt3' }],
            link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }]
        }
    },
    runtimeConfig: {
        supaBaseUrl: process.env.SUPABASE_URL,
        supaBaseKey: process.env.SUPABASE_KEY
    }
});
