<template>
  <div
    class="flex items-center p-3 border rounded-lg"
    :class="task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'"
  >
    <input
      :id="`task-${task.id}`"
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle')"
      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    >
    <label
      :for="`task-${task.id}`"
      class="ml-3 flex-1 cursor-pointer"
      :class="task.completed ? 'line-through text-gray-500' : 'text-gray-900'"
    >
      {{ task.title }}
    </label>
    <span class="text-xs text-gray-400">
      {{ formatDate(task.createdAt) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types'

interface Props {
  task: Task
}

interface Emits {
  (e: 'toggle'): void
}

defineProps<Props>()
defineEmits<Emits>()

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ja-JP', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
</script>
