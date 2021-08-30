<template>
	<nav class="bg-white py-6 sticky top-0 z-20 dark:bg-black" style="backdrop-filter: saturate(180%) blur(8px); background-color: rgba(25, 26, 27, 0.8);">
		<div class="max-w-5xl mx-auto px-4 sm:px-6">
			<div class="flex items-center justify-between">
				<div class="flex-shrink-0 flex items-center">
					<nuxt-link :to=" { name : 'index' } ">
						<img class="h-10 w-auto" src="~assets/images/logo-black.svg" alt="Ahmed logo">
					</nuxt-link>
				</div>

				<div class="flex item-center space-x-2">
					<p class="text-sm text-gray-500 sm:text-base">
						{{ date }}
					</p>
			<!-- 		<nuxt-link :to=" { name : '' } ">
						A propos
					</nuxt-link>
					<nuxt-link :to=" { name : '' } ">
						Uses
					</nuxt-link> -->
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	computed : {
		date () {
			let date = new Date()
			return date.getFullYear()
		}
	}
}
</script>