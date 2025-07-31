<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8">
      アプリケーションについて
    </h1>

    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold mb-4">技術スタック</h2>
        <ul class="list-disc list-inside space-y-2 mb-8">
          <li>Nuxt 3 - フルスタックフレームワーク</li>
          <li>Vue 3 - リアクティブフロントエンド</li>
          <li>TypeScript - 型安全な開発</li>
          <li>Tailwind CSS - ユーティリティファーストCSS</li>
        </ul>

        <h2 class="text-2xl font-semibold mb-4">機能</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <FeatureCard
            title="ユーザー管理"
            description="プロフィールの表示と編集機能"
            icon="👤"
          />
          <FeatureCard
            title="タスク管理"
            description="タスクの追加、完了、削除機能"
            icon="✅"
          />
          <FeatureCard
            title="カウンター"
            description="インクリメント・デクリメント機能"
            icon="🔢"
          />
          <FeatureCard
            title="レスポンシブ"
            description="モバイルフレンドリーなデザイン"
            icon="📱"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About - Nuxt3 Demo',
  meta: [
    { name: 'description', content: 'Nuxt3デモアプリケーションについて' }
  ]
})
</script>
