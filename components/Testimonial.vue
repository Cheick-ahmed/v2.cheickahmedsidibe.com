<template>
	<div class="bg-transparent overflow-hidden">
		<div class="relative pt-20 pb-12 lg:py-20">
			<div class="relative lg:flex lg:items-center">
				<div class="relative lg:ml-10">
					<svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-blue-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
						<path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
					</svg>
					<blockquote class="relative">
						<div class="text-lg font-semibold text-gray-500">
							<p>
								<slot name="testimonial"></slot>
							</p>
						</div>
						<footer class="mt-6">
							<div>
								<div class="text-base font-bold"> {{ author.name }} </div>
								<div class="text-base font-semibold text-blue-600"> {{ author.company }} </div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props : {
		author : {
			required : true,
			type : Object
		}
	}
}
</script>