<template>
	<div>
		<h3 class="text-lg leading-6 font-medium text-base-lightest-gray">
			<span> {{ experience.role }} </span>
			<span class="text-base-green font-bold"> {{ experience.at }} </span>
		</h3>
		<p class="text-base-light-gray text-xs mt-2">
			{{ experience.range }}
		</p>
		<div
			class="mt-4 prose prose-md text-base-gray"
			v-html="experience.description"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		experience: {
			required: true,
			type: Object,
		},
	},
};
</script>
