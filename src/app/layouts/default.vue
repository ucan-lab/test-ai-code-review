<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-indigo-600 text-white">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Nuxt3 Demo</NuxtLink>

        <div class="flex space-x-4">
          <NuxtLink to="/" class="hover:text-indigo-200 transition-colors">ホーム</NuxtLink>
          <NuxtLink to="/about" class="hover:text-indigo-200 transition-colors">アプリについて</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Nuxt3 Demo Application</p>
        <p class="text-sm mt-2 text-gray-400">PR-agent動作確認用のデモアプリケーション</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// レイアウト用のロジックがあればここに記述
</script>
