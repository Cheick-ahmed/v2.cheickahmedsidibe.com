export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    static: {
    	prefix: false
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        htmlAttrs : {
            lang : 'fr-FR'
        },
        script: [
            {
                src: "https://cdn.splitbee.io/sb.js",
                async: true,
            }
        ],
        meta : [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Hello, je suis Ahmed ! développeur fullstack Laravel - Vue.js basé à Paris.' },
            { hid: 'type', name: 'type', content: 'website' },
            { hid : 'language', name : 'language', content : 'fr' }
        ],
        link: [
            { hid: 'canonical', name: 'canonical', content: 'https://cheickahmedsidibe.com' },
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
            { rel : 'stylesheet', href : 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap' }
        ]
    },
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: ['@nuxtjs/tailwindcss'],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ],

    sitemap : {
     path : '/sitemap.xml',
     hostname : 'https://cheickahmedsidibe.com',
     routes: []
 },

 robots: {
     UserAgent: '*',
     Allow : '/',
     sitemap : 'https://cheickahmedsidibe.com/sitemap.xml'
 },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
}
