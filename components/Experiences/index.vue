<template>
	<div class="mt-10 sm:grid sm:grid-cols-3 sm:gap-8">
		<div class="hidden sm:block border-l-4 border-base-gray h-[16.2rem]">
			<a
				v-for="experience in experiences"
				:key="experience.id"
				href="#"
				@click.prevent="switchExperience(experience)"
				class="transition-all hover:bg-base-green hover:bg-opacity-5 hover:text-base-green border-l-4 block pl-6 pr-4 py-4 text-sm font-medium transform -translate-x-1"
				:class="
					selectedExperience === experience.name
						? 'bg-base-green bg-opacity-5 border-base-green text-base-green'
						: 'border-transparent text-base-gray'
				"
			>
				{{ experience.name }}
			</a>
		</div>

		<div class="sm:hidden mb-6">
			<div class="sm:hidden">
				<label for="tabs" class="sr-only">Select a tab</label>
				<select
					id="tabs"
					name="tabs"
					v-model="selectedExperience"
					@change="switchExperience(experience)"
					class="bg-black text-base-gray block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-base-green focus:border-base-green sm:text-sm rounded-md"
				>
					<option
						selected
						v-for="experience in experiences"
						:key="experience.id"
					>
						{{ experience.name }}
					</option>
				</select>
			</div>
		</div>

		<div class="col-span-2">
			<experiences-description :experience="selectedExperienceObject" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		experiences: {
			type: Array,
			required: true,
		},
	},

	computed: {
		selectedExperienceObject() {
			return this.$_.find(this.experiences, [
				"name",
				this.selectedExperience,
			]);
		},
	},

	data() {
		return {
			selectedExperience: "The programmatic Company",
		};
	},

	methods: {
		switchExperience(experience) {
			if (!experience) {
				return;
			}

			this.selectedExperience = experience.name;
		},
	},
};
</script>
