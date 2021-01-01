<template>
	<nav class="bg-white py-8" style="backdrop-filter: blur(6px); background-color: rgba(255,255,255,0.5); position: sticky; top: 0; z-index: 20">
		<div class="max-w-5xl mx-auto px-4 sm:px-6">
			<div class="flex items-center justify-between">
				<div class="flex-shrink-0 flex items-center">
					<img class="h-10 w-auto" src="~assets/images/logo-black.svg" alt="Ahmed logo">
				</div>

				<div>
					<p class="text-sm text-gray-500 sm:text-base">
						{{ date }}
					</p>
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