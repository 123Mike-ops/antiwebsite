<!--  -->
<template>
  <div>
    <vue-qr :logoSrc="imageUrl" :bgSrc="bgSrcUrl" text="https://www.baidu.com" :size="200"></vue-qr>
  </div>
</template>

<script>
import vueQr from 'vue-qr'
export default {
  name: 'vueQrComponent',
  data () {
    return {
      imageUrl: require("../assets/logo.png"),//icon路径
      bgSrcUrl: require("../assets/back.png"),//icon路径
    }
  },
  components: {
    vueQr
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
