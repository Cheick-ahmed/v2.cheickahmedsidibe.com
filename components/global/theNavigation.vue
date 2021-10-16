<template>
	<nav class="bg-white py-4 fixed w-full top-0 z-20 dark:bg-black dark:bg-opacity-70 shadow-2xl transform transition-all duration-700" style="backdrop-filter: saturate(180%) blur(8px);" :class="pinned ? 'translate-y-0' : '-translate-y-24'">
		<div class="max-w-5xl mx-auto px-4 sm:px-6">
			<div class="flex items-center justify-between">
				<div class="flex-shrink-0 flex items-center">
					<nuxt-link :to=" { name : 'index' } ">
						<img class="h-10 w-auto" src="~assets/images/logo-black.svg" alt="Ahmed logo">
					</nuxt-link>
				</div>

				<div class="flex item-center space-x-16">
					<div class="flex items-center space-x-4">
						<nuxt-link :to=" { name : 'blog' } " class="uppercase text-gray-500 px-3 py-6 rounded-md text-sm font-medium hover:text-white transition-colors duration-150 hover:bg-white hover:bg-opacity-5">
							Blog
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			pinned: true
		}
	},

	computed : {
		date () {
			let date = new Date()
			return date.getFullYear()
		}
	},

	mounted() {
		this.addScrollListerner()
	},

	methods: {
		addScrollListerner() {
			let pxTriger = 0
			const shouldPinned = 650
			document.addEventListener('scroll', () => {
				const pxFromTop = window.scrollY || window.pageYOffset
				if (pxFromTop > shouldPinned) {
					this.pinned = pxFromTop < pxTriger

					pxTriger = pxFromTop
				} else {
					this.pinned = true
				}
			})
		}
	}
}
</script>