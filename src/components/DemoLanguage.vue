<template>
  <fc-designer :locale="locale" />
</template>
<script>
import En from "@form-create/designer/locale/en.js";
import Cn from "@form-create/designer/locale/zh-cn.js";
import Jp from "@form-create/designer/locale/jp.js";
export default {
  data(){
    return {
      locale: En,
    }
  }
}
</script>