<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold mb-4">タスクリスト</h2>

    <form @submit.prevent="handleAddTask" class="mb-6">
      <div class="flex gap-2">
        <input
          v-model="newTaskTitle"
          type="text"
          placeholder="新しいタスクを入力..."
          class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
        <button
          type="submit"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          追加
        </button>
      </div>
    </form>

    <div class="space-y-2">
      <TaskItem
        v-for="task in sortedTasks"
        :key="task.id"
        :task="task"
        @toggle="$emit('toggle-task', task.id)"
      />
    </div>

    <div class="mt-4 text-sm text-gray-600">
      完了: {{ completedCount }} / {{ tasks.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types'

interface Props {
  tasks: Task[]
}

interface Emits {
  (e: 'toggle-task', taskId: number): void
  (e: 'add-task', title: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const newTaskTitle = ref('')

// 計算プロパティ
const sortedTasks = computed(() => {
  return [...props.tasks].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.createdAt.getTime() - a.createdAt.getTime()
    }
    return a.completed ? 1 : -1
  })
})

const completedCount = computed(() => {
  return props.tasks.filter(task => task.completed).length
})

// メソッド
const handleAddTask = () => {
  if (newTaskTitle.value.trim()) {
    emit('add-task', newTaskTitle.value.trim())
    newTaskTitle.value = ''
  }
}
</script>
