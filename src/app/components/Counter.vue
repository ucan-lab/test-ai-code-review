<template>
  <div class="bg-white rounded-lg shadow-md p-6 text-center">
    <h2 class="text-2xl font-semibold mb-4">カウンター</h2>

    <div class="text-6xl font-bold text-indigo-600 mb-6">
      {{ count }}
    </div>

    <div class="space-x-4">
      <button
        @click="decrement"
        :disabled="count <= 0"
        class="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 disabled:opacity-50"
      >
        -1
      </button>

      <button
        @click="reset"
        class="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
      >
        リセット
      </button>

      <button
        @click="increment"
        class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
      >
        +1
      </button>
    </div>

    <div class="mt-4 text-sm text-gray-600">
      最後の更新: {{ lastUpdated }}
    </div>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
const lastUpdated = ref<string>('')

const updateTimestamp = () => {
  lastUpdated.value = new Date().toLocaleTimeString('ja-JP')
}

const increment = () => {
  count.value++
  updateTimestamp()
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
    updateTimestamp()
  }
}

const reset = () => {
  count.value = 0
  updateTimestamp()
}

// 初期化
onMounted(() => {
  updateTimestamp()
})
</script>
