<template>
	<div class="shadow rounded bg-[#0a192f] px-6 py-8 group cursor-pointer flex flex-col justify-between">
		<div>
			<div class="flex items-center justify-between">
				<div>
					<svg class="w-8 h-8 text-base-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
					</svg>
				</div>
				<div v-if="hasLinks" class="flex items-center space-x-4">
					<a :href="link.url" target="_blank" rel="noopener noreferrer" v-for="link in project.links" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only"> {{ link.name }} </span>
						<template v-if="link.name === 'website' ">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</template>

						<template v-if="link.name === 'github' ">
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
							</svg>
						</template>

					</a>
				</div>
			</div>

			<div class="mt-10">
				<h3 class="text-base-lightest-gray text-xl font-medium group-hover:text-base-green transition-colors">
					{{ project.title }}
				</h3>
				<p class="mt-4 text-sm text-base-light-gray">
					{{ project.description }}
				</p>
			</div>
		</div>


		<ul v-if="hasTechs" class="mt-8 text-base-gray text-sm flex items-center space-x-4">
			<li v-for="lang in project.tech"> {{ lang }} </li>
		</ul>
	</div>
</div>
</template>

<script>
	export default {
		props: {
			project: {
				required: true,
				type: Object
			}
		},

		computed: {
			hasTechs() {
				return !this.$_.isEmpty(this.project.tech)
			},

			hasLinks() {
				return !this.$_.isEmpty(this.project.links)
			}
		}
	}
</script>