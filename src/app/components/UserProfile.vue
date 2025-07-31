<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold mb-4">ユーザープロフィール</h2>

    <div class="flex items-center mb-4">
      <img
        :src="user.avatar"
        :alt="user.name"
        class="w-16 h-16 rounded-full mr-4"
        @error="handleImageError"
      >
      <div>
        <h3 class="text-lg font-medium">{{ user.name }}</h3>
        <p class="text-gray-600">{{ user.email }}</p>
      </div>
    </div>

    <form @submit.prevent="updateProfile" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          名前
        </label>
        <input
          id="name"
          v-model="localUser.name"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          メールアドレス
        </label>
        <input
          id="email"
          v-model="localUser.email"
          type="email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        プロフィールを更新
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { User } from '~/types'

interface Props {
  user: User
}

interface Emits {
  (e: 'update-user', user: User): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// ローカル状態
const localUser = ref<User>({ ...props.user })

// 計算プロパティ
const isFormValid = computed(() => {
  return localUser.value.name.trim().length > 0 &&
         localUser.value.email.trim().length > 0 &&
         isValidEmail(localUser.value.email)
})

// メソッド
const updateProfile = () => {
  if (isFormValid.value) {
    emit('update-user', { ...localUser.value })
  }
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/default-avatar.png'
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// ウォッチャー
watch(() => props.user, (newUser) => {
  localUser.value = { ...newUser }
}, { deep: true })
</script>
