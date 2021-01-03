<template>
	<div>
		<section>
			<div class="max-w-5xl mx-auto px-4 sm:px-6 py-48">
				<div>
					<a href="https://www.malt.fr/profile/cheickahmedsidibe" target="_blank" rel="nofollow noopener noreferrer" class="animate-bounce relative inline-flex items-center px-10 py-3 text-base font-medium rounded text-white bg-black hover:border-black focus:outline-none transition duration-500">
						<span>Disponible en freelance</span>
						<span class="h-6 w-6 absolute top-0 right-0 block bg-white ring ring-white transform -translate-y-1/2 translate-x-1/2 bg-green-100 rounded-full flex items-center justify-center" aria-hidden="true">
							<span class="h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>
						</span>
					</a>
					<h1 class="mt-4 text-3xl leading-10 sm:text-4xl sm:mt-6 tracking-wide font-extrabold text-black lg:text-5xl xl:text-6xl xl:leading-tight">
						<span class="block xl:inline">
							Hello, je suis Ahmed ! développeur fullstack Laravel Vue.js basé à Paris
						</span>
						<span class="block"></span>
					</h1>

				</div>
			</div>
		</section>

		<section>
			<div class="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:pb-32 xl:pb-40">
				<div>
					<h2 class="leading-6 font-semibold tracking-wide text-blue-600 uppercase mb-3">qui suis-je ?</h2>
					<p class="text-3xl sm:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">Moi en quelques mots</p>
					<p class="text-lg sm:text-base sm:text-2xl text-gray-500 font-medium sm:leading-10 space-y-6 mb-6">
						Fort de plus de 3 ans d'expérience dans le développement web et spécialisé sur les frameworks <strong>Laravel</strong>, <strong>VueJS </strong> et <strong>NuxtJS</strong>, je réponds à tous vos besoins de conception de sites web sur-mesure. <br />
						Mes technologies de prédilection étant <strong>Laravel</strong>, <strong>VueJS </strong>, <strong>NuxtJS</strong> et <strong>TailwindCSS</strong>, j’ai aussi quelques expériences réussies en <strong>React</strong> et <strong>Symfony</strong>.
					</p>
				</div>
			</div>
		</section>

		<section>
			<div>
				<div class="max-w-5xl mx-auto px-4 sm:px-6">
					<h2 class="leading-6 font-semibold tracking-wide text-blue-600 uppercase mb-3">Projets</h2>
					<p class="text-3xl sm:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">Mes derniers projets</p>
				</div>

				<div class="mt-14 divide-y divide-gray-200">
					<!-- Combimulstisport -->
					<div>
						<div class="pb-16">
							<div class="max-w-6xl mx-auto px-4 sm:px-0">
								<div class="max-w-5xl sm:px-4 sm:px-6 mx-auto sm:space-y-2 mb-10">
									<h2 class="text-base sm:text-2xl text-gray-500">Combimultisport</h2>
									<h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">Site web</h3>
								</div>
								<div>
									<figure>
										<img class="relative rounded-lg shadow-xl mx-auto" src="~assets/images/combimultisport.png" alt="App screenshot">
									</figure>
								</div>
								<div class="max-w-5xl mt-10 sm:px-4 sm:px-6 mx-auto">
									<h4 class="mb-2 text-2xl leading-none font-extrabold sm:text-3xl tracking-tight">
										<b>Site de paris sportifs</b>
									</h4>
									<p class="mb-6 max-w-2xl font-medium">
										Réfonte du site de paris sportifs <a href="https://www.combimultisport.com" target="_blank" rel="nofollow noopener noreferrer">combimultisport.com</a> qui permet à ses abonnés de recevoir des pronostics réalisés par des parieurs professionnels.
									</p>
									<Badge class="mr-2 sm:mr-3 mt-2 sm:mt-0" size="small" v-for="(skill, index) in ['Laravel', 'Vue.Js', 'Nuxt.Js', 'API','TailwindCSS'] " :key="index">
										{{ skill }}
									</Badge>
								</div>
							</div>
						</div>
					</div>

					<!-- OctoProfile -->
					<div class="bg-gray-50">
						<div class="py-10 sm:pt-24 sm:pb-16">
							<div class="max-w-6xl mx-auto px-4 sm:px-0">
								<div class="max-w-5xl sm:px-4 sm:px-6 mx-auto mb-10 sm:space-y-2">
									<h2 class="text-base sm:text-2xl text-gray-500">Octoprofile</h2>
									<h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">Site web</h3>
								</div>
								<div>
									<figure>
										<nuxt-link :to=" { name : '' } " class="mt-1 text-blue-500 font-medium">
											<img class="relative rounded-lg shadow-2xl mx-auto" src="~assets/images/octoProfile.png" alt="App screenshot">
										</nuxt-link>
									</figure>
								</div>
								<div class="max-w-5xl mt-10 sm:px-4 sm:px-6 mx-auto">
									<h4 class="mb-2 text-2xl leading-none font-extrabold sm:text-3xl tracking-tight">
										<b>Profile Github</b>
									</h4>
									<p class="mb-6 max-w-xl font-medium">
										Développement d'un site web permettant de voir de façon syntétisée son profil github (projets, top langages, repositories, ...)
									</p>
									<Badge class="mr-2 sm:mr-3 mt-2 sm:mt-0" size="small" v-for="(skill, index) in ['Nuxt.Js', 'Github API', 'TailwindCSS'] " :key="index">
										{{ skill }}
									</Badge>
								</div>
							</div>
						</div>
					</div>

					<!-- Kounghany Nafa  -->
					<div>
						<div class="py-10 sm:pt-24 sm:pb-16">
							<div class="max-w-6xl mx-auto px-4 sm:px-0">
								<div class="max-w-5xl sm:px-4 sm:px-6 mx-auto mb-10 sm:space-y-2">
									<h2 class="text-base sm:text-2xl text-gray-500">Kounghany</h2>
									<h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">Site web</h3>
								</div>
								<div>
									<figure>
										<nuxt-link :to=" { name : '' } " class="mt-1 text-blue-500 font-medium">
											<img class="relative rounded-lg shadow-xl mx-auto" src="~assets/images/kounghany_landing.png" alt="App screenshot">
										</nuxt-link>
									</figure>
								</div>
								<div class="max-w-5xl mt-10 sm:px-4 sm:px-6 mx-auto">
									<h4 class="mb-2 text-2xl leading-none font-extrabold sm:text-3xl tracking-tight">
										<b>Site association</b>
									</h4>
									<p class="mb-6 max-w-xl font-medium">
										Création du site vitrine d'une association à but non lucratif permettant de créer des liens entre les ressortissants d'un village du Sénégal.
									</p>
									<Badge class="mr-2 sm:mr-3 mt-2 sm:mt-0" size="small" v-for="(skill, index) in ['Laravel', 'Stripe', 'Laravel Cashier²²', 'Laravel Forge', 'Digital Ocean','TailwindCSS'] " :key="index">
										{{ skill }}
									</Badge>
								</div>
							</div>
						</div>
					</div>

					<!-- NetDesign -->
					<div class="bg-gray-50">
						<div class="py-24 pb-16">
							<div class="max-w-6xl mx-auto px-4 sm:px-0">
								<div class="max-w-5xl sm:px-4 sm:px-6 mb-10 mx-auto sm:space-y-2">
									<h2 class="text-base sm:text-2xl text-gray-500">NetDesigns</h2>
									<h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">Site web</h3>
								</div>
								<div>
									<figure>
										<nuxt-link :to=" { name : '' } " class="mt-1 text-blue-500 font-medium">
											<img class="relative rounded-lg shadow-xl mx-auto" src="~assets/images/digitalite.png" alt="App screenshot">
										</nuxt-link>
									</figure>
								</div>
								<div class="max-w-5xl mt-10 sm:px-4 sm:px-6 mx-auto">
									<h4 class="mb-2 text-2xl leading-none font-extrabold sm:text-3xl tracking-tight">
										<b>site agence web</b>
									</h4>
									<p class="mb-6 max-w-xl font-medium">
										Développement du site web d'une agence web accompagnant les entreprises et les particuliers dans l’ensemble de leurs stratégies digitales.
									</p>
									<Badge class="mr-2 sm:mr-3 mt-2 sm:mt-0" size="small" v-for="(skill, index) in ['Nuxt.Js', 'TailwindCSS'] " :key="index">
										{{ skill }}
									</Badge>
								</div>
							</div>
						</div>
					</div>

					<!-- Week end sport -->
					<div>
						<div class="py-10 sm:pt-24 sm:pb-16">
							<div class="max-w-6xl mx-auto px-4 sm:px-0">
								<div class="max-w-5xl sm:px-4 sm:px-6 mx-auto mb-10 sm:space-y-2">
									<h2 class="text-base sm:text-2xl text-gray-500">Week End Sport</h2>
									<h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">Site web</h3>
								</div>
								<div>
									<figure>
										<nuxt-link :to=" { name : '' } " class="mt-1 text-blue-500 font-medium">
											<img class="relative rounded-lg shadow-2xl mx-auto" src="~assets/images/week-end-sport.png" alt="App screenshot">
										</nuxt-link>
									</figure>
								</div>
								<div class="max-w-5xl mt-10 sm:px-4 sm:px-6 mx-auto">
									<h4 class="mb-2 text-2xl leading-none font-extrabold sm:text-3xl tracking-tight">
										<b>Site de paris sportifs</b>
									</h4>
									<p class="mb-6 max-w-xl font-medium">
										Développement du site de pronostics sportifs permettant à des abonnés de recevoir des pronostics réalisés par des parieurs professionnels.
									</p>
									<Badge class="mr-2 sm:mr-3 mt-2 sm:mt-0" size="small" v-for="(skill, index) in ['Laravel','Laravel Cashier', 'Stripe', 'TailwindCSS'] " :key="index">
										{{ skill }}
									</Badge>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="py-12 py-24 xl:py-32">
				<div class="max-w-5xl mx-auto px-4 sm:px-6">
					<div class="mb-16">
						<h2 class="leading-6 font-semibold tracking-wide text-blue-600 uppercase mb-3">Avis clients</h2>
						<p class="text-3xl sm:text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">Ils en parlent mieux</p>
					</div>
					<div>
						<Testimonial :author=" { name : 'Etienne', 'company' : 'Red Baboon' } ">
							<template #testimonial>
								Cheick a travaillé avec nous sur le développement en PHP/Laravel - Nuxt/Vue.js d'une page de bilans de paris sportifs (filtres, graphiques, statistiques). Le rendu était très pro, design et répondait au cahier des charges. Il maîtrise particulièrement les framework Vue et Nuxt qui ont un rendu design et des performances optimisées pour une application web. Côté gestion de projet, il a su se montrer disponible afin de rendre les livrables en temps et en heure. Je vous recommande Cheick !
							</template>
						</Testimonial>
						<Testimonial :author=" { name : 'Antoine', 'company' : 'Self' } ">
							<template #testimonial>
								<p class="max-w-lg">
									Cheick Ahmed est un excellent développeur, impliqué et à l'écoute. Je referai appel à ses services sans hésiter.
								</p>
							</template>
						</Testimonial>
						<Testimonial :author=" { name : 'Lauris Hounkpevi', 'company' : 'Ogan' } ">
							<template #testimonial>
								Cheick Ahmed est clairement un excellent développeur, très agréable humainement : à l'écoute, patient, engagé, rapide et efficace. Avec sa parfaite maîtrise de Nuxt.Js et Laravel mon projet a vu le jour avec un code propre et bien structuré. Je le recommande fortement !
							</template>
						</Testimonial>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
export default {
	head () {
		return {
			title : 'Sidibé Cheick Ahmed',
			htmlAttrs : {
				lang : 'fr-FR'
			},
			meta : [
			{ hid: 'description', name: 'description', content: 'Hello, je suis Ahmed ! développeur fullstack Laravel - Vue.js basé à Paris.' },
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'type', name: 'type', content: 'website' },
			{ hid : 'language', name : 'language', content : 'fr' }
			],
			link: [
			{
				rel: 'icon',
				type: 'image/svg+xml',
				href: '/favicon.svg',
			},
			]
		}
	}
}
</script>