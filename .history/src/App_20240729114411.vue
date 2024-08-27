
<template>
  <div id="app">
    <dlHeader />
    <!-- <router-link to="/hospital"></router-link> -->
    <router-view />
    <dlFooter />
  </div>
</template>

<script>
import dlHeader from '@/components/dlHeader'
import dlFooter from '@/components/dlFooter'
export default {
  name: 'App',
  components: {
    dlHeader,
    dlFooter
  },
}
</script>