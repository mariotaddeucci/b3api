export default {
    head: {
        titleTemplate: 'B3Api',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Dados dos ativos da B3 com 15 minutos de atraso de forma simples e gratuita.' }
        ]
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots'
    ],
    css: [
        { src: 'bulma/css/bulma.min.css' },
        { src: 'github-markdown-css/github-markdown.css' }
    ],
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: 'G-B8E0VC4XE4'
        }]
    ],
    sitemap: {
        routes: ['/pkg/rest', '/pkg/node', '/pkg/python']
    },
    robots: {
        UserAgent: '*'
    }
}
