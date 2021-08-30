<template>
	<div>
		<!-- Hero  -->
		<section>
			<div class="max-w-5xl mx-auto px-4 sm:px-6 py-32">
				<div class="space-y-10">
					<div class="max-w-4xl">
						<div>
							<p class="text-lg font-normal tracking-wider text-base-green">Hi, my name is</p>
							<h2 class="mt-5 text-2xl font-semibold tracking-wider text-base-lightest-gray sm:text-3xl lg:text-5xl xl:text-6xl">Sidibé Cheick Ahmed.</h2>
						</div>
						<h1 class="mt-4 text-4xl font-extrabold text-base-lightest-gray tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
							I build things for the web.
						</h1>
					</div>
					<p class="text-lg text-gray-500 max-w-2xl sm:text-xl">
						I'm fullstack developer based in Paris, specializing building (and occasionally designing) exceptional websites, applications, and everything in between.
					</p>
					<div class="max-w-md sm:flex">
						<div class="rounded-md shadow">
							<a href="#" class="inline-flex items-center px-8 py-3 border border-base-green shadow-sm text-base font-medium rounded-md text-base-green bg-transparent hover:bg-base-green hover:bg-opacity-10 focus:outline-none focus:ring-base-green">
								Get in touch
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>


		<!-- About me -->
		<section>
			<div class="py-16">
				<div class="max-w-5xl mx-auto px-4 space-y-8 sm:px-6">
					<div class="text-base max-w-prose mx-auto lg:max-w-none">
						<h2 class="text-base text-base-green font-semibold tracking-wide uppercase">About me</h2>
					</div>
					<div class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
						<p class="text-lg text-gray-500">
							Hi, I'm Ahmed and I enjoy builing highly performant, easy to use and look at custom solutions.
							My interest in web development started back in 2015 when I started learning JavaScript, I was fascinated by the endless possibilities of opening up a web page to interact with the user. With just a few lines of code, you can change the entire course of a user's interaction with your site.
						</p>
					</div>
					<div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
						<div class="relative z-10">
							<div class="prose prose-base-green text-gray-500 mx-auto lg:max-w-none">
								<p>
									Fast-forward to today, I've been working as a fullstack developer since 2016 and I've had the privilege to work with teams that values user-centered design, and where the quality of the product is a top priority.
								</p>
								<p>
									My main focus these days is buiding accessible, inclusive products and digital expericences as a freelancer for a variety of clients.
								</p>
								<h3 class="0">How I can help you</h3>
								<p>
									You’re looking for a developer who can help you create fast-paced web applications that are full of interactivity and rich content. I’m an expert at using frameworks like <strong>Vue.js - Nuxt.Js</strong> and <strong>Tailwindcss</strong> to quickly build scalable, powerful apps.
								</p>
							</div>
						</div>
						<div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
							<svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
								<defs>
									<pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
										<rect x="0" y="0" width="4" height="4" class="text-base-green" fill="currentColor" />
									</pattern>
								</defs>
								<rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
							</svg>
							<figure class="relative rounded-lg shadow-lg">
								<img class="rounded-lg shadow-lg object-cover h-[440px] object-center" src="~/assets/images/ahmed.JPG" alt="Whitney leaning against a railing on a downtown street" width="404" height="440">
							</figure>
						</div>
					</div>
				</div>
			</div>
		</section>


		<section>
			<div class="py-16 max-w-5xl mx-auto px-4 sm:px-6 sm:py-24">
				<h2 class="leading-6 font-semibold tracking-wide text-base-green uppercase mb-3">Where I’ve Worked</h2>
				<experiences :experiences="experiences" />
			</div>
		</section>


		<!-- Projects -->
		<section>
			<div class="py-16 max-w-5xl mx-auto px-4 sm:px-6 sm:py-24">
				<h2 class="leading-6 font-semibold tracking-wide text-base-green uppercase mb-3">Some Things I've Built</h2>
				<div class="mt-12 grid grid-cols-3 gap-6">
					<project-card v-for="project in projects" :key="project.id" :project="project" />
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
		}
	},

	async asyncData({ $content, $_ }) {
		try {
			let experiences = await $content('experiences').fetch()

			let projects = await $content('projects').sortBy('order').fetch()

			return {
				experiences : experiences.data,
				projects : $_.orderBy(projects.data, 'order'),
			}

		} catch (e) {
			console.log(e);
		}

	}
}
</script>