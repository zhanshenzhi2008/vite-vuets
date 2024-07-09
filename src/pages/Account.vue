<template>
  <div @click="toLogin"> 返回</div>
  <Demo-form></Demo-form>
  <router-view> </router-view>
</template>
<script lang="ts" setup>

import { useRoute, useRouter } from 'vue-router'
import DemoForm from '@/components/DemoForm.vue';

const router = useRouter()
function toLogin() {
  router.push({
    name: 'login'
  })
}
</script>