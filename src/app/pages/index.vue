<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8">
      {{ pageTitle }}
    </h1>

    <div class="grid md:grid-cols-2 gap-8">
      <UserProfile
        :user="currentUser"
        @update-user="handleUserUpdate"
      />

      <TaskList
        :tasks="tasks"
        @toggle-task="toggleTask"
        @add-task="addTask"
      />
    </div>

    <div class="mt-8">
      <Counter />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User, Task } from '~/types'

// SEOとメタデータ
useHead({
  title: 'ホーム - Nuxt3 Demo',
  meta: [
    { name: 'description', content: 'Nuxt3のデモアプリケーション' }
  ]
})

// リアクティブデータ
const pageTitle = ref('Nuxt3 デモアプリケーション')
const currentUser = ref<User>({
  id: 1,
  name: '田中太郎',
  email: 'tanaka@example.com',
  avatar: '/avatar.jpg'
})

const tasks = ref<Task[]>([
  { id: 1, title: 'Nuxt3を学習する', completed: false, createdAt: new Date() },
  { id: 2, title: 'コンポーネントを作成する', completed: true, createdAt: new Date() },
  { id: 3, title: 'PR-agentをテストする', completed: false, createdAt: new Date() }
])

// メソッド
const handleUserUpdate = (updatedUser: User) => {
  currentUser.value = { ...currentUser.value, ...updatedUser }
}

const toggleTask = (taskId: number) => {
  const task = tasks.value.find(t => t.id === taskId)
  if (task) {
    task.completed = !task.completed
  }
}

const addTask = (title: string) => {
  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date()
  }
  tasks.value.push(newTask)
}

// ライフサイクル
onMounted(() => {
  console.log('ページがマウントされました')
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
