<template>
  <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
}

defineProps<Props>()
</script>
