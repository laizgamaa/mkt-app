const withPWA = require('next-pwa')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development'
	},
	async rewrites() {
		return [
			{
				destination: '/about/about',
				source: '/quem-somos'
			},
			{
				destination: '/alumni/alumni',
				source: '/alumni'
			},
			{
				destination: '/cart/cart',
				source: '/carrinho'
			},
			{
				destination: '/contact/contact',
				source: '/contato'
			},
			{
				destination: '/course/:slug*',
				source: '/curso/:slug*'
			},
			{
				destination: '/graduations/graduations',
				source: '/especializacoes'
			},
			{
				destination: '/graduations/graduations',
				source: '/especializacao'
			},
			{
				destination: '/home/home',
				source: '/'
			},
			// {
			// 	destination: '/login/login',
			// 	source: '/entrar'
			// },
			{
				destination: '/masterdegrees/masterdegrees',
				source: '/mestrados'
			},
			{
				destination: '/masterdegree/masterdegree',
				source: '/mestrado'
			},
			{
				destination: '/order-confirmation/order-confirmation',
				source: '/pedido-realizado'
			},
			{
				destination: '/register/register',
				source: '/cadastro'
			},
			{
				destination: '/search-result/search-result',
				source: '/resultado-de-busca'
			},
			{
				destination: '/undergraduations/undergraduations',
				source: '/graduacoes'
			},
			{
				destination: '/undergraduation/undergraduation',
				source: '/graduacao'
			},
			{
				destination: '/where-we-are/where-we-are',
				source: '/onde-estamos'
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/about/about',
				destination: '/quem-somos',
				permanent: false
			},
			{
				source: '/alumni/alumni',
				destination: '/alumni',
				permanent: false
			},
			{
				source: '/cart/cart',
				destination: '/carrinho',
				permanent: false
			},
			{
				source: '/contact/contact',
				destination: '/contato',
				permanent: false
			},
			{
				source: '/course/:slug*',
				destination: '/curso/:slug*',
				permanent: false
			},
			{
				source: '/graduations/graduations',
				destination: '/especializacoes',
				permanent: false
			},
			{
				source: '/graduations/graduations',
				destination: '/especializacao',
				permanent: false
			},
			{
				source: '/home/home',
				destination: '/',
				permanent: true
			},
			// {
			// 	source: '/login/login',
			// 	destination: '/entrar',
			// 	permanent: false
			// },
			{
				source: '/masterdegrees/masterdegrees',
				destination: '/mestrados',
				permanent: false
			},
			{
				source: '/masterdegree/masterdegree',
				destination: '/mestrado',
				permanent: false
			},
			{
				source: '/order-confirmation/order-confirmation',
				destination: '/pedido-realizado',
				permanent: false
			},
			{
				source: '/register/register',
				destination: '/cadastro',
				permanent: false
			},
			{
				source: '/search-result/search-result',
				destination: '/resultado-de-busca',
				permanent: false
			},
			{
				source: '/undergraduations/undergraduations',
				destination: '/graduacoes',
				permanent: false
			},
			{
				source: '/undergraduation/undergraduation',
				destination: '/graduacao',
				permanent: false
			},
			{
				source: '/where-we-are/where-we-are',
				destination: '/onde-estamos',
				permanent: false
			}
		]
	}
})
